import styled from "styled-components";

const S_Nav = styled.nav``;

const Nav = () => {
  return (
    <S_Nav>
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
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </S_Nav>
  );
};

export default Nav;
