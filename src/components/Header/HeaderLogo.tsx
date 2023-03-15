import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const S_HeaderLogo = styled.div`
  img {
    width: 100px;
  }
`;

const HeaderLogo = () => {
  return (
    <S_HeaderLogo>
      <img src={logo} alt="logo" />
      <span>Designer/Developer</span>
    </S_HeaderLogo>
  );
};

export default HeaderLogo;
