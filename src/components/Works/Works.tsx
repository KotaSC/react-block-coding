import styled from "styled-components";
import Container from "../common/Container";
import WorksItem from "./WorksItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const Works = () => {
  return (
    <S_Works id="works">
      <h2>
        <FontAwesomeIcon icon={faPalette} />
      </h2>
      <Container>
        <WorksItem />
      </Container>
    </S_Works>
  );
};

const S_Works = styled.section``;

export default Works;
