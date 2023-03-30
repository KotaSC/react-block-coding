import styled from "styled-components";
import Logo from "../common/Logo";
import Nav from "../common/Nav";

const Header = () => {
  return (
    <S_Header>
      <Logo />
      <Nav styleType="header" />
    </S_Header>
  );
};

const S_Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: #6b4e71;
  color: #fff7f7;
  font-family: "Piazzolla", "Times New Roman", "YuMincho",
    "Hiragino Mincho ProN", "Yu Minhco", "MS PMincho", serif;
  font-weight: 700;
`;

export default Header;
