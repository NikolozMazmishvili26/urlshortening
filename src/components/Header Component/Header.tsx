import { useState } from "react";
import styled from "styled-components";

// import styled components
import { GlobalContainer } from "../../App";

// import assets
import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.png";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <GlobalContainer>
      <MainHeader>
        {/* left side */}
        <LeftSide>
          <LogoImage src={logo} alt="logo"></LogoImage>
          <Nav>
            <NavList>
              <NavItem>Features</NavItem>
              <NavItem>Pricing</NavItem>
              <NavItem>Resources</NavItem>
            </NavList>
          </Nav>
        </LeftSide>
        {/* right side */}
        <RightSide>
          <ButtonContainer>
            <LoginButton>Login</LoginButton>
            <SignUpButton>Sign Up</SignUpButton>
          </ButtonContainer>
          {/* burger image */}
          <BurgerImage
            src={burger}
            alt="burger"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          />
        </RightSide>

        {/* Navbar Dropdown when isNavbar state is true */}

        <NavbarDropdown isNavbarOpen={isNavbarOpen}>
          <DropdownNav>
            <NavList>
              <NavItem>Features</NavItem>
              <NavItem>Pricing</NavItem>
              <NavItem>Resources</NavItem>
            </NavList>
          </DropdownNav>
          {/* signup btn */}
          <DropdownButtonContainer>
            <LoginButton>Login</LoginButton>
            <SignUpButton>Sign Up</SignUpButton>
          </DropdownButtonContainer>
        </NavbarDropdown>
      </MainHeader>
    </GlobalContainer>
  );
}

export default Header;

const MainHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// left side styles
const LeftSide = styled.div`
  @media screen and (min-width: 850px) {
    display: flex;
    align-items: center;
    column-gap: 46px;
  }
`;

const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 850px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    row-gap: 0px;
    column-gap: 29px;
  }
`;

const NavItem = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    color: var(--dark-gray);
  }

  @media screen and (min-width: 850px) {
    font-size: 15px;
    line-height: 22px;
    color: var(--dark-gray);

    &:hover {
      color: var(--black-color);
    }
  }
`;

// right side styles
const RightSide = styled.div``;

const ButtonContainer = styled.div`
  display: none;

  @media screen and (min-width: 850px) {
    display: block;
  }
`;

const LoginButton = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    color: var(--dark-gray);
  }

  @media screen and (min-width: 850px) {
    font-size: 15px;
    line-height: 22px;
    color: var(--dark-gray);
    margin-right: 37px;

    &:hover {
      color: var(--black-color);
    }
  }
`;

const SignUpButton = styled.button`
  background-color: var(--green-color);
  border: none;
  border-radius: 28px;
  padding: 12px 0px 9px 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--green-hover);
  }

  @media screen and (min-width: 850px) {
    background-color: var(--green-color);
    border-radius: 28px;
    padding: 9px 23px 8px 24px;
    font-size: 15px;
    line-height: 23px;
    color: #fff;
  }
`;

const LogoImage = styled.img`
  cursor: pointer;
`;

const BurgerImage = styled.img`
  cursor: pointer;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

// isNavbarOpen

const NavbarDropdown = styled.div<{ isNavbarOpen: boolean }>`
  max-height: ${(props) => (props.isNavbarOpen ? "500px" : "0")};
  transition: all 0.2s ease-in;
  overflow: hidden;
  position: absolute;
  top: 59px;
  background-color: var(--dark-purple);
  width: 100%;
  padding: ${(props) => (props.isNavbarOpen ? "40px 24px" : "0")};
  border-radius: 10px;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const DropdownNav = styled.nav`
  &::after {
    content: "";
    width: 100%;
    background-color: var(--dark-gray);
    height: 1px;
    display: block;
    opacity: 0.25;
    margin-top: 30px;
  }
`;

const DropdownButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  row-gap: 24px;
`;
