import React from "react";
import Cards from "../../Components/Cards/Cards";
import "../../Components/Cards/Cards.css";
import "./Acceuil.css";
import laptop from "../..//images/Acceuil/laptop.jpg";
import contact from "../..//images/Acceuil/contact.jpg";
import web from "../..//images/Acceuil/web.jpg";
import softwaredev from "../..//images/Acceuil/software-developer.jpg";
import { useNavigate } from "react-router";

function Acceuil() {
  const navigation = useNavigate();

  return (
    <div className="ContainerAcceuil">
      <div className="intro">
        <h6>
          Besoin d'un logiciel ou d'un site web sur mesure, SoftWebDev est là
          pour vous ! Nous sommes spécialisés dans la création de solutions
          numériques personnalisées, conçues pour répondre aux besoins
          spécifiques de chaque client.
        </h6>
      </div>

      <div>
        <h1>Pourquoi choisir SoftWebDev ?</h1>
      </div>

      <Cards
        img={laptop}
        alt={"ddd"}
        txt={
          "Nous disposons d'une expérience solide dans le développement web et  logiciel, ce qui nous permet de comprendre et de répondre aux besoins  spécifiques de chaque client. Nous restons à jour avec les dernières technologies pour vous offrir des solutions innovantes et efficaces."
        }
        height={82}
      ></Cards>

      <div className="containerSeparation">
        <div className="separation"></div>
      </div>

      <div>
        <h1>Nos Offres</h1>
      </div>

      <div className="containerOffreMain">
        <div
          onClick={() => {
            navigation("/offreWeb");
          }}
        >
          <div>
            <h2>Création de Site Web</h2>
          </div>
          <Cards
            img={web}
            alt={"ddd"}
            txt={
              "Nous concevons des sites web modernes, responsables et optimisés pour le référencement. Que ce soit pour une entreprise, un blog ou un  e-commerce, nous vous aidons à créer une présence en ligne forte et  engageante."
            }
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
        </div>

        <div
          onClick={() => {
            navigation("/offreSoftware");
          }}
        >
          <div>
            <h2>Création de Logiciels</h2>
          </div>
          <Cards
            img={softwaredev}
            alt={"ddd"}
            txt={
              "Nous développons des logiciels sur mesure pour répondre à vos besoins  spécifiques. Que ce soit pour automatiser des processus, gérer des  données ou améliorer l'efficacité opérationnelle, nous sommes là pour  vous accompagner."
            }
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
        </div>
      </div>

      <div className="containerSeparation">
        <div className="separation"></div>
      </div>

      <div>
        <h1>Contactez-nous</h1>
      </div>

      <div></div>

      <Cards
        img={contact}
        alt={"ddd"}
        txt={
          "Vous avez un projet en tête ou vous souhaitez  discuter de vos besoins, n'hésitez pas à nous contacter. Nous serons  ravis de vous aider à transformer vos idées en réalité numérique."
        }
        height={82}
      ></Cards>
      <div
        className="ContainerFooter"
        onClick={() => {
          navigation("/mentionsLegales");
        }}
      >
        <h6>Mentions légales</h6>
      </div>
    </div>
  );
}

export default Acceuil;
