import { useRef } from "react";
import {
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Button,
  Title,
} from "./styles.js";
import UsersImage from "../../assets/users.png";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  function registerNewUser() {
    console.log(inputName.current.value);
    console.log(inputAge.current.value);
    console.log(inputEmail.current.value);
  }

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
            <Input type="text" placeholder="Nome completo" ref={inputName} />
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Sua idade" ref={inputAge} />
          </div>
          <div style={{ width: '100%' }}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type="e-mail" placeholder="E-mail do usuário" ref={inputEmail} />
          </div>
        </ContainerInputs>
        <Button type="button" onClick={registerNewUser}>Cadastrar</Button>
      </Form>
    </Container>
  );
}

export default Home;

/**
  quando quiser exportar um app anas usa um "export default App"
  quando quiser exportar vários apps usa o export na frente do function "export function App(){}"
 */
