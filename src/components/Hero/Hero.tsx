import styled from "styled-components";
import Container from "../Container/Container";
import Social from "../Social/Social";
import profileImg from "../../assets/images/profile.jpg";

const S_Hero = styled.section``;

const S_HeroHighlight = styled.div``;

const S_HeroImage = styled.figure``;

const S_HeroLinks = styled.div``;

const Hero = () => {
  return (
    <S_Hero>
      <Container>
        <S_HeroHighlight>
          <h1>
            I'm
            <strong> Kota Kawakami</strong>, a
            <strong> software engineer</strong> based in Osaka, Japan.
          </h1>
          <S_HeroLinks>
            <p>
              このポートフォリオサイトのコードは
              <a href="" target="_blank">
                こちら
              </a>
              にまとまっています．
              <br />
              お問い合わせは<a href="">コンタクトフォーム</a>からどうぞ
            </p>
            <Social />
          </S_HeroLinks>
        </S_HeroHighlight>
        <S_HeroImage>
          <img src={profileImg} alt="profile" />
          <a href="https://pixabay.com/ja/users/jaclou-dl-5602247/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7840767">
            JackieLou DL
          </a>
          による
          <a href="https://pixabay.com/ja//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7840767">
            Pixabay
          </a>
          からの画像
        </S_HeroImage>
      </Container>
    </S_Hero>
  );
};

export default Hero;
