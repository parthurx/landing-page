import React, { useState } from "react";
import { Link } from "react-scroll";

import Logo from "../../assets/Logo.png";
import { StyledButton } from "../../styles/buttons";
import { StyledTitle } from "../../styles/typography";
import { StyledHeader, StyledMotion } from "./style";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Sobre",
      route: "about",
    },
    {
      name: "Funcionalidades",
      route: "feature",
    },
    {
      name: "Demos",
      route: "demos",
    },
    {
      name: "Trabalhos",
      route: "works",
    },
    {
      name: "Contatos",
      route: "contacts",
    },
  ];

  return (
    <>
      <StyledHeader>
        <img src={Logo} alt="" />
        <div className="nav">

          {links.map((el) => (
            <Link
              to={el.route}
              activeClass={"text-white bg-blue-500"}
              spy={true}
              className="link-nav"
            >
              <StyledTitle
                tag="h4"
                fontSize="sm"
                fontWeight={500}
                fontFamily="DM Sans, sans-serif"
                className="title"
              >
               {el.name}
              </StyledTitle>
            </Link>
          ))}

        </div>
        <div className="login-buttons">
          <StyledTitle
            tag="h4"
            fontSize="sm"
            fontWeight={500}
            fontFamily="DM Sans, sans-serif"
            className="login"
          >
            Login
          </StyledTitle>
          <StyledButton buttonSize="md">Get Started Free</StyledButton>
        </div>
        <div className="hamburger">
          <Hamburger
            toggled={toggle}
            size={22}
            duration={0.8}
            distance={"lg"}
            toggle={setToggle}
          />
        </div>

       
      </StyledHeader>
      <StyledMotion>
      <AnimatePresence>
        {toggle && (
          <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0, transition: { type: "spring" } }}
          exit={{ x: 200, transition: { type: "spring" } }}
          className="motion-div"
          >
            <ul className="ul-style">
              {links.map((el) => (
                <Link
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                  className="link"
                >
                  <StyledTitle
                    tag="h4"
                    fontSize="sm"
                    fontWeight={500}
                    fontFamily="DM Sans, sans-serif"
                    className="title"
                  >
                    <li>{el.name}</li>
                  </StyledTitle>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </StyledMotion>
    </>
  );
};

export default Navbar;
