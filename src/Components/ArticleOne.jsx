import styled from "styled-components";

const StyledArticle = styled.div`
  background: #fcf2eb;
  display: grid;
  gap: 3rem;
  padding: 10rem;
  grid-template-columns: 40vw 40vw;
  place-items: center;
`;
const H2 = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  color: rgb(50, 64, 77);
`;
const P = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: rgb(119, 119, 119);
`;
const A = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(0, 122, 92);
  padding-bottom: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border-bottom: 2px solid rgb(0, 122, 92);
  width: 95px;
  &:hover {
    letter-spacing: 1px;
    width: 105px;
  }
`;
const Img = styled.img`
  max-width: 100%;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 2rem;
`;

function ArticleOne() {
  return (
    <StyledArticle>
      <Img src="/about1.jpg" alt="about image" />
      <Flex>
        <H2>A COMPREHENSIVE TEACHING APPROACH</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          felis felis, vulputate sit amet mauris et, semper aliquam ligula.
          Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt malesuada massa.
        </P>
        <P>
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
          Morbi vitae tincidunt mi, et malesuada massa.
        </P>
        <A href="">Learn More</A>
      </Flex>
    </StyledArticle>
  );
}

export default ArticleOne;
