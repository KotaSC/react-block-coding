import styled from "styled-components";

const Button = (props: buttonProps) => {
  return <S_Button styleType={props.type}>{props.text}</S_Button>;
};

type styleTypeProps = {
  styleType: string;
};

type buttonProps = {
  type: string;
  text: string;
};

const S_Button = styled.a<styleTypeProps>`
  display: inline-block;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  color: #fff7f7;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.styleType === "primary" ? "#53687E" : "#6B4E71"};

  &:hover,
  &:focus {
    ${(props) =>
      props.styleType === "primary"
        ? "background-color: #495B6F"
        : "background-color: #5D4462"};
  }
`;

export default Button;
