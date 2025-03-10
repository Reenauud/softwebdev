import Cards from "../../../Components/Cards/Cards"
import softwaredev from "../../../../src/images/Acceuil/software-developer.jpg"
import backend from "../../../../src/images/offresSiteWeb/backend.jpg"
import bdd from "../../../../src/images/offresSiteWeb/bdd.jpg"
import conception from "../../../../src/images/offresSiteWeb/conception.jpg"
import debug from "../../../../src/images/offresSiteWeb/debug.jpg"
import deploiement from "../../../../src/images/offresSiteWeb/deploiement.jpg"
import reunion from "../../../../src/images/offresSiteWeb/reunion.jpg"
import prototype from "../../../../src/images/offresSiteWeb/prototype.jpg"
import frontend from "../../../../src/images/offresSiteWeb/frontend.jpg"



function WebOffres()
{



    return (  <div className="ContainerWebOffre">
        

        <h1>Création de Site Web</h1>

        <h3>Réunion Initiale et Analyse des Besoins</h3>
        <Cards
            img={reunion}
            alt={"ddd"}
            txt={"Nous commençons par une réunion avec vous pour comprendre vos objectifs  et vos besoins spécifiques. Nous recueillons des informations sur votre  public cible et les fonctionnalités souhaitées pour votre site web."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Conception du Projet</h3>
        <Cards
            img={conception}
            alt={"ddd"}
            txt={"Nous créons un cahier des charges détaillé basé sur nos discussions  initiales. Nous proposons une structure de navigation et une  architecture technique adaptée à vos besoins."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Design et Prototypage</h3>
        <Cards
            img={prototype}
            alt={"ddd"}
            txt={"Nous développons des maquettes visuelles (wireframes, mockups) pour  l'interface utilisateur. Nous présentons ensuite un prototype  fonctionnel pour validation."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Développement Front-end</h3>
        <Cards
            img={frontend}
            alt={"ddd"}
            txt={"Nous écrivons le code HTML, CSS, et JavaScript pour l'interface  utilisateur. Nous utilisons des frameworks comme React ou Angular si  nécessaire pour améliorer l'expérience utilisateur."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Développement Back-end </h3>
        <Cards
            img={backend}
            alt={"ddd"}
            txt={"Nous créons l'API ou le serveur web avec des langages comme PHP ou  Python. Nous utilisons des frameworks comme Laravel ou Django pour  assurer une robustesse et une flexibilité maximales."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Intégration de la Base de Données </h3>
        <Cards
            img={bdd}
            alt={"ddd"}
            txt={"Nous configurons et intégrons une base de données (MySQL, PostgreSQL,  MongoDB, etc.) pour stocker et gérer vos données de manière sécurisée."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Tests et Débogage</h3>
        <Cards
            img={debug}
            alt={"ddd"}
            txt={"Nous effectuons des tests unitaires, d'intégration, et fonctionnels pour garantir que votre site fonctionne parfaitement. Nous corrigons les  bugs et optimisons les performances pour une expérience utilisateur  fluide."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Déploiement</h3>
        <Cards
            img={deploiement}
            alt={"ddd"}
            txt={"Nous mettons en ligne votre site sur un serveur web sécurisé (AWS,  Google Cloud, etc.). Nous configurons les certificats SSL pour assurer  une navigation sécurisée."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>




    </div> )
}


export default WebOffres