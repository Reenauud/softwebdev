import React, { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";

function Contact() {
  const [lastName, SetLastName] = useState("");
  const [firstName, SetFirstName] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState(0);
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  const [agreeStatus, SetAgreeStatus] = useState();
  const [company, SetCompany] = useState();

  const callApi = async () => {
    const checkBox = document.querySelector('input[type="checkbox"]');

    if (checkBox.checked) {
      console.log("La checkbox est cochée.");
      const messageNotCheck = document.getElementsByClassName("notcheck");
      messageNotCheck[0].textContent ="";

      await axios
        .post("https://softwebdev.fr/api", {
          lastName: lastName,
          firstName: firstName,
          phoneNumber: phoneNumber,
          email: email,
          message: message,
          agreeStatus: agreeStatus,
          company: company,
        })
        .then((data) => console.log(data));
    } else {
      console.log("La checkbox n'est pas cochée.");
      const messageNotCheck = document.getElementsByClassName("notcheck");
      messageNotCheck[0].textContent =
        "veuillez cocher la case pour envoyé votre Email";
    }
  };

  return (
    <div>
      <form>
        <h6>Nom: *</h6>
        <input
          type="text"
          onChange={(e) => {
            SetLastName(e.target.value);
          }}
        />
        <h6>Prenom: *</h6>
        <input
          type="text"
          onChange={(e) => {
            SetFirstName(e.target.value);
          }}
        />
        <h6>Société: *</h6>
        <input
          type="text"
          onChange={(e) => {
            SetCompany(e.target.value);
          }}
        />
        <h6>Numéro de téléphone: *</h6>
        <input
          type="text"
          onChange={(e) => {
            SetPhoneNumber(e.target.value);
          }}
        />
        <h6>Email: *</h6>
        <input
          type="text"
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
        />
        <h6>Messages: *</h6>
        <input
          type="area"
          onChange={(e) => {
            SetMessage(e.target.value);
          }}
        />
      </form>
      <div>
        <input
          type="checkbox"
          onChange={(e) => SetAgreeStatus(e.target.value)}
        />
        <h6 className="notcheck"></h6>
        <h6>
          J’accepte que les données de ce formulaire soit envoyées par e-mail à
          contact@softwebdev.fr
        </h6>
      </div>
      <button onClick={callApi}>Envoyé</button>
    </div>
  );
}

export default Contact;
