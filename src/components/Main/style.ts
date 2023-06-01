import styled from "styled-components";
import { device } from "../../styles/responsive";

export const StyledMain = styled.main`
  padding: 4em 8em;
  display: flex;
  width: 99vw;
  height: 90vh;

  .paragraph {
    color: ${({ theme }) => theme.colors.text3};
    padding-top: 3em;
    padding-bottom: 2em;
    line-height: 1.5;
  }
  .paragraph2 {
    color: ${({ theme }) => theme.colors.body};
    font-size: 15px;
  }
  .title {
    line-height: 1.3;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  width: 50vw;
`;

export const StyledImgs = styled.div`
  display: flex;
  width: 80vw;
  margin-top: 7rem;
  flex-wrap: nowrap;
  .img1 {
    width: 60.52px;
    height: 60.52px;
    border: 3px solid #ffffff;
    border-radius: 100%;
    object-fit: cover;
    z-index: 3;
  }
  .img2 {
    width: 60.52px;
    height: 60.52px;
    margin-left: -1.5rem;
    border: 3px solid #ffffff;
    border-radius: 100%;
    object-fit: cover;
    z-index: 2;
  }
  .img3 {
    width: 60.52px;
    height: 60.52px;
    margin-left: -1.5rem;
    border: 3px solid #ffffff;
    border-radius: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .Number {
    display: flex;
    flex-direction: column;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    letter-spacing: -1px;
    margin-left: 1em;
  }
  .paragraph2 {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text3};
  }
  .Line {
    height: 3em;
    margin-left: 3rem;
  }
`;

export const StyledAside = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  margin-top: 4.91rem;
  .Hero {
    width: auto;
    height: auto;
    object-fit: fill;
    z-index: 3;
  }
  .Ellipse {
    margin-top: 14rem;
    margin-left: -37em;
    height: 30rem;
    z-index: 2;
  }
  .Ellipse2 {
    margin-top: 14rem;
    margin-left: -28em;
    height: 30rem;
    z-index: 1;
  }
`;
