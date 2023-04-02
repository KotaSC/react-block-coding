import styled from "styled-components";
import Social from "../common/Social";

const Follow = () => {
  return (
    <S_Follow>
      <Social />
    </S_Follow>
  );
};

const S_Follow = styled.div`
  a {
    color: #c2b2b4;

    &:hover,
    &:focus {
      color: #ab9698;
  }
`;

export default Follow;
