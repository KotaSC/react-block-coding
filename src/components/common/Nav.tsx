import styled from "styled-components";

const Nav = (props: styleTypeProps) => {
  return (
    <S_Nav styleType={props.styleType}>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Works</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        {props.styleType === "header" && (
          <li>
            <a href="">Contact</a>
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
