import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import AboutDesc from "./AboutDesc";

const S_About = styled.section``;

const S_AboutImage = styled.figure``;

const About = () => {
  return (
    <S_About>
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

export default About;
