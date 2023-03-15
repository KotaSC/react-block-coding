import styled from "styled-components";

const S_HeaderNav = styled.nav``;

const HeaderNav = () => {
  return (
    <S_HeaderNav>
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
    </S_HeaderNav>
  );
};

export default HeaderNav;
