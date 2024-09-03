import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

//styles
const StyledFooter = styled.footer`
  background-color: #32404d;
  margin: 0;
`;
const Copyright = styled.div`
  margin: 0rem 7rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
const P = styled.p`
  color: rgb(167, 174, 180);
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;
const S = styled.span`
  color: rgb(0, 122, 92);
`;
const A = styled.a`
  color: rgb(0, 122, 92);
`;
const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 7rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;
const H3 = styled.h3`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 1.75rem;
`;
const Links = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &:hover {
    color: rgb(0, 122, 92);
    text-decoration: underline;
  }
`;
const Linkdiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0rem 2rem;
  margin-right: 5rem;
  gap: 0.7rem;
`;
const Label = styled.label`
  color: rgb(167, 174, 180);
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`;
const Social = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Sc = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    color: rgb(0, 172, 130);
    transform: rotateY(180deg);
  }
`;
const Btn = styled.button`
  background-color: #007a5c;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  border: none;
  padding: 1rem 2rem;
`;
const Input = styled.input`
  color: rgb(92, 97, 104);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  padding: 1rem 2rem;
`;
const Div = styled.div`
  display: flex;
  margin: 2rem 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <Main>
        <img src='logo2_footer.png' alt='footer logo of university edu' />
        <Linkdiv>
          <H3>Quick Links</H3>
          <Links to='#'>Work</Links>
          <Links to='#'>Services</Links>
          <Links to='#'>Products</Links>
          <Links to='#'>Tips & Tricks</Links>
        </Linkdiv>
        <Linkdiv>
          <H3>Programs</H3>
          <Links to='#'>Air Frieght</Links>
          <Links to='#'>Ocean Frieght</Links>
          <Links to='#'>Large projects</Links>
        </Linkdiv>
        <Linkdiv>
          <H3>Resources</H3>
          <Links to='#'>FAQ</Links>
          <Links to='#'>Submit Ticket</Links>
          <Links to='#'>Contact us</Links>
        </Linkdiv>
        <Linkdiv>
          <H3>Newsletter</H3>
          <Label htmlFor=''>Subscribe Newsletter to get updates</Label>
          <Div>
            <Input type='email' name='' placeholder='Enter your Email' id='' />
            <Btn>
              <img src='/Icon-send.svg' alt='send button image' />
            </Btn>
          </Div>
          <Social>
            <Sc>
              <FontAwesomeIcon icon={faFacebook} />
            </Sc>
            <Sc>
              <FontAwesomeIcon icon={faInstagram} />
            </Sc>
            <Sc>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Sc>
            <Sc>
              <FontAwesomeIcon icon={faYoutube} />
            </Sc>
          </Social>
        </Linkdiv>
      </Main>
      <Copyright>
        <P>
          Copyright ©2024 All rights reserved | This template is made with by{" "}
          <S>
            <FontAwesomeIcon icon={faHeart} />
          </S>{" "}
          by <A href='https://colorlib.com'>Colorlib</A>
        </P>
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
