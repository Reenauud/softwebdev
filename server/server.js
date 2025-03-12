const PORT = 8000;
const Cors = require("cors");
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const Mailjet = require("node-mailjet");
const https = require("https");
const fs = require("fs");

require("dotenv").config();

const sslOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/softwebsolutions.eu/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/softwebsolutions.eu/fullchain.pem"),
};

app.use(express.static("../public"));
app.use(
  Cors({
    origin: "https://softwebsolutions.eu",
    methods: "GET,POST",
    credentials: true,
  })
);
app.use(express.json());

function sendEmail(lastName, firstName, phoneNumber, email, message, company) {
  const mailjet = Mailjet.apiConnect(
    process.env.IDMAILJET,
    process.env.PASSMAILJET
  );

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.EMAILFROM,
          Name: "Mailjet Pilot",
        },
        To: [
          {
            Email: process.env.EMAILTO,
            Name: "passenger 1",
          },
        ],
        Subject: "nouvel email envoyé de SoftWebDev",
        TextPart: "",
        HTMLPart: ` 
                <h4>Prénom : ${firstName}</h4>
                <h4>Nom : ${lastName}</h4>
                <h4>entreprise : ${company}</h4>
                <h4>email : ${email}</h4>
                <h4>numéro de téléphone : ${phoneNumber}</h4>
                <h3>${message}</h3>
                `,
      },
    ],
  });

  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
}

app.post("/api", (req, res) => {
  let lastName = req.body.lastName;
  let firstName = req.body.firstName;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let message = req.body.message;
  let company = req.body.company;

  sendEmail(lastName, firstName, phoneNumber, email, message, company);

  res.send(
    console.log(lastName, firstName, phoneNumber, email, message, company)
  );
});

// app.listen(PORT, () => {
//   console.log("le serveur tourne sur le port", PORT);
// });

// Démarrer le serveur HTTPS
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Le serveur HTTPS tourne sur le port ${PORT}`);
});
