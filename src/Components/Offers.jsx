import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 6rem;
`;
const H2 = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  color: rgb(50, 64, 77);
  text-align: center;
  text-transform: uppercase;
`;
const P = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: rgb(119, 119, 119);
  text-align: center;
  width: 50vw;
  margin: 2rem 0rem;
`;
const H3 = styled.h3`
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: rgb(50, 64, 77);
  transition: all 0.3s ease-in-out;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const Pp = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(93, 100, 106);
  margin: 1rem 0rem;
`;
const A = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(0, 122, 92);
  padding-bottom: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border-bottom: 2px solid rgb(0, 122, 92);
  width: 95px;
  &:hover {
    letter-spacing: 1px;
    width: 105px;
  }
`;
const Boxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  gap: 1rem;
  &:hover {
    border-color: #007a5c;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  padding: 1rem;
`;

function Offers() {
  return (
    <Main>
      <H2>Program we offer</H2>
      <P>
        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
        ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
        Morbi vitae tincidunt mi, et malesuada massa.
      </P>
      <Boxes>
        <Box>
          <Img src='/blog1.jpg' alt='offer blog image' />
          <H3>faculty of science</H3>
          <Pp>
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
            vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
            sit amet condimentum.
          </Pp>
          <A href='/programs'>Learn More</A>
        </Box>
        <Box>
          <Img src='/blog2.jpg' alt='offer blog image' />
          <H3>faculty of arts</H3>
          <Pp>
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
            vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
            sit amet condimentum.
          </Pp>
          <A href='/programs'>Learn More</A>
        </Box>
      </Boxes>
    </Main>
  );
}

export default Offers;
