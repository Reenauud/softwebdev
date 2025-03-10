import react from "react";
import "./LegalNotice.css"

function LegalNotice() {
  return (
    <div>
      <h4>Mentions légales</h4>

      <div>
        <h4>SoftWebDev</h4>
        <h4>3 RUE Arthur Rimbaud</h4>
        <h4>70400 , Héricourt - FRANCE</h4>
        <h4>SITE : https://softwebsolutions.eu</h4>
        <h4>SIREN : 941 437 311</h4>
      </div>

      <div>
        <h4>Hébergement</h4>
        <h4>OVH</h4>
        <h4>2 rue Kellermann</h4>
        <h4>59100 Roubaix - France</h4>
        <h4>Site : www.ovh.com</h4>
      </div>

      <div>
        <h4>Informations personnelles</h4>
        <h4>
          Nous respectons votre vie privée. Notre site web ne collecte aucune
          donnée personnelle et n'utilise pas de cookies. Votre visite reste
          entièrement anonyme. Les seules informations que nous recevons sont
          celles que vous choisissez de nous transmettre via le formulaire de
          contact. Ces données sont uniquement envoyées par e-mail à
          contact@softwebdev.fr
        </h4>
      </div>
    </div>
  );
}

export default LegalNotice;
