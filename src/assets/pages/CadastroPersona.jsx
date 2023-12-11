import "../styles/LoginMain.css";
import logoContrast from "../img/logo-contrast.svg";
import { Link } from "react-router-dom";
const CadastroPersona = () => {
  return (
    <main className="flex" id="login-main">
      <div id="container-img-login">
        <img id="contrast-logo-login" src={logoContrast} alt="logoContrast" />
        <h1>Contrast</h1>
        <p>
          Ótimo vê-lo interessado em fazer parte da família Contrast! Preencha o
          formulário abaixo com suas informações pessoais para começarmos.
          Juntos, vamos explorar o mundo visual com tecnologia de ponta
        </p>
      </div>
      <form
        id="form-login-main"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div id="layout-form-main">
          <h3>Cadastro - Conta Pessoal</h3>
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

export default CadastroPersona;
