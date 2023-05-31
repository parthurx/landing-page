import React from "react";
import { StyledTitle } from "../../styles/typography";
import { StyledMain, StyledContainer, StyledImgs } from "./style";
import { StyledParagraph } from "../../styles/typography";
import FirstImg from "../../assets/img1.png";
import SecondImg from "../../assets/img2.png";
import ThirdImg from "../../assets/img3.png";
import { StyledButton } from "../../styles/buttons";
import Icon from "../../assets/Icon.png"


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
          <StyledButton buttonSize="lg">
          Converse Agora <img src={Icon} alt="" />
          </StyledButton>
          <StyledImgs>
            <img src={FirstImg} alt="" className="img1" />
            <img src={SecondImg} alt="" className="img2" />
            <img src={ThirdImg} alt="" className="img3" />
          </StyledImgs>
        </StyledContainer>
      </StyledMain>
    </>
  );
};

export default Main;
