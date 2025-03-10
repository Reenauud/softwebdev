import "./TopBar.css";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router";

function TopBar() {
  return (
    <div className="Container">
      <div className="ContainerLogo">
        <img className="Logo" src={logo} alt="Logo du site" />
      </div>
          <nav className="ContainerNav">
            <Link to={"/"} className="linkText"> Acceuil </Link>
            <Link to={"/offres"} className="linkText"> Nos offres </Link>
            <Link to={"/contact"} className="linkText"> Contactez-nous </Link>
          </nav>
    </div>
  );
}

export default TopBar;
