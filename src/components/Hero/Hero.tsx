import styled from "styled-components";
import Container from "../common/Container";
import Social from "../common/Social";

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
          <img
            className="mobile"
            src="https://placehold.jp/1200x480.png"
            alt="profile"
          />
        </S_HeroImage>
      </Container>
    </S_Hero>
  );
};

export default Hero;
