import styled from "styled-components";
import { device } from "../../styles/responsive";

export const StyledMain = styled.main`
  padding: 8em 8em;
  .paragraph {
    color: ${({ theme }) => theme.colors.body};
    padding-top: 3em;
    line-height: 1.5;
  }
  .title{
    line-height: 1.3;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
