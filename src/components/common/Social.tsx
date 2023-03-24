import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDribbble,
  faLinkedin,
  faMedium,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <S_SocialLinks>
      <S_SocialItem>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </S_SocialItem>
      <S_SocialItem>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faDribbble} size="2x" />
        </a>
      </S_SocialItem>
      <S_SocialItem>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </S_SocialItem>
      <S_SocialItem>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faMedium} size="2x" />
        </a>
      </S_SocialItem>
      <S_SocialItem>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </S_SocialItem>
      <S_SocialItem>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </S_SocialItem>
    </S_SocialLinks>
  );
};

export default Social;

const S_SocialLinks = styled.ul``;

const S_SocialItem = styled.li``;
