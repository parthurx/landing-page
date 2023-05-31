import styled from "styled-components";
import { device } from "../../styles/responsive";

export const StyledMain = styled.main`
  padding: 8em 8em;
  .paragraph {
    color: ${({ theme }) => theme.colors.body};
    padding-top: 3em;
    padding-bottom: 2em;
    line-height: 1.5;
  }
  .title {
    line-height: 1.3;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImgs = styled.div`
  width: 60.52px;
  height: 60.52px;
  margin-top: 7em;
  position: relative;
  .img1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #ffffff;
    border-radius: 100%;
    object-fit: cover;
    z-index: 3;
  }
  .img2 {
    position: absolute;
    top: 0;
    left: 2.4em;
    width: 100%;
    height: 100%;
    border: 3px solid #ffffff;
    border-radius: 100%;
    object-fit: cover;
    z-index: 2;
  }
  .img3 {
    position: absolute;
    top: 0;
    left: 4.8em;
    width: 100%;
    height: 100%;
    border: 3px solid #ffffff;
    border-radius: 100%;
    object-fit: cover;
    z-index: 1;
  }
  
`;
