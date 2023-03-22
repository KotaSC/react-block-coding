import styled from "styled-components";

type styleTypeProps = {
  styleType: string;
};

type buttonProps = {
  type: string;
  text: string;
};

const S_Button = styled.a<styleTypeProps>``;

const Button = (props: buttonProps) => {
  return <S_Button styleType={props.type}>{props.text}</S_Button>;
};

export default Button;
