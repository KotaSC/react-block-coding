import styled from "styled-components";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

const S_Header = styled.header``;

const Header = () => {
  return (
    <S_Header>
      <Logo />
      <Nav />
    </S_Header>
  );
};

export default Header;
