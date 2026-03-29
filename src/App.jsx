import {
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Button,
  Title,
} from "../src/styles/styles.js";
import UsersImage from "./assets/users.png";
function Home() {
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="Imagem dos usuários" />
      </TopBackground>
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" />
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" />
          </div>
          <div style={{ width: '100%' }}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type="e-mail" placeholder="E-mail do usuário" />
          </div>
        </ContainerInputs>
        <Button>Cadastrar</Button>
      </Form>
    </Container>
  );
}

export default Home;

/**
  quando quiser exportar um app anas usa um "export default App"
  quando quiser exportar vários apps usa o export na frente do function "export function App(){}"
 */
