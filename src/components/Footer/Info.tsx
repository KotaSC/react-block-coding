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

const S_Info = styled.div``;

const S_CopyRight = styled.p``;

export default FooterInfo;
