import styled from "styled-components";
import Container from "../common/Container";
import Form from "./Form";
import Info from "./Info";

const Footer = () => {
  return (
    <S_Footer>
      <Container>
        <Form />
        <Info />
      </Container>
    </S_Footer>
  );
};

const S_Footer = styled.footer``;

export default Footer;
