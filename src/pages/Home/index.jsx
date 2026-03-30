import { useRef } from "react";
import api from "../../services/api";
import {
  Container,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Title,
} from "./styles.js";

import TopBackground from "../../components/TopBackgroud";
import Button from "../../components/Button";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {

    const data =await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })
    console.log(data);

  }

  return (
    <Container>
      <TopBackground />

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
