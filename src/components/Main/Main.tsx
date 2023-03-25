import styled from "styled-components";
import Hero from "../Hero/Hero";
import Works from "../Works/Works";
import About from "../About/About";

const Main = () => {
  return (
    <S_Main id="home">
      <Hero />
      <Works />
      <About />
    </S_Main>
  );
};

const S_Main = styled.main``;

export default Main;
