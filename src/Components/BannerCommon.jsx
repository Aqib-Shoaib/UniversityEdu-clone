/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledDiv = styled.div`
  background: url("/h1_hero1.jpg");
  display: flex;
  flex-direction: column;
  padding: 6rem;
  background-size: cover;
  background-position: center;
  color: #fff;
  height: 50vh;
`;
const H1 = styled.h1`
  font-weight: 900;
  font-size: 54px;
  line-height: 76px;
  text-transform: capitalize;
`;
const P = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  max-width: 580px;
`;

function BannerCommon({ heading }) {
  return (
    <StyledDiv>
      <H1>{heading}</H1>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        laboriosam dolorem dolore repellendus pariatur unde.
      </P>
    </StyledDiv>
  );
}

export default BannerCommon;
