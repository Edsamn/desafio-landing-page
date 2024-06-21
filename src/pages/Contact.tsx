import Form from '../components/form/Form';
import DefaultCard from '../components/default-card/DefaultCard';
import DefaultPage from '../config/layout/DefaultPage';
import Container from '../components/container/Container';
import TextContainer from '../components/text-container/TextContainer';
import ButtonDefault from '../components/button-default/ButtonDefault';

function Contact() {
  function handleClick() {
    alert('Obrigado pela mensagem. Responderemos o mais rápido possível.');
  }

  return (
    <>
      <DefaultPage>
        <Container ordem={false} cor={false}>
          <TextContainer>
            <h1>Perguntas Frequentes (FAQs)</h1>
            <p>
              <h3>1. Quais são os pré-requisitos necessários para me inscrever em um curso de análise de dados?</h3>A
              maioria dos cursos de análise de dados exige conhecimento básico de estatística e familiaridade com
              software de planilha. como Microsoft Excel ou Planilhas Google. Alguns cursos avançados também podem
              exigir conhecimento de programação linguagens como Python ou R.
            </p>
            <p>
              <h3>2. Quanto tempo leva para concluir um curso de análise de dados?</h3>A duração de um curso de análise
              de dados pode variar. Os cursos introdutórios podem levar algumas semanas para serem concluídos, enquanto
              programas mais abrangentes, como certificados profissionais ou especializações, podem levar vários meses.
            </p>
            <p>
              <h3>3. Que oportunidades de carreira posso seguir depois de concluir um curso de análise de dados?</h3>A
              conclusão de um curso de análise de dados pode abrir várias oportunidades de carreira, incluindo funções
              como analista, analista de negócios, cientista de dados e analista de pesquisa de mercado. Essas posições
              são procuradas em todo muitos setores, incluindo finanças, saúde, marketing e tecnologia.
            </p>
          </TextContainer>
        </Container>
        <Container ordem={false} cor={false}>
          <DefaultCard>
            <Form>
              <h2>Você quer ser contatado?</h2>
              <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <div>
                <ButtonDefault label="Enviar" action={handleClick} />
              </div>
            </Form>
          </DefaultCard>
        </Container>
      </DefaultPage>
    </>
  );
}

export default Contact;
