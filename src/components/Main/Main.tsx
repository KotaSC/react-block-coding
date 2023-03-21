import styled from "styled-components";
import Hero from "../Hero/Hero";
import Works from "../Works/Works";
import About from "../About/About";

const S_Main = styled.main``;

const Main = () => {
  return (
    <S_Main>
      <Hero />
      <Works />
      <About />
    </S_Main>
  );
};

export default Main;
