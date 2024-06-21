import Container from '../components/container/Container';
import DefaultCard from '../components/default-card/DefaultCard';
import DefaultPage from '../config/layout/DefaultPage';

function Home() {
  return (
    <>
      <DefaultPage>
        <Container ordem={false}>
          <h1>Curso de Análise de Dados</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus veritatis fugiat beatae tempora natus
            tenetur ipsa sapiente cum corporis repudiandae ullam molestiae nostrum animi, magni in soluta dolor aperiam
            aut?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam nulla obcaecati sequi quae dignissimos
            ipsam, suscipit corporis. Similique cupiditate molestias hic facere in illum eius quam tenetur eveniet odit?
          </p>
        </Container>
        <Container ordem={false}>
          <h2>Vantagens da nossa formação:</h2>
        </Container>
        <Container ordem={false}>
          <DefaultCard children={undefined}></DefaultCard>
          <DefaultCard children={undefined}></DefaultCard>
          <DefaultCard children={undefined}></DefaultCard>
        </Container>
        <Container ordem={true}>
          <h2>Média salarial da área</h2>
          <h3>Salário Júnior: R$3000 - R$5000</h3>
          <h3>Salário Pleno: R$5000 - R$8000 </h3>
          <h3>Salário Sênior: R$8000 - R$11000</h3>
        </Container>
      </DefaultPage>
    </>
  );
}

export default Home;
