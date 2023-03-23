import styled from "styled-components";
import Logo from "../common/Logo";
import Nav from "../common/Nav";

const S_Header = styled.header``;

const Header = () => {
  return (
    <S_Header>
      <Logo />
      <Nav styleType="header" />
    </S_Header>
  );
};

export default Header;
