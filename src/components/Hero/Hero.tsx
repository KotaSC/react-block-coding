import styled from "styled-components";
import Container from "../common/Container";
import Social from "../common/Social";

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
              お問い合わせは<a href="#contact">コンタクトフォーム</a>からどうぞ
            </p>
            <Social />
          </S_HeroLinks>
        </S_HeroHighlight>
        <S_HeroImage>
          <img
            className="mobile"
            src="https://placehold.jp/500x380.png"
            alt="profile"
          />
        </S_HeroImage>
      </Container>
    </S_Hero>
  );
};

const S_Hero = styled.section`
  background-color: #6b4e71;
`;

const S_HeroHighlight = styled.div`
  color: #fff7f7;
`;

const S_HeroImage = styled.figure``;

const S_HeroLinks = styled.div`
  P {
    font-size: 1.2rem;
  }

  a {
    color: #fff7f7;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: #ffc4c4;
    }
  }
`;

export default Hero;
