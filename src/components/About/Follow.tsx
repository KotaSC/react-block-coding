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

const S_Follow = styled.div``;

const S_SocialLinks = styled.ul``;

const S_SocialItem = styled.li``;

const Follow = () => {
  return (
    <S_Follow>
      <S_SocialLinks>
        <S_SocialItem>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </S_SocialItem>
        <S_SocialItem>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </S_SocialItem>
        <S_SocialItem>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </S_SocialItem>
        <S_SocialItem>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </S_SocialItem>
        <S_SocialItem>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </S_SocialItem>
        <S_SocialItem>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </S_SocialItem>
      </S_SocialLinks>
    </S_Follow>
  );
};

export default Follow;
