import styled from "styled-components";
import Part from "./Part";

const imgs = ["brand1.png", "brand2.png", "brand3.png", "brand4.png"];

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
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Div2 = styled.div`
  display: flex;
  padding: 1rem 0rem;
`;

function Partners() {
  return (
    <Div>
      <H3>Our Partners</H3>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
        inventore quisquam voluptatum, tenetur sed est.
      </P>
      <Div2>
        {imgs.map((el, i) => (
          <span key={i}>
            <img src={`/${el}`} alt={`brand image number ${i}`} />
          </span>
        ))}
      </Div2>
      <Part />
    </Div>
  );
}

export default Partners;
