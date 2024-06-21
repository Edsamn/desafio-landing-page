import { Link } from 'react-router-dom';
import ButtonDefault from '../components/button-default/ButtonDefault';
import Container from '../components/container/Container';
import DefaultCard from '../components/default-card/DefaultCard';
import TextContainer from '../components/text-container/TextContainer';
import DefaultPage from '../config/layout/DefaultPage';
import ilustracao from '../assets/ilustracao.png';
import ilustracao2 from '../assets/ilustracao2.png';
import ilustracao3 from '../assets/ilustracao3.png';
import ilustracao4 from '../assets/ilustracao4.jpg';
import ImgStyled from '../components/img-component/ImgStyled';

function Home() {
  return (
    <>
      <DefaultPage>
        <Container ordem={false}>
          <TextContainer>
            <h1>Sobre o curso:</h1>
            <p>
              Esta é uma área em crescimento no Brasil, visto que cada vez mais empresas têm entendido a importância de
              realizar uma efetiva Análise de Dados, que guie seus projetos e evite o surgimento de possíveis crises.
              Para se profissionalizar no ramo, uma boa pedida é o curso de Análise de Dados, encontrado tanto como
              graduação, quanto como pós-graduação ou especialização.
            </p>
            <p>
              A graduação em Análise De Dados é indicada para aqueles que já concluíram o ensino médio, e desejam dar
              início à uma carreira de nível superior. Nela são trabalhados assuntos como: estatística, algoritmos,
              programação, estrutura e bancos de dados, inteligência artificial, big data, modelos de negócios e vários
              outros. Trata-se de um curso superior de tecnologia (CST), com duração média de dois anos.
            </p>
          </TextContainer>
        </Container>
        <Container ordem={false}>
          <h2>Vantagens da nossa formação:</h2>
        </Container>
        <Container ordem={false}>
          <DefaultCard>
            <TextContainer>
              <ImgStyled src={ilustracao3}></ImgStyled>
              <h3>Começar uma nova carreira de sucesso</h3>
              <p>
                Entre para uma área com altos salários e oportunidades desafiadoras. Domine as ferramentas de análise de
                dados para utilizar em projetos reais e torne-se um especialista em TI.
              </p>
            </TextContainer>
          </DefaultCard>
          <DefaultCard>
            <TextContainer>
              <ImgStyled src={ilustracao4}></ImgStyled>
              <h3>Trabalhar de casa para uma grande empresa</h3>
              <p>
                Comece a trabalhar em projetos de análise de dados de qualquer parte do mundo. Aprenda a utilizar Google
                Cloud, Google Sheets, SQL, Looker Studio, PySpark e Python para resolver todo tipo de tarefa na área.
              </p>
            </TextContainer>
          </DefaultCard>
          <DefaultCard>
            <TextContainer>
              <ImgStyled src={ilustracao2}></ImgStyled>
              <h3>Aprimorar suas habilidades e ser promovido</h3>
              <p>
                Conquiste habilidades para superar os desafios mais complexos da análise de dados e chegue a um novo
                nível profissional. Ganhe uma promoção, melhores salários e o respeitos de seus colegas.
              </p>
            </TextContainer>
          </DefaultCard>
        </Container>
        <Container ordem={true}>
          <TextContainer>
            <h2>Média salarial da área</h2>
            <p>Salário Júnior: R$3000 - R$5000</p>
            <p>Salário Pleno: R$5000 - R$8000 </p>
            <p>Salário Sênior: R$8000 - R$11000</p>
          </TextContainer>
        </Container>
        <Container ordem={false}>
          <img src={ilustracao}></img>
        </Container>
        <Container ordem={true}>
          <TextContainer>
            <h2>Ficou interessado?</h2>

            <h2>Deixe seu contato conosco.</h2>
          </TextContainer>
          <Link to={'/contact'}>
            <ButtonDefault label="Contato" />
          </Link>
        </Container>
      </DefaultPage>
    </>
  );
}

export default Home;
