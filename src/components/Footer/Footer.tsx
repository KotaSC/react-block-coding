import styled from "styled-components";
import Container from "../common/Container";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const S_Footer = styled.footer``;

const S_Form = styled.div``;

const S_Contact = styled.div``;

const S_Input = styled.div``;

const S_Textarea = styled.div``;

const Footer = () => {
  return (
    <S_Footer>
      <Container>
        <S_Form>
          <p>お仕事のご依頼やご相談等，お問い合わせはこちらからどうぞ．</p>
          <S_Contact>
            <S_Input>
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="氏名" />
            </S_Input>
            <S_Input>
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="メールアドレス" />
            </S_Input>
            <S_Textarea>
              <textarea placeholder="お問い合わせ内容"></textarea>
            </S_Textarea>
            <Button type="primary" text="送信する" />
          </S_Contact>
        </S_Form>
      </Container>
    </S_Footer>
  );
};

export default Footer;
