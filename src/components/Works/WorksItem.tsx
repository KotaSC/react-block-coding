import styled from "styled-components";
import primaryWorkImg from "../../assets/images/work-primary.jpg";
import secondaryWorkImg from "../../assets/images/work-secondary.jpg";

type styleTypeProps = {
  styleType: string;
};

const S_WorksItem = styled.div``;

const S_WorksItemText = styled.div``;

const S_WorksImg = styled.figure<styleTypeProps>``;

const WorksItem = () => {
  return (
    <>
      <S_WorksItem>
        <S_WorksImg styleType="primary">
          <img src={primaryWorkImg} alt="Work A" />
          <a href="https://pixabay.com/ja/users/startupstockphotos-690514/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=593327">
            StartupStockPhotos
          </a>
          による
          <a href="https://pixabay.com/ja//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=593327">
            Pixabay
          </a>
          からの画像
        </S_WorksImg>
        <S_WorksItemText>
          <h3>過去の仕事1</h3>
          <p>
            Et et lorem assum dolor quis tempor tempor vero rebum in diam kasd
            accusam elitr justo hendrerit dolor at. At labore consetetur ea
            amet. Dolor mazim dolores. Diam duo duis soluta sit et et hendrerit
            sanctus veniam ipsum erat hendrerit tempor vel et magna option est.
            Aliquyam wisi dolor dolores amet accusam diam ex est eos minim clita
            esse lorem. Et dolore tempor at consequat invidunt labore. Erat
            sanctus et iriure facilisi enim sit ipsum dolores ipsum sed amet. Et
            erat ipsum vero iriure ipsum molestie et lorem sed accumsan
            tincidunt nonumy amet possim et. Lorem dolor ut no sit exerci
            dolores commodo. Ut iusto voluptua et sadipscing congue est eleifend
            lorem consectetuer diam consectetuer diam ullamcorper eirmod.
          </p>
        </S_WorksItemText>
      </S_WorksItem>
      <S_WorksItem>
        <S_WorksImg styleType="secondary">
          <img src={secondaryWorkImg} alt="Work B" />
          <a href="https://pixabay.com/ja/users/skitterphoto-324082/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2982270">
            Rudy and Peter Skitterians
          </a>
          による
          <a href="https://pixabay.com/ja//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2982270">
            Pixabay
          </a>
          からの画像
        </S_WorksImg>
        <S_WorksItemText>
          <h3>過去の仕事2</h3>
          <p>
            Et et lorem assum dolor quis tempor tempor vero rebum in diam kasd
            accusam elitr justo hendrerit dolor at. At labore consetetur ea
            amet. Dolor mazim dolores. Diam duo duis soluta sit et et hendrerit
            sanctus veniam ipsum erat hendrerit tempor vel et magna option est.
            Aliquyam wisi dolor dolores amet accusam diam ex est eos minim clita
            esse lorem. Et dolore tempor at consequat invidunt labore. Erat
            sanctus et iriure facilisi enim sit ipsum dolores ipsum sed amet. Et
            erat ipsum vero iriure ipsum molestie et lorem sed accumsan
            tincidunt nonumy amet possim et. Lorem dolor ut no sit exerci
            dolores commodo. Ut iusto voluptua et sadipscing congue est eleifend
            lorem consectetuer diam consectetuer diam ullamcorper eirmod.
          </p>
        </S_WorksItemText>
      </S_WorksItem>
    </>
  );
};

export default WorksItem;
