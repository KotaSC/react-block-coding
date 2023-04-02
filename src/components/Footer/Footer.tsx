import styled from "styled-components";
import Container from "../common/Container";
import Form from "./Form";
import Info from "./Info";

const Footer = () => {
  return (
    <S_Footer id="contact">
      <Container>
        <Form />
        <Info />
      </Container>
    </S_Footer>
  );
};

const S_Footer = styled.footer`
  background-color: #3a4454;
  color: #fff7f7;
`;

export default Footer;
