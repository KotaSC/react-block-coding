import styled from "styled-components";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
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
  );
};

const S_Form = styled.div``;

const S_Contact = styled.div``;

const S_Input = styled.div``;

const S_Textarea = styled.div``;

export default Form;
