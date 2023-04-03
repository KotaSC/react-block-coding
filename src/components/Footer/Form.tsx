import styled from "styled-components";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <S_Form>
      <p>お仕事のご依頼やご相談等，お問い合わせはこちらからどうぞ．</p>
      <S_Contact>
        <S_FormItem>
          <FontAwesomeIcon icon={faUser} className="icon" />
          <S_Input type="text" placeholder="氏名" />
        </S_FormItem>

        <S_FormItem>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <S_Input type="email" placeholder="メールアドレス" />
        </S_FormItem>

        <S_Textarea placeholder="お問い合わせ内容" />
        <Button type="primary" text="送信する" />
      </S_Contact>
    </S_Form>
  );
};

const S_Form = styled.div`
  width: 100%;
`;

const S_Contact = styled.div``;

const S_FormItem = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 12px;
    left: 16px;
    color: #fff7f7;
  }
`;

const S_Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #c2b2b4;
  border-radius: 5px;
  color: #fff7f7;
  padding: 10px 15px 10px 40px;

  ::placeholder {
    color: #9c9da5;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 10%);
  }

  &:focus-visible {
    outline: 1px solid #c2b2b4;
    border: 1px solid #c2b2b4;
  }
`;

const S_Textarea = styled(S_Input.withComponent("textarea"))`
  height: 150px;
  padding: 10px 15px;
  resize: none;
`;

export default Form;
