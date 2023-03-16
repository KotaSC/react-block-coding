import styled from "styled-components";
import { ReactNode } from "react";

const S_Container = styled.div``;

const Container = ({ children }: { children: ReactNode }) => {
  return <S_Container>{children}</S_Container>;
};

export default Container;
