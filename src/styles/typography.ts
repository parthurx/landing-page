import styled, { css } from "styled-components";
import BaseTitle from "./components/typography";

export const StyledTitle = styled(BaseTitle)`
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWeight}) => fontWeight};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 50px;
        `;
      case "md":
        return css`
          font-size: 48px;
        `;
      case "sm":
        return css`
          font-size: 16px;
        `;
    }
  }}
`
export const StyledParagraph = styled.p`
     font-family: "DM Sans", sans-serif;
     font-weight: 400;
     color: #383A47;

     strong, b{
        font-weight: 700;
     }
`