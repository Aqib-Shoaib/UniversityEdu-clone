import styled from "styled-components";
import BannerCommon from "../Components/BannerCommon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SampleText = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgb(93, 100, 106);

  i,
  b,
  sup,
  sub,
  del,
  u {
    color: rgb(241, 91, 67);
  }
`;
const SampleTextHeading = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: rgb(50, 64, 77);
`;
const SampleTextArea = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Button = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: ${(props) => props.lh || "40px"};
  letter-spacing: 0.2px;
  padding: 0rem 2.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.clr || "rgb(65, 80, 148)"};
  background: ${(props) => props.bg || "#FFFFFF"};
  border-radius: ${(props) => props.br || 0};
  border: ${(props) => (props.brd ? `1px solid ${props.brd}` : "none")};
  text-decoration: ${(props) => props.line || "none"};

  &:hover {
    color: ${(props) => props.bg || "#fff"};
    background: ${(props) => props.clr || "rgb(65,80,148)"};
    border: ${(props) => (props.hbrd ? `1px solid ${props.hbrd}` : "none")};
  }
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: flex-start;
`;
const BtnSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const SectionButtons = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 5rem;
`;
const ALignment = styled.div`
  display:Grid;
  grid-template-columns:${props=>props.left ?"20% auto" :"auto 20%" } ;
  gap:3.5rem;
`;
const Div = styled.div`
padding:1rem 4rem;
display:flex;
flex-direction:column;
gap:2rem;
`;
const Defhead = styled.h3`
font-weight:500;
font-size:28px;
line-height:34px;
color:#32404d;
`;
const Defp = styled.p`
color:#5d646a;
font-size:1rem;
line-hieght:26px;
`;
const Qoute = styled.p`
color:#212529;
font-size:1rem;
line-hieght:24px;
`;
const Defs = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:3rem;
margin:0.5rem 1.5rem;
`;
const QouteDiv = styled.div`
background-color:#F9F9FF;
border-left: 2px solid #F15B43;
padding:1.5rem;
margin:1rem;
`;
const Flex = styled.div`
display:flex;
gap:2rem;

`;
const Img = styled.img`
width:33%;
height: auto;
`
const Img2 = styled.img`
width:50%;
height: auto;
`;
const Images = styled.div`
display:flex;
flex-direction:column;
gap:3rem;
`

function Elements() {
  return (
    <div>
      <BannerCommon heading="Elements" />
      {/* sample text */}
      <SampleTextArea>
        <TextBox>
          <SampleTextHeading>Text Sample</SampleTextHeading>
          <SampleText>
            Every avid independent filmmaker has <b>Bold</b> about making that{" "}
            <i>Italic</i> interest documentary, or short film to show off their
            creative prowess. Many have great ideas and want to “wow” the
            <sup>Superscript</sup> scene, or video renters with their big
            project. But once you have the<sub>Subscript</sub> “in the can” (no
            easy feat), how do you move from a <del>Strike</del> through of
            master DVDs with the <u>“Underline”</u> marked hand-written title
            inside a secondhand CD case, to a pile of cardboard boxes full of
            shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting
            on your doorstep? You need to create eye-popping artwork and have
            your project replicated. Using a reputable full service DVD
            Replication company like PacificDisc, Inc. to partner with is
            certainly a helpful option to ensure a professional end result, but
            to help with your DVD replication project, here are 4 easy steps to
            follow for good DVD replication results:
          </SampleText>
        </TextBox>
      </SampleTextArea>

      {/* sample buttons */}
      <SectionButtons>
        <SampleTextHeading>Sample Buttons</SampleTextHeading>
        <BtnSet>
          <Btns>
            <Button>Default</Button>
            <Button clr="#fff" bg="#f15b43" brd="#f15b43" hbrd="#f15b43">
              Primary
            </Button>
            <Button clr="#fff" bg="#4cd3e3" brd="#4cd3e3" hbrd="#4cd3e3">
              Sucess
            </Button>
            <Button clr="#fff" bg="#38a4ff" brd="#38a4ff" hbrd="#38a4ff">
              Info
            </Button>
            <Button clr="#fff" bg="#f4e700" brd="#f4e700" hbrd="#f4e700">
              Warning
            </Button>
            <Button clr="#fff" bg="#f44a40" brd="#f44a40" hbrd="#f44a40">
              Danger
            </Button>
            <Button clr="#415094" line="underline">
              Link
            </Button>
            <Button clr="#f1f1f1" bg="#ccc" disabled>
              Disabled
            </Button>
          </Btns>
          <Btns>
            <Button>Default</Button>
            <Button clr="rgb(241, 91, 67)" bg="#fff" brd="rgb(241,91,67)">
              Primary
            </Button>
            <Button bg="#fff" clr="#4cd3e3" brd="#4cd3e3">
              Sucess
            </Button>
            <Button bg="#fff" clr="#38a4ff" brd="#38a4ff">
              Info
            </Button>
            <Button bg="#fff" clr="#f4e700" brd="#f4e700">
              Warning
            </Button>
            <Button bg="#fff" clr="#f44a40" brd="#f44a40">
              Danger
            </Button>
            <Button clr="#415094" line="underline">
              Link
            </Button>
            <Button clr="#f1f1f1" bg="#ccc" disabled>
              Disabled
            </Button>
          </Btns>
        </BtnSet>
        <BtnSet>
          <Btns>
            <Button>Default</Button>
            <Button
              clr="#fff"
              bg="#f15b43"
              brd="#f15b43"
              hbrd="#f15b43"
              br="5px"
            >
              Primary
            </Button>
            <Button
              clr="#fff"
              bg="#4cd3e3"
              brd="#4cd3e3"
              hbrd="#4cd3e3"
              br="5px"
            >
              Sucess
            </Button>
            <Button
              clr="#fff"
              bg="#38a4ff"
              brd="#38a4ff"
              hbrd="#38a4ff"
              br="5px"
            >
              Info
            </Button>
            <Button
              br="5px"
              clr="#fff"
              bg="#f4e700"
              brd="#f4e700"
              hbrd="#f4e700"
            >
              Warning
            </Button>
            <Button
              clr="#fff"
              bg="#f44a40"
              brd="#f44a40"
              hbrd="#f44a40"
              br="5px"
            >
              Danger
            </Button>
            <Button clr="#415094" line="underline" br="5px">
              Link
            </Button>
            <Button clr="#f1f1f1" bg="#ccc" br="5px" disabled>
              Disabled
            </Button>
          </Btns>
          <Btns>
            <Button>Default</Button>
            <Button
              clr="rgb(241, 91, 67)"
              br="5px"
              bg="#fff"
              brd="rgb(241,91,67)"
            >
              Primary
            </Button>
            <Button bg="#fff" clr="#4cd3e3" br="5px" brd="#4cd3e3">
              Sucess
            </Button>
            <Button bg="#fff" clr="#38a4ff" br="5px" brd="#38a4ff">
              Info
            </Button>
            <Button bg="#fff" clr="#f4e700" br="5px" brd="#f4e700">
              Warning
            </Button>
            <Button bg="#fff" clr="#f44a40" br="5px" brd="#f44a40">
              Danger
            </Button>
            <Button clr="#415094" br="5px" line="underline">
              Link
            </Button>
            <Button clr="#f1f1f1" br="5px" bg="#ccc" disabled>
              Disabled
            </Button>
          </Btns>
        </BtnSet>
        <BtnSet>
          <Btns>
            <Button>Default</Button>
            <Button
              clr="#fff"
              bg="#f15b43"
              brd="#f15b43"
              hbrd="#f15b43"
              br="999px"
            >
              Primary
            </Button>
            <Button
              clr="#fff"
              bg="#4cd3e3"
              brd="#4cd3e3"
              hbrd="#4cd3e3"
              br="999px"
            >
              Sucess
            </Button>
            <Button
              clr="#fff"
              bg="#38a4ff"
              brd="#38a4ff"
              hbrd="#38a4ff"
              br="999px"
            >
              Info
            </Button>
            <Button
              br="999px"
              clr="#fff"
              bg="#f4e700"
              brd="#f4e700"
              hbrd="#f4e700"
            >
              Warning
            </Button>
            <Button
              clr="#fff"
              bg="#f44a40"
              brd="#f44a40"
              hbrd="#f44a40"
              br="999px"
            >
              Danger
            </Button>
            <Button clr="#415094" line="underline" br="999px">
              Link
            </Button>
            <Button clr="#f1f1f1" bg="#ccc" br="999px" disabled>
              Disabled
            </Button>
          </Btns>
          <Btns>
            <Button>Default</Button>
            <Button
              clr="rgb(241, 91, 67)"
              br="999px"
              bg="#fff"
              brd="rgb(241,91,67)"
            >
              Primary
            </Button>
            <Button bg="#fff" clr="#4cd3e3" br="999px" brd="#4cd3e3">
              Sucess
            </Button>
            <Button bg="#fff" clr="#38a4ff" br="999px" brd="#38a4ff">
              Info
            </Button>
            <Button bg="#fff" clr="#f4e700" br="999px" brd="#f4e700">
              Warning
            </Button>
            <Button bg="#fff" clr="#f44a40" br="999px" brd="#f44a40">
              Danger
            </Button>
            <Button clr="#415094" br="999px" line="underline">
              Link
            </Button>
            <Button clr="#f1f1f1" br="999px" bg="#ccc" disabled>
              Disabled
            </Button>
          </Btns>
        </BtnSet>
        <BtnSet>
          <Btns>
            <Button>
              Default <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            <Button
              clr="#fff"
              bg="#f15b43"
              brd="#f15b43"
              hbrd="#f15b43"
              br="999px"
            >
              Primary
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button
              clr="#fff"
              bg="#4cd3e3"
              brd="#4cd3e3"
              hbrd="#4cd3e3"
              br="999px"
            >
              Sucess
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button
              clr="#fff"
              bg="#38a4ff"
              brd="#38a4ff"
              hbrd="#38a4ff"
              br="999px"
            >
              Info
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button
              br="999px"
              clr="#fff"
              bg="#f4e700"
              brd="#f4e700"
              hbrd="#f4e700"
            >
              Warning
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button
              clr="#fff"
              bg="#f44a40"
              brd="#f44a40"
              hbrd="#f44a40"
              br="999px"
            >
              Danger
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button clr="#415094" line="underline" br="999px">
              Link
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button clr="#f1f1f1" bg="#ccc" br="999px" disabled>
              Disabled
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
          </Btns>
          <Btns>
            <Button>
              Default
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            <Button
              clr="rgb(241, 91, 67)"
              br="999px"
              bg="#fff"
              brd="rgb(241,91,67)"
            >
              Primary
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button bg="#fff" clr="#4cd3e3" br="999px" brd="#4cd3e3">
              Sucess
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button bg="#fff" clr="#38a4ff" br="999px" brd="#38a4ff">
              Info
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button bg="#fff" clr="#f4e700" br="999px" brd="#f4e700">
              Warning
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button bg="#fff" clr="#f44a40" br="999px" brd="#f44a40">
              Danger
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button clr="#415094" br="999px" line="underline">
              Link
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </Button>
            <Button clr="#f1f1f1" br="999px" bg="#ccc" disabled>
              Disabled
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Btns>
        </BtnSet>
        <BtnSet>
          <Btns>
            <Button
              lh="50px"
              clr="#fff"
              bg="#f15b43"
              brd="#f15b43"
              hbrd="#f15b43"
            >
              Extra Large
            </Button>
            <Button
              lh="45px"
              clr="#fff"
              bg="#4cd3e3"
              brd="#4cd3e3"
              hbrd="#4cd3e3"
            >
              Large
            </Button>
            <Button>Default</Button>
            <Button
              lh="30px"
              clr="#fff"
              bg="#f15b43"
              brd="#f15b43"
              hbrd="#f15b43"
            >
              Medium
            </Button>
            <Button
              lh="25px"
              clr="#fff"
              bg="#4cd3e3"
              brd="#4cd3e3"
              hbrd="#4cd3e3"
            >
              Small
            </Button>
          </Btns>
          <Btns>
            <Button lh="50px" bg="#fff" clr="#f15b43" brd="#f15b43">
              Extra Large
            </Button>
            <Button lh="45px" bg="#fff" clr="#4cd3e3" brd="#4cd3e3">
              Large
            </Button>
            <Button>Default</Button>
            <Button lh="30px" bg="#fff" clr="#f15b43" brd="#f15b43">
              Medium
            </Button>
            <Button lh="25px" bg="#fff" clr="#4cd3e3" brd="#4cd3e3">
              Small
            </Button>
          </Btns>
        </BtnSet>
      </SectionButtons>

      {/* left alignement and right alignmentn */}
      <Div>
        <h1>
          Left Aligned
        </h1>
        <ALignment left={true}>
          <img src="d.jpg.webp" alt="left aligned or right aligned" />
          <p>
          Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
          </p>
        </ALignment>
      </Div>
      <Div>
        <h1>
          Right Aligned
        </h1>
        <ALignment left={false}>
          <p>
          Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
          </p>
          <img src="d.jpg.webp" alt="left aligned or right aligned" />
        </ALignment>
      </Div>


              {/* 3 column grid */}
      <Div>
        <Defhead>Definitions</Defhead>
        <Defs>
          {  
            [1,2,3].map(val=><div key={val} >
              <Defhead>Definition 0{val}</Defhead>
              <Defp>
              Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
              </Defp>
            </div>)
          }
        </Defs>
      </Div>

{/* block qoutes */}
          <Div>
            <Defhead>Block Quotes</Defhead>
            <div>
              <QouteDiv>
                <Qoute>
                “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking”
                </Qoute>
              </QouteDiv>
            </div>
          </Div>
{/* image gallery */}
          <Div>
            <Defhead>Image Gallery</Defhead>
            <Images>
              <Flex >
                <Img src="single_blog_1.jpg" alt="" />
                <Img src="single_blog_1.jpg" alt="" />
                <Img src="single_blog_1.jpg" alt="" />
              </Flex>
              <Flex >
                <Img2 src="single_blog_2.jpg" alt="" />
                <Img2 src="single_blog_2.jpg" alt="" />
              </Flex>
              <Flex >
                <Img src="single_blog_1.jpg" alt="" />
                <Img src="single_blog_1.jpg" alt="" />
                <Img src="single_blog_1.jpg" alt="" />
              </Flex>
            </Images>
          </Div>

    </div>
  );
}

export default Elements;
