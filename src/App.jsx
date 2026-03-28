import { Container } from "./styles";
import { TopBackground } from "./styles";
import { Form } from "./styles";
import { ContainerInputs } from "./styles";
import { InputLabel } from "./styles";
import { Input } from "./styles";
import { Button } from "./styles";
import { Title } from "./styles";

function Home() {
  return (
    <>
      <Container>
        <TopBackground>
          <img />
        </TopBackground>
        <Form>
          <Title>Cadastrar Usuário</Title>

          <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do usuário" />
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do usuário" />
            </div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type="e-mail" placeholder="E-mail do usuário" />
          </ContainerInputs>
          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
}

export default Home;

/**
  quando quiser exportar um app anas usa um "export default App"
  quando quiser exportar vários apps usa o export na frente do function "export function App(){}"
 */
