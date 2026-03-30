import UsersImage from "../../assets/users.png";
import { Background } from "../TopBackgroud/styles";


function TopBackground() {
  return (
    <Background>
      <img src={UsersImage} alt="Imagem dos usuarios" />
    </Background>
  );
}

export default TopBackground;