import styled from "styled-components";

const Skills = () => {
  return (
    <S_Skills>
      <S_SkillList>
        <S_SkillItem>ダミー1</S_SkillItem>
        <S_SkillItem>ダミー2</S_SkillItem>
        <S_SkillItem>ダミー3</S_SkillItem>
      </S_SkillList>
      <S_SkillList>
        <S_SkillItem>ダミー4</S_SkillItem>
        <S_SkillItem>ダミー5</S_SkillItem>
        <S_SkillItem>ダミー6</S_SkillItem>
      </S_SkillList>
      <S_SkillList>
        <S_SkillItem>ダミー7</S_SkillItem>
        <S_SkillItem>ダミー8</S_SkillItem>
        <S_SkillItem>ダミー9</S_SkillItem>
      </S_SkillList>
    </S_Skills>
  );
};

const S_Skills = styled.div``;

const S_SkillList = styled.ul``;

const S_SkillItem = styled.li``;

export default Skills;
