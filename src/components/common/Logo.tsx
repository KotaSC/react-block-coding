import styled from "styled-components";

const Logo = () => {
  return (
    <S_Logo>
      <img src="https://placehold.jp/100x100.png" alt="logo" />
      <span>Designer/Developer</span>
    </S_Logo>
  );
};

const S_Logo = styled.div`
  display: flex;
  align-items: center;
`;

export default Logo;
