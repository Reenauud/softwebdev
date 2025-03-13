import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [lastName, SetLastName] = useState("");
  const [firstName, SetFirstName] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState(0);
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");
  const [agreeStatus, SetAgreeStatus] = useState();
  const [company, SetCompany] = useState();


  const ErrorSendMail = () =>
    toast("veuillez cocher la case pour envoyé votre Email");

  const errorValue = () =>
    toast("veuillez remplir tout les champs obligatoire");

  const callApi = async () => {
    const checkBox = document.querySelector('input[type="checkbox"]');

    if (checkBox.checked) {
      if (
        phoneNumber === 0 ||
        email === "" ||
        message === "" ||
        firstName === "" ||
        lastName === ""
      ) {
        errorValue();
      } else {
        await axios
          .post("https://softwebdev.fr:8000/api", {
            lastName: lastName,
            firstName: firstName,
            phoneNumber: phoneNumber,
            email: email,
            message: message,
            agreeStatus: agreeStatus,
            company: company,
          })
          .then(() => {
            const mailSend = new Promise((resolve) =>
              setTimeout(resolve, 3000)
            );
            toast.promise(mailSend, {
              pending: `${"Envoi de l'email en cours"}`,
              success: "Email envoyé",
              error: "Promise rejected 🤯",
            });
          });
      }
    } else {
      ErrorSendMail();
    }
  };

  return (
    <div className="containerContact">
      <ToastContainer> </ToastContainer>
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
        <h6>Société:</h6>
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
        <textarea style={{}}
        className="textarea"
          type="text"
          onChange={(e) => {
            SetMessage(e.target.value);
          }}
        />
      </form>
      <div className="containerCheckbox">
        <input
          type="checkbox"
          onChange={(e) => SetAgreeStatus(e.target.value)}
        />
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
