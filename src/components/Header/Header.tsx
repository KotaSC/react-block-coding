import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const S_Header = styled.header``;

const Header = () => {
  return (
    <S_Header>
      <HeaderLogo />
      <HeaderNav />
    </S_Header>
  );
};

export default Header;
