import styled from "styled-components";

const Nav = (props: styleTypeProps) => {
  return (
    <S_Nav styleType={props.styleType}>
      <S_NavList>
        <S_NavItem>
          <a href="#home">Home</a>
        </S_NavItem>
        <S_NavItem>
          <a href="#works">Works</a>
        </S_NavItem>
        <S_NavItem>
          <a href="#about">About</a>
        </S_NavItem>
        {props.styleType === "header" && (
          <S_NavItem>
            <a href="#contact">Contact</a>
          </S_NavItem>
        )}
      </S_NavList>
    </S_Nav>
  );
};

type styleTypeProps = {
  styleType: string;
};

const S_Nav = styled.nav<styleTypeProps>``;

const S_NavList = styled.ul`
  display: flex;
`;

const S_NavItem = styled.li`
  a {
    color: #fff7f7;

    &:hover,
    &:focus {
      color: #ffc4c4;
    }
  }
`;

export default Nav;
