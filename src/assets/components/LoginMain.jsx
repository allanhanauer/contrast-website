import "../styles/LoginMain.css";
import logoContrast from "../img/logo-contrast.svg";
import { Link } from "react-router-dom";
const LoginMain = () => {
  return (
    <main className="flex" id="login-main">
      <div id="container-img-login">
        <img id="contrast-logo-login" src={logoContrast} alt="logoContrast" />
        <h1>Contrast</h1>
        <p>
          Bem-vindo de volta à Contrast! Insira suas credenciais abaixo para
          acessar sua conta. Estamos ansiosos para tê-lo novamente em nosso
          ambiente de inovação e tecnologia.
        </p>
      </div>
      <form
        id="form-login-main"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div id="layout-form-main">
          <h3>Entrar</h3>
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
          <Link to="/dashboard">
            <button type="submit">LOGIN</button>
          </Link>
          <div id="cad-login">
            <div id="square-login"></div>
            <p>Não possui uma conta?</p>
            <div id="square-login"></div>
          </div>
          <div id="cad-link">
            <Link
              id="personal-link"
              className="link-login"
              to="/cadastro-persona"
            >
              Conta Pessoal
            </Link>
            <Link
              id="corp-link"
              className="link-login"
              link-login
              to="/cadastro-corp"
            >
              Conta Corporativa
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default LoginMain;
