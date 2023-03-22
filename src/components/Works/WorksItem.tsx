import styled from "styled-components";

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
          <img src="https://placehold.jp/800x600.png" alt="Work A" />
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
          <img src="https://placehold.jp/800x600.png" alt="Work B" />
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
