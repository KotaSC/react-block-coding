import styled from "styled-components";
import Nav from "../common/Nav";
import Social from "../common/Social";

const FooterInfo = () => {
  return (
    <S_Info>
      <Nav styleType="footer" />
      <Social />
      <S_CopyRight>
        <small>© 2022 Elle Kasai. All Rigths Reserved.</small>
      </S_CopyRight>
    </S_Info>
  );
};

const S_Info = styled.div`
  ul {
    font-family: "Piazzolla", "Times New Roman", "YuMincho",
      "Hiragino Mincho ProN", "Yu Minhco", "MS PMincho", serif;
  }

  a {
    color: #fff7f7;
    font-size: 1.2rem;
    font-weight: 700;

    &:hover,
    &:focus {
      color: #9c9da5;
    }
  }
`;

const S_CopyRight = styled.p`
  color: #9c9da5;
`;

export default FooterInfo;
