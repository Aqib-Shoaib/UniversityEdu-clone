import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const H3 = styled.h3`
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
const H4 = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: rgb(50, 64, 77);
  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const Pp = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(50, 64, 77);
`;
const I = styled.span`
  border-radius: 50%;
  padding: 2rem;
  font-size: 1.5rem;
  border: 1px solid rgb(0, 122, 92);
  cursor: pointer;
  background: transparent;

  &:hover {
    background-color: rgb(0, 122, 92);
  }
`;

const Grid = styled.div`
  background: #f2fbf9;
  display: grid;
  grid-template-columns: 50vw 50vw;
  padding: 0;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Div = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  transition: all 0.3s linear;

  &:hover {
    background: #dff1ec;
    border: none;
  }
  &:hover span {
    background: rgb(0, 122, 92);
  }
`;
const D = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Essential() {
  return (
    <Grid>
      <Div>
        <H3>Essential Resources</H3>
        <P>
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. Integer efficitur tellus metus, sed feugiat leo posuere.
        </P>
        <Box>
          <D>
            <H4>First year Students</H4>
            <Pp>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </Pp>
          </D>
          <I>
            <FontAwesomeIcon icon={faArrowRight} />
          </I>
        </Box>
        <Box>
          <D>
            <H4>Tution & Fees</H4>
            <Pp>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </Pp>
          </D>
          <I>
            <FontAwesomeIcon icon={faArrowRight} />
          </I>
        </Box>
        <Box>
          <D>
            <H4>International Students</H4>
            <Pp>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.
            </Pp>
          </D>
          <I>
            <FontAwesomeIcon icon={faArrowRight} />
          </I>
        </Box>
      </Div>
      <img src='/visit1.jpg' alt='esssential visit image' />
    </Grid>
  );
}

export default Essential;
