import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import AboutDesc from "./AboutDesc";

const About = () => {
  return (
    <S_About id="about">
      <h2>
        <FontAwesomeIcon icon={faIcons} />
        About
      </h2>
      <S_AboutImage>
        <img
          className="mobile"
          src="https://placehold.jp/1200x480.png"
          alt="profile"
        />
        <img
          className="tablet-and-up"
          src="https://placehold.jp/1200x480.png"
          alt="about"
        />
      </S_AboutImage>
      <AboutDesc />
    </S_About>
  );
};

const S_About = styled.section`
  background-color: #fff;
`;

const S_AboutImage = styled.figure``;

export default About;
