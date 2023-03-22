import styled from "styled-components";

const S_HeaderLogo = styled.div`
  img {
    width: 100px;
  }
`;

const HeaderLogo = () => {
  return (
    <S_HeaderLogo>
      <img src="https://placehold.jp/150x150.png" alt="logo" />
      <span>Designer/Developer</span>
    </S_HeaderLogo>
  );
};

export default HeaderLogo;
