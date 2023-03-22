import styled from "styled-components";
import Skills from "./Skills";
import Follow from "./Follow";

const S_Container = styled.div``;

const S_Description = styled.div``;

const S_Addition = styled.div``;

const AboutDesc = () => {
  return (
    <S_Container>
      <S_Description>
        <h3>自己紹介</h3>
        <p>
          At et sit. Ex lorem duo invidunt amet et at amet et liber. Voluptua
          liber diam liber exerci erat sit quis dolores feugiat nonumy lorem
          diam lorem et rebum. Eos takimata dolore sea et et duo et accusam sit.
          Justo magna clita no ipsum lorem dolor. Ullamcorper at diam eirmod eos
          et labore sadipscing rebum sit diam tempor et. Labore voluptua ipsum
          eirmod eum labore ipsum voluptua. Est iriure voluptua facer ut aliquip
          rebum.
        </p>
      </S_Description>
      <S_Addition>
        <h3>スキルセット</h3>
        <Skills />
        <h3>関連リンク</h3>
        <Follow />
      </S_Addition>
    </S_Container>
  );
};

export default AboutDesc;
