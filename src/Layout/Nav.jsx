import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

//styles
const StyledNavbar = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 1rem 2rem;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "relative")};
  top: ${({ isSticky }) => (isSticky ? 0 : "")};
  z-index: 999;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    display: ${({ showMenu }) =>
      showMenu ? "flex" : "none"}; /* Show or hide menu based on state */
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    padding: 1rem;
    z-index: 999;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center
  cursor:pointer;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  letter-spacing: 0.5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  cursor: pointer;

  &:hover {
    color: rgb(0, 122, 92);
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    color: rgb(0, 122, 92);
    &:hover {
      color: #fff;
      background-color: rgb(0, 122, 92);
    }
  }
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 1000;
  padding: 0rem 2rem;
  padding-bottom: 1rem;
  flex-direction: column;
  min-width: 13rem;
  position: absolute;
  top: 100%;
  left: 80%;
  transform: translateX(-40%);
  display: none;
`;

const DropdownContainer = styled.div`
  position: relative;
  &:hover .dropdown {
    display: flex;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: none; /* Hide social icons on small screens */
  }
`;

const NumberContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0rem 1.25rem;
  margin-right: 1rem;
`;

const Callus = styled.span`
  color: rgb(0, 122, 92);
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;

const Number = styled.span`
  color: rgb(50, 64, 77);
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin-left: 1rem;
`;

const Fb = styled.span`
  color: rgb(59, 89, 152);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const Tw = styled.span`
  color: rgb(59, 89, 152);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const Ld = styled.span`
  color: rgb(29, 161, 242);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const Yt = styled.span`
  color: rgb(255, 0, 0);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const En = styled.span`
  color: rgb(52, 168, 83);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const StyledButton = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-color: ${({ active }) => (active ? "#000" : "#fff")};
    color: rgb(0, 122, 92);
    border: none;
    padding: 0.8rem 1.2rem;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1000;
  }
`;

//component
function Nav() {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledNavbar isSticky={isSticky}>
      <StyledLink to='/'>
        <img src='/logo.png' alt='university edu logo' />
      </StyledLink>

      <StyledButton onClick={toggleMenu}>
        {showMenu ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </StyledButton>

      <StyledNav showMenu={showMenu}>
        <Navigation>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/about'>About</StyledLink>
          <StyledLink to='/programs'>Programs</StyledLink>
          <DropdownContainer>
            <StyledLink to='/blog'>Blog</StyledLink>
            <Dropdown className='dropdown'>
              <StyledLink to='/blogdetails'>Blog Details</StyledLink>
              <StyledLink to='/elements'>Elements</StyledLink>
            </Dropdown>
          </DropdownContainer>
          <StyledLink to='/contact'>Contact</StyledLink>
        </Navigation>
      </StyledNav>

      <Social>
        <NumberContainer>
          <Callus>Call Us:</Callus>
          <Number>0 (78) 645 345</Number>
        </NumberContainer>
        <Icons>
          <Fb>
            <FontAwesomeIcon icon={faSquareFacebook} />
          </Fb>
          <Tw>
            <FontAwesomeIcon icon={faSquareTwitter} />
          </Tw>
          <Ld>
            <FontAwesomeIcon icon={faLinkedin} />
          </Ld>
          <Yt>
            <FontAwesomeIcon icon={faSquareYoutube} />
          </Yt>
          <En>
            <FontAwesomeIcon icon={faEnvelope} />
          </En>
        </Icons>
      </Social>
    </StyledNavbar>
  );
}

export default Nav;
