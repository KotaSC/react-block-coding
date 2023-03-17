import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const S_SocialUl = styled.ul``;

const S_SocialLi = styled.li``;

const Social = () => {
  return (
    <S_SocialUl>
      <S_SocialLi>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </S_SocialLi>
      <S_SocialLi>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faDribbble} size="2x" />
        </a>
      </S_SocialLi>
      <S_SocialLi>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </S_SocialLi>
      <S_SocialLi>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>
      </S_SocialLi>
      <S_SocialLi>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </S_SocialLi>
      <S_SocialLi>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </S_SocialLi>
    </S_SocialUl>
  );
};

export default Social;
