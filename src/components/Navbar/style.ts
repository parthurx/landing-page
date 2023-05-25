import styled from "styled-components";
import { device } from "../../styles/responsive";

export const StyledHeader = styled.head`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem 8rem 0 8rem;
  .nav {
    display: flex;
    gap: 2rem;
  
  }

  .link-nav{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary1};
  }

  .ul-animate {
    color: red;
  }

  .title {
    &:hover {
      color: ${({ theme }) => theme.colors.primary2};
    }
  }

  .login-buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .login {
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.primary2};
    }
  }
  .hamburger {
    display: none;
    visibility: hidden;
  }

  @media ${device.mobileS} {
    .hamburger {
      display: block;
      visibility: visible;
    }
    .login-buttons {
      display: none;
      visibility: hidden;
    }
    .nav {
      display: none;
      visibility: hidden;
    }

    margin: 2rem 2rem 0 2rem;
  }
`;

export const StyledMotion = styled.div`

  .motion-div {
    display: block;
    position: fixed;
    right: 0.5rem;
    top: 4rem;
    z-index: 50;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-top: 0.5rem;
    background-color: #f8f8fa;
    width: 10rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .link {
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-top: 0.25rem;
    color: #000000;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    border-radius: 0.375rem;
    &:hover {
      background-color: #fd6003;
      color: #ffffff;
    }
  }

  /* .ul-style { */
    @media (min-width: 768px) {
      display: none;
      margin-top: 2rem;
      font-weight: 500;
      flex-direction: row;
    }
  
`;
