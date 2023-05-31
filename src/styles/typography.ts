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
          font-size: 18px;
        `;
    }
  }}
`
export const StyledParagraph = styled.p`
     font-family: "Glory", sans-serif;
     font-weight: 400;
     color: #383A47;

     strong, b{
        font-weight: 700;
     }
`