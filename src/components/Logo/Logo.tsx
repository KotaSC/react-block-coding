import styled from "styled-components";

const S_Logo = styled.div`
  img {
    width: 100px;
  }
`;
const Logo = () => {
  return (
    <S_Logo>
      <img src="https://placehold.jp/150x150.png" alt="logo" />
      <span>Designer/Developer</span>
    </S_Logo>
  );
};

export default Logo;
