import "../styles/LoginMain.css";
import logoContrast from "../img/logo-contrast.svg";
import { Link } from "react-router-dom";
const CadastroCorp = () => {
  return (
    <main className="flex" id="login-main">
      <div id="container-img-login">
        <img id="contrast-logo-login" src={logoContrast} alt="logoContrast" />
        <h1>Contrast</h1>
        <p>
          Obrigado por escolher a Contrast para impulsionar o potencial visual
          de sua empresa! Complete o formulário abaixo com os detalhes da sua
          empresa para criar uma conta corporativa. Estamos prontos para elevar
          seus padrões visuais com nossa inteligência artificial.
        </p>
      </div>
      <form
        id="form-login-main"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div id="layout-form-main">
          <h3>Cadastro - Conta Corporativa</h3>
          <label className="label-text" htmlFor="user">
            USUÁRIO
            <input type="text" className="inp" name="user" id="user-input" />
          </label>
          <label className="label-text" htmlFor="password">
            SENHA
            <input
              type="password"
              className="inp"
              name="passw"
              id="user-password"
            />
          </label>
          <div id="lembre-box">
            <label htmlFor="lembre">
              <input type="checkbox" name="lembre" id="lembre" />
              Lembre de mim
            </label>
            <Link className="login" to="/login">
              Esqueceu a senha?
            </Link>
          </div>
          <Link to="/login">
            <button type="submit">Cadastro</button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default CadastroCorp;
