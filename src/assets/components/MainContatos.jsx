import "../styles/MainContatos.css";
const MainContatos = () => {
  return (
    <main id="main-contatos">
      <section id="main-contatos-one">
        <h1>CONTATOS</h1>
        <section className="flex">
          <section>
            <h3>Informações de Contato</h3>
            <ul>
              <li>📧 Email: info@contrast.ai</li>
              <li>📞Telefone: +XX XXX XXX XXXX</li>
              <li>🌐 Website: www.contrast.ai</li>
            </ul>
          </section>
          <section>
            <h3>Sede Principal</h3>
            <ul>
              <li>Rua Principal, 123</li>
              <li>Cidade, Estado</li>
              <li>CEP: XXXXX-XXX</li>
              <li>País</li>
            </ul>
          </section>
          <section>
            <h3>Redes Sociais</h3>
            <ul>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>GitHub</li>
            </ul>
          </section>
        </section>
      </section>
      <section id="main-contatos-two">
        <h1>SUPORTE AO CLIENTE</h1>
        <p>Nosso time de suporte está pronto para ajudar! Se precisar de assistência ou tiver alguma dúvida, entre em contato conosco através do email support@contrast.ai ou pelo telefone +XX XXX XXX XXXX.</p>
      </section>
      <section id="main-contatos-three">
        <h1>TRABALHE CONOSCO</h1>
        <p>Estamos sempre à procura de talentos excepcionais para se juntar à nossa equipe inovadora. Confira nossas oportunidades de carreira em Linkedin/contrast ou envie seu currículo para careers@contrast.ai.</p>
      </section>
    </main>
  );
};

export default MainContatos;
