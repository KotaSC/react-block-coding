import styled from "styled-components";
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <S_Container>{children}</S_Container>;
};

const S_Container = styled.div``;

export default Container;
