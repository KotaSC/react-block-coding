import styled from "styled-components";

const Nav = (props: styleTypeProps) => {
  return (
    <S_Nav styleType={props.styleType}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {props.styleType === "header" && (
          <li>
            <a href="#contact">Contact</a>
          </li>
        )}
      </ul>
    </S_Nav>
  );
};

type styleTypeProps = {
  styleType: string;
};

const S_Nav = styled.nav<styleTypeProps>``;

export default Nav;
