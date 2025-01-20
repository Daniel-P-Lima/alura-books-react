import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];
export default function IconesHeader() {
  return (
    <IconesContainer>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="imagem"></img>
        </Icone>
      ))}
    </IconesContainer>
  );
}
