import product1 from "../img/vision-suite.jpg";
import product2 from "../img/al-driven.jpg";
import product3 from "../img/custom.jpg";
import "../styles/MainProdutos.css";
const MainProdutos = () => {
  return (
    <main id="main-produtos" className="flex">
      <section id="product-one">
        <h1>Contrast Vision Suite</h1>
        <section className="flex">
          <img className="product" src={product1} alt="Contrast Vision Suite" />
          <p>
            A suíte Contrast Vision é nossa solução abrangente para empresas que
            buscam excelência em reconhecimento de imagens. Inclui: Contrast
            ImageDetect: Identificação precisa e classificação de elementos em
            imagens, desde objetos até textos. Contrast VisualInsight: Análise
            aprofundada e geração de insights a partir de dados visuais para
            impulsionar decisões estratégicas. Contrast ImageGuard: Segurança
            robusta para garantir a integridade e a privacidade dos dados
            visuais.
          </p>
        </section>
      </section>
      <section id="product-two">
        <h1 className="text-align-end">Contrast AI-Driven Automation</h1>
        <section className="flex">
          <p>
            Nossa solução de automação impulsionada por IA permite a integração
            de sistemas inteligentes para otimizar processos em diversas
            indústrias: Contrast IndustrialVision: Automação de processos
            industriais com base em visão computacional avançada para aumentar a
            eficiência e a precisão. Contrast MedicalDiagnose: Suporte na
            identificação precoce de condições médicas por meio da análise
            precisa de imagens médicas.
          </p>
          <img className="product" src={product2} alt="Contrast Vision Suite" />
        </section>
      </section>
      <section id="product-three">
        <h1>Contrast Custom Solutions</h1>
        <section className="flex">
          <img className="product" src={product3} alt="Contrast Vision Suite" />
          <p>
            Desenvolvemos soluções personalizadas de reconhecimento de imagens
            para atender às necessidades exclusivas do seu negócio. Trabalhamos
            em estreita colaboração com nossos clientes para criar soluções
            adaptadas que impulsionem a inovação e a eficiência. Para mais
            detalhes sobre nossos produtos ou para discutir como podemos atender
            às necessidades específicas da sua empresa, entre em contato
            conosco.
          </p>
        </section>
      </section>
    </main>
  );
};

export default MainProdutos;
