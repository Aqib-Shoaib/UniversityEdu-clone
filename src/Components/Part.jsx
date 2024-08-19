import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  place-items: center;
`;
const Img = styled.img`
  max-width: 100%;
  height: 95vh;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem;
  background-color: #007a5c;
  color: #fff;
`;
const H3 = styled.h3`
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
`;
const P = styled.p`
  color: rgb(201, 214, 203);
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  padding: 1.5rem 0rem;
`;
const A = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 1rem;
  text-transform: capitalize;
  transition: all 0.3s ease;
  text-decoration: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  width: 95px;
  &:hover {
    letter-spacing: 1px;
    width: 105px;
  }
`;

function Part() {
  return (
    <Grid>
      <Img src="/visit2.jpg" alt="visit image" />
      <Box>
        <H3>Trusted By over 6k studenst</H3>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          felis felis, vulputate sit amet mauris et, semper aliquam ligula.
          Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt malesuada massa.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          felis felis, vulputate sit amet mauris et, semper aliquam ligula.
          Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt malesuada massa.
        </P>
        <A href="">learn more</A>
      </Box>
    </Grid>
  );
}

export default Part;
