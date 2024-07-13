import { useState, useEffect } from "react";
import styled from "styled-components";

const Time = styled.span`
  color: rgb(0, 172, 130);
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;
const Identifier = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  text-transform: capitalize;
`;
const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft()); // Initial calculation

    return () => clearInterval(timer);
  }, []);

  return (
    <Main>
      <TimeDiv>
        <Time>{timeLeft.days || "00"}</Time>
        <Identifier>Days</Identifier>
      </TimeDiv>
      <TimeDiv>
        <Time>{timeLeft.hours || "00"}</Time>
        <Identifier>Hrs</Identifier>
      </TimeDiv>
      <TimeDiv>
        <Time>{timeLeft.minutes || "00"}</Time>
        <Identifier>Mins</Identifier>
      </TimeDiv>
      <TimeDiv>
        <Time>{timeLeft.seconds || "00"}</Time>
        <Identifier>Secs</Identifier>
      </TimeDiv>
    </Main>
  );
};

export default CountdownTimer;
