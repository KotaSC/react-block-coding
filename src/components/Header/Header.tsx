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

const S_Header = styled.header``;

export default Header;
