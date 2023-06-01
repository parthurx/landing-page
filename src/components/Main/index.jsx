import React from "react";
import { StyledTitle } from "../../styles/typography";
import { StyledMain, StyledContainer, StyledImgs, StyledAside } from "./style";
import { StyledParagraph } from "../../styles/typography";
import FirstImg from "../../assets/img1.png";
import SecondImg from "../../assets/img2.png";
import ThirdImg from "../../assets/img3.png";
import { StyledButton } from "../../styles/buttons";

import Icon from "../../assets/Icon.png";
import Line from "../../assets/Line.png";
import Stars from "../../assets/Stars.png";
import Hero from "../../assets/hero.png";
import Ellipse from "../../assets/Ellipse41.png"
import Ellipse2 from "../../assets/Ellipse42.png"

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
            <StyledTitle
              tag="h4"
              fontWeight={500}
              fontFamily="DM Sans, sans-serif"
              className="Number"
            >
              2,291
              <StyledParagraph className="paragraph2">
                Clientes Felizes
              </StyledParagraph>
            </StyledTitle>
            <img src={Line} alt="" className="Line" />

            <StyledTitle
              tag="h4"
              fontWeight={500}
              fontFamily="DM Sans, sans-serif"
              className="Number"
            >
              4.8/5
              <StyledParagraph className="paragraph2">
                <img src={Stars} alt="" className="Stars" /> Avaliação
              </StyledParagraph>
            </StyledTitle>
          </StyledImgs>
          
        </StyledContainer>
        <StyledAside>
          <img src={Hero} alt="" className="Hero"/>
          <img src={Ellipse} alt="" className="Ellipse"/>
          <img src={Ellipse2} alt="" className="Ellipse2"/>
          </StyledAside>
      </StyledMain>
    </>
  );
};

export default Main;
