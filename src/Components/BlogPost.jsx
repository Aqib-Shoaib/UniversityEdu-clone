import { faComments, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

/* eslint-disable react/prop-types */

const StyledBlogPost = styled.div`
  width: 55vw;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  margin: 2rem;
  position: relative;
`;
const Img = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
const TextBox = styled.div`
  padding: 3rem;
`;
const H2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: rgb(45, 45, 45);
  margin: 0.5rem 0rem;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(93, 100, 106);
  margin: 1rem 0rem;
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: rgb(93, 100, 106);
`;
const Div = styled.div`
  display: flex;
  gap: 0.75rem;
`;
const S = styled.span`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
  background: rgb(0, 122, 92);
  position: absolute;
  left: 3rem;
  top: 50%;
  padding: 2rem;
  border-radius: 5px;
  &:hover {
    background: transparent;
  }
`;

function BlogPost({ image }) {
  return (
    <StyledBlogPost>
      <Img src={image} alt={`bog image of ${image}`} />
      <DateBox>
        <S>15</S>
        <S>Jan</S>
      </DateBox>
      <TextBox>
        <H2>Google inks pact for new 35-storey office</H2>
        <P>
          That dominion stars lights dominion divide years for fourth have
          don&apos;t stars is that he earth it first without heaven in place
          seed it second morning saying.
        </P>
        <Div>
          <Span>
            <FontAwesomeIcon icon={faUser} /> Travel, LifeStyle
          </Span>
          <Span>|</Span>
          <Span>
            <FontAwesomeIcon icon={faComments} /> 03 Comments
          </Span>
        </Div>
      </TextBox>
    </StyledBlogPost>
  );
}

export default BlogPost;
