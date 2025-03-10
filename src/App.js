import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import Acceuil from "./Views/Accueil/Acceuil";
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./Views/Contact/Contact";
import OffresView from "./Views/Offres/OffresView";
import WebOffres from "./Views/Offres/WebOffres/WebOffres";
import SoftwareOffres from "./Views/Offres/SoftwareOffres/SoftwareOffres";
import LegalNotice from "./Views/LegalNotice/LegalNotice";

function App() {
  return (
    <div className="App">

      <TopBar></TopBar>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/offres" element={<OffresView />} />
          <Route path="/offreWeb" element={<WebOffres />} />
          <Route path="/offreSoftware" element={<SoftwareOffres />} />
          <Route path="/mentionsLegales" element={<LegalNotice />} />
        </Routes>
    </div>
  );
}

export default App;
