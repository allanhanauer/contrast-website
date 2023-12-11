import { Link } from "react-router-dom";
import logo from "../img/logo-contrast.svg";
import '../styles/Header.css'
const Header = () => {
  return (
    <header className="flex">
      <section id="logo-header" className="flex">
          <img src={logo} id="logo-contrast-header" />
        <Link className="header-link" to="contrast-website/">
          <h3 className="bold">CONTRAST</h3>
        </Link>
      </section>
      <nav className="flex">
        <Link className="header-link animate" to="/produtos">PRODUTOS</Link>
        <Link className="header-link animate" to="/sobre">SOBRE NÓS</Link>
        <Link className="header-link animate" to="/contatos">CONTATOS</Link>
        <Link className="header-link login" to="/login">ENTRAR</Link>
      </nav>
    </header>
  );
};

export default Header;
