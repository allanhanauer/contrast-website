import '../styles/Footer.css'
const Footer = () => {
  return (
    <>
    <footer>
      <section  className='flex' id='footer-content'>

      <section id='sobre-footer'>
        <h3>Sobre a Contrast</h3>
        <p>A Contrast é líder em soluções de reconhecimento de imagens impulsionadas por inteligência artificial. Nossa missão é transformar o mundo visual, fornecendo tecnologias inovadoras e serviços de qualidade.</p>
      </section>
      <section id='contato-footer'>
        <h3 className='text-align-center'>Contato</h3>
        <ul>
          <li>Email : info@contrast.ai</li>
          <li>Telefone: +XX XXX XXX XXXX</li>
          <li>Website: www.contrast.ai</li>
        </ul>
      </section>
      <section id='privacidade-footer'>
        <h3>Privacidade e Segurança</h3>
        <p>Comprometemo-nos com a segurança e privacidade dos seus dados. Leia nossa Política de Privacidade para mais informações.</p>
      </section>
      </section>
      <p className='text-align-center threeColor'>Copyright © 2023 Contrast. Todos os direitos reservados.</p>
    </footer>
    </>
  )
}

export default Footer