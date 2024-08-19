import styled from "styled-components";

const SearchContainer = styled.div`
  background: #fbf9ff;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;
const Input = styled.input`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  border: 1px solid rgb(255, 255, 255, 0.5);
  padding: 1rem;
`;
const Btn = styled.button`
  background-color: rgb(0, 122, 92);
  text-transform: capitalize;
  padding: 1rem;
  color: #fff;
  border: none;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0cap.5px;
`;
const Container = styled.div`
  background: #fbf9ff;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-top: 5rem;
  padding: 1rem;
  gap: 1rem;
`;
const H4 = styled.h4`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgb(45, 45, 45);
`;
const S = styled.span`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  color: rgb(93, 100, 106);
  transition: all 0.3s ease;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const Sp = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  color: rgb(93, 100, 106);
  transition: all 0.3s ease;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
`;
const Small = styled.span`
  color: rgb(45, 45, 45);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const Date = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: rgb(93, 100, 106);
`;
const Tag = styled.span`
  background: #fff;
  border: 1px solid #ccc;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgb(45, 45, 45);
  padding: 0.5rem;
  margin: 0.7rem;

  &:hover {
    background: rgb(0, 122, 92);
    color: #fff;
  }
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2.5rem 1rem;
  gap: 0.5rem;
`;
const EmailInput = styled.input`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  padding: 1rem;
  padding-left: 1.5rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline-width: 0;
`;
const SBtn = styled.button`
  background: #fff;
  border: 1px solid rgb(0, 122, 92);
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  padding: 1rem;
  color: rgb(0, 122, 92);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
    background: rgb(0, 122, 92);
  }
`;
const Sub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

function BlogSidebar() {
  return (
    <div>
      <SearchContainer>
        <Input type="text" name="" id="" placeholder="search posts" />
        <Btn disabled="disabled">Search</Btn>
      </SearchContainer>
      <Container>
        <H4>Category</H4>
        <S>Resturant food (34)</S>
        <S>Travel news (10)</S>
        <S>Modern Technology (03)</S>
        <S>Product (11)</S>
        <S>Inspiration (21)</S>
        <Sp>health care (34)</Sp>
      </Container>
      <Container>
        <H4>Recent Posts</H4>
        <Div>
          <img src="/post_1.jpg" alt="post image" />
          <Box>
            <Small>Post Title</Small>
            <Date>Jan 21,2023.</Date>
          </Box>
        </Div>
        <Div>
          <img src="/post_2.jpg" alt="post image" />
          <Box>
            <Small>Post Title</Small>
            <Date>Jan 21,2023.</Date>
          </Box>
        </Div>
        <Div>
          <img src="/post_3.jpg" alt="post image" />
          <Box>
            <Small>Post Title</Small>
            <Date>Jan 21,2023.</Date>
          </Box>
        </Div>
        <Div>
          <img src="/post_5.jpg" alt="post image" />
          <Box>
            <Small>Post Title</Small>
            <Date>Jan 21,2023.</Date>
          </Box>
        </Div>
      </Container>
      <Container>
        <H4>Post Tags</H4>
        <Tags>
          <Tag>project</Tag>
          <Tag>love</Tag>
          <Tag>technology</Tag>
          <Tag>travel</Tag>
          <Tag>resturant</Tag>
          <Tag>lifestyle</Tag>
          <Tag>design</Tag>
          <Tag>illustration</Tag>
        </Tags>
      </Container>
      <Container>
        <H4>Instagram Feed</H4>
        <Tags>
          <img src="/post_1.jpg" alt="post image" />
          <img src="/post_2.jpg" alt="post image" />
          <img src="/post_3.jpg" alt="post image" />
          <img src="/post_4.jpg" alt="post image" />
          <img src="/post_5.jpg" alt="post image" />
          <img src="/post_6.jpg" alt="post image" />
        </Tags>
      </Container>
      <Container>
        <H4>Newsletter</H4>
        <Sub>
          <EmailInput type="email" name="" id="" placeholder="Enter Email..." />
          <SBtn disabled="disabled">Subscribe</SBtn>
        </Sub>
      </Container>
    </div>
  );
}

export default BlogSidebar;
