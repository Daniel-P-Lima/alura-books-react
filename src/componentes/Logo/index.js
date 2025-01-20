import "./estilo.css";
import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const ImagemLogo = styled.img`
  margin-right: 10px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <ImagemLogo src={logo} alt="logo"></ImagemLogo>
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
}
