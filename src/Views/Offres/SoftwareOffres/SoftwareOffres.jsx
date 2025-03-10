import react from "react"
import Cards from "../../../Components/Cards/Cards"
import backend from "../../../../src/images/offreLogiciel/backend.jpg"
import bdd from "../../../../src/images/offreLogiciel/bdd.jpg"
import codeSource from "../../../../src/images/offreLogiciel/codeSource.jpg"
import conception from "../../../../src/images/offreLogiciel/conception.jpg"
import prototype from "../../../../src/images/offreLogiciel/prototype.jpg"
import debug from "../../../../src/images/offreLogiciel/debug.jpg"
import reunion from "../../../../src/images/offreLogiciel/reunion.jpg"
import deploiement from "../../../../src/images/offreLogiciel/deploiement.jpg"


function SoftwareOffres()
{

    return (  <div className="ContainerSoftwareOffre">
        

        <h1>Création d'un Locigiel</h1>

        <h3>Réunion Initiale et Analyse des Besoins</h3>
        <Cards
            img={reunion}
            alt={"ddd"}
            txt={"Nous commençons par une réunion avec vous pour comprendre vos objectifs  et vos besoins spécifiques. Nous recueillons des informations sur votre  public cible et les fonctionnalités souhaitées pour votre Logiciel."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Conception de l’Architecture Logicielle</h3>
        <Cards
            img={conception}
            alt={"ddd"}
            txt={"Nous définissons la structure globale du logiciel (modularité,  scalabilité). Nous choisissons les technologies et frameworks appropriés pour assurer une performance optimale."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Design de l’Interface Utilisateur (UI/UX)</h3>
        <Cards
            img={prototype}
            alt={"ddd"}
            txt={"Nous développons des maquettes visuelles (wireframes, mockups) pour  l'interface utilisateur. Nous présentons ensuite un prototype  fonctionnel pour validation."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Développement du Code Source</h3>
        <Cards
            img={codeSource}
            alt={"ddd"}
            txt={"Nous écrivons le code en utilisant des langages de programmation adaptés (Java, C++, Python, etc.). Nous utilisons des frameworks et  bibliothèques pour accélérer le développement tout en maintenant une  qualité élevée."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Développement Back-end </h3>
        <Cards
            img={backend}
            alt={"ddd"}
            txt={"Nous créons l'API ou le serveur avec des langages comme PHP ou  Python. Nous utilisons des frameworks comme Laravel ou Django pour  assurer une robustesse et une flexibilité maximales."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Intégration de la Base de Données </h3>
        <Cards
            img={bdd}
            alt={"ddd"}
            txt={"Nous configurons et intégrons une base de données pour stocker et gérer vos données de manière sécurisée."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Tests et Débogage</h3>
        <Cards
            img={debug}
            alt={"ddd"}
            txt={"Nous effectuons des tests unitaires, d'intégration, et de système pour  garantir que votre logiciel fonctionne parfaitement. Nous identifions et corrigeons les bugs pour une expérience utilisateur fluide."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>
           <h3>Déploiement</h3>
        <Cards
            img={deploiement}
            alt={"ddd"}
            txt={"Nous mettons le logiciel à disposition des utilisateurs via un  installateur ou un package. Nous configurons les mécanismes de mise à  jour automatique si nécessaire pour assurer une expérience continue."}
            height={82}
            width={"100%"}
            flex={"column"}
          ></Cards>




    </div> )
}


export default SoftwareOffres