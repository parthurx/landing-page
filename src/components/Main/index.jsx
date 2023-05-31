import React from "react";
import { StyledTitle } from "../../styles/typography";
import { StyledMain, StyledContainer } from "./style";
import { StyledParagraph } from "../../styles/typography";

const Main = () => {
  return (
    <>
      <StyledMain>
        <StyledContainer>
          <StyledTitle
            tag="h4"
            fontSize="lg"
            fontWeight={500}
            fontFamily="Glory, sans-serif"
            className="title"
          >
            <p>Comece a conversar com</p> <p>os clientes, qualquer hora,</p>{" "}
            qualquer lugar com Apex
          </StyledTitle>

          <StyledParagraph className="paragraph">
            Ótimo software que permite que você converse de qualquer{" "}
            <p>lugar a qualquer hora sem qualquer interrupção.</p>
          </StyledParagraph>
        </StyledContainer>
      </StyledMain>
    </>
  );
};

export default Main;
