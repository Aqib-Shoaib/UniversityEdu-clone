import styled from "styled-components";

const H3 = styled.h3`
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  color: rgb(50, 64, 77);
  transition: all 0.3s ease;
  padding-left: 2rem;
  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const P = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: rgb(50, 64, 77);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    color: rgb(0, 122, 92);
  }
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
  width: 105px;
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;

  &:hover {
    letter-spacing: 1px;
    width: 120px;
  }
`;
const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 28vw 28vw 28vw;
  padding: 1rem 5rem;
  place-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Img = styled.img`
  object-fit: cover;
  max-width: 100%;
`;

function TopStories() {
  return (
    <Main>
      <H3>Top Stories</H3>
      <A href=''>More Stories</A>
      <Grid>
        <div>
          <Img src='/class-img1.jpg' alt='story one' />
          <P>
            Linguistics alumna says recognizing Indigenous Languages Day is
            crucial to our histories
          </P>
        </div>
        <div>
          <Img src='/class-img2.jpg' alt='story one' />
          <P>
            Linguistics alumna says recognizing Indigenous Languages Day is
            crucial to our histories
          </P>
        </div>
        <div>
          <Img src='/class-img3.jpg' alt='story one' />
          <P>
            Linguistics alumna says recognizing Indigenous Languages Day is
            crucial to our histories
          </P>
        </div>
      </Grid>
    </Main>
  );
}

export default TopStories;
