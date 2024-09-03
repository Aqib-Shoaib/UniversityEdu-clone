import styled from "styled-components";

const StyledBanner = styled.div`
  height: 100vh;
  background: url("/h1_hero1.jpg");
  background-position: center;
  background-size: cover;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: rgb(255, 255, 255);
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
const H1 = styled.h1`
  font-weight: 900;
  font-size: 54px;
  line-height: 65px;
  text-transform: uppercase;
  color: rgb(255, 255, 255);

  @media screen and (max-width: 768px) {
    font-size: 34px;
  }
`;
const P = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: rgb(255, 255, 255);
`;

const A = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: rgb(255, 255, 255);
  background: rgb(0, 122, 92);
  transition: all 0.3s ease;
  text-decoration: none;
  text-transform: capitalize;
  padding: 2rem;
  border: 1px solid rgb(0, 122, 92);
  letter-spacing: 1px;

  &:hover {
    background: transparent;
    border: 1px solid #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 0.7rem;
    font-size: 1.2rem;
  }
`;
const Container = styled.div`
  max-width: 630px;
  padding-right: 10px;
`;

function HomeBanner() {
  return (
    <StyledBanner>
      <Span>Educational & School</Span>
      <Container>
        <H1>showcase courses, events and more</H1>
        <P>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          quidem itaque error, sint sit in.
        </P>
      </Container>
      <A href='/programs'>Get started</A>
    </StyledBanner>
  );
}

export default HomeBanner;
