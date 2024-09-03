import styled from "styled-components";
import CountdownTimer from "../Components/CountdownTimer";

const StyledBanner = styled.div`
  background: #32404d;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 3rem;
    hieght: 15vh;
  }
`;
const Green = styled.span`
  color: #109e7c;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
const Dull = styled.span`
  color: rgb(228, 232, 242);
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
`;
const A = styled.a`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  transition: all 0.3s linear;
  padding: 0;
  padding-bottom: 0.3rem;
  margin-left: 1rem;
  &:hover {
    letter-spacing: 1px;
  }
`;

const Second = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

function Banner() {
  return (
    <StyledBanner>
      <div>
        <Green>ENDS TOMORROW:</Green>
        <Dull> Join Teachable for $4,800 in bonus content</Dull>
      </div>
      <Second>
        <CountdownTimer />
        <A href='javascript:void(0)'>Learn More</A>
      </Second>
    </StyledBanner>
  );
}

export default Banner;
