import styled from "styled-components";
import BannerCommon from "../Components/BannerCommon";
import BlogSidebar from "../Components/BlogSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StyledBlogLayout = styled.div`
  display: grid;
  grid-template-columns: 65rem 30rem;
  padding: 8rem;
  padding-bottom: 0;
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: rgb(93, 100, 106);
  cursor: pointer;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const Div = styled.div`
  display: flex;
  gap: 0.75rem;
`;
const H1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: rgb(45, 45, 45);
  padding: 1rem 0rem;
`;
const P = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 24px;
  color: rgb(93, 100, 106);
  padding: 0.5rem 0.1rem;
`;
const Para = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: rgb(136, 136, 136);
`;
const Headline = styled.article`
  background: #f2f3f7;
  padding: 4rem;
  margin: 0.75rem;
`;
const HeadlineSentence = styled.div`
  background: #ffffff;
  border-left: 2px solid #888888;
  padding: 2rem;
`;
const Likes = styled.span`
  color: rgb(93, 100, 106);
  font-size: 1.15rem;
  line-height: 24px;
`;
const LikesDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Icons = styled.a`
  color: rgb(93, 100, 106);
  font-size: 1.15rem;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const Likesss = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0.2rem;
  padding: 0.75rem 0.1rem;
  border-top: 1px solid rgba(93, 93, 93, 0.7);
`;
const H4 = styled.h4`
  color: rgb(45, 45, 45);
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const Cunt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0.3rem;
`;
const AuthorDiv = styled.div`
  background: #fbf9ff;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
const AuthorName = styled.h6`
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: rgb(29, 51, 71);
  cursor: pointer;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;
const C = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: rgb(50, 64, 77);
  line-height: 22px;
`;
const Date = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: rgb(153, 153, 153);
`;
const Commenter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;
const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const AllComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 4rem 0rem;
  padding: 2.5rem 0.1rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const MyCommentHeading = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgb(50, 64, 77);
`;
const TextArea = styled.textarea`
  color: rgb(33, 37, 41);
  font-size: 13px;
  line-height: 20px;
  outline-width: 0;
  border: 1px solid #ccc;
  padding: 1.5rem;
  grid-column: span 2;
  min-height: 10rem;
`;
const Input = styled.input`
  color: rgb(33, 37, 41);
  padding: 1.5rem;
  font-size: 13px;
  line-height: 20px;
  outline-width: 0;
  border: 1px solid #ccc;
`;
const Btn = styled.button`
  font-size: 14px;
  line-height: 21px;
  color: rgb(0, 122, 92);
  background: #fff;
  padding: 1.5rem 0.75rem;
  border: 1.5px solid rgb(0, 122, 92);
  cursor: pointer;
  letter-spacing: 0.5px;

  &:hover {
    color: #fff;
    background: rgb(0, 122, 92);
  }
`;
const FormGrid = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
  margin: 3rem 0rem;

  & .url {
    grid-column: span 2;
  }
`;

function BlogDetails() {
  return (
    <div>
      <BannerCommon heading="Blogs Details" />
      <StyledBlogLayout>
        <div>
          <img src="single_blog_1.jpg" alt="blog image" />
          <H1>
            Second divided from form fish beast made every of seas all gathered
            us saying he our
          </H1>
          <Div>
            <Span>
              <FontAwesomeIcon icon={faUser} /> Travel, LifeStyle
            </Span>
            <Span>|</Span>
            <Span>
              <FontAwesomeIcon icon={faComments} /> 03 Comments
            </Span>
          </Div>
          <P>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </P>
          <P>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower to actually sit
            through a self-imposed MCSE training. who has the willpower to
            actually
          </P>

          <Headline>
            <HeadlineSentence>
              <Para>
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training.
              </Para>
            </HeadlineSentence>
          </Headline>

          <P>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </P>
          <P>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower to actually sit
            through a self-imposed MCSE training. who has the willpower to
            actually
          </P>
          <Likesss>
            <LikesDiv>
              <Likes>
                <FontAwesomeIcon icon={faHeart} />
              </Likes>
              <Likes>Lily and 4 people like this</Likes>
            </LikesDiv>
            <LikesDiv>
              <Icons href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </Icons>
              <Icons href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </Icons>
              <Icons href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </Icons>
              <Icons href="#">
                <FontAwesomeIcon icon={faBehance} />
              </Icons>
            </LikesDiv>
          </Likesss>

          <Cunt>
            <LikesDiv>
              <img src="preview.jpg" alt="" />
              <div>
                <Para>prev post</Para>
                <H4>Lorem ipsum dolor sit amet.</H4>
              </div>
            </LikesDiv>
            <LikesDiv>
              <div>
                <Para>next post</Para>
                <H4>Lorem ipsum dolor sit amet.</H4>
              </div>
              <img src="next.jpg" alt="" />
            </LikesDiv>
          </Cunt>

          <AuthorDiv>
            <img src="author.png" alt="author image" />
            <div>
              <AuthorName>Aqib Shoaib</AuthorName>
              <Para>
                Second divided from form fish beast made. Every of seas all
                gathered use saying you&apos;re, he our dominion twon Second
                divided from
              </Para>
            </div>
          </AuthorDiv>

          <AllComments>
            <C>05 comments</C>
            <Comment>
              <img src="comment_1.png" alt="comment one" />
              <div>
                <Para>
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </Para>
                <Bottom>
                  <Commenter>
                    <AuthorName>Emily Blunt</AuthorName>
                    <Date>December 4, 2017 at 3:12 pm</Date>
                  </Commenter>
                  <Date>Reply</Date>
                </Bottom>
              </div>
            </Comment>
            <Comment>
              <img src="comment_1.png" alt="comment one" />
              <div>
                <Para>
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </Para>
                <Bottom>
                  <Commenter>
                    <AuthorName>Emily Blunt</AuthorName>
                    <Date>December 4, 2017 at 3:12 pm</Date>
                  </Commenter>
                  <Date>Reply</Date>
                </Bottom>
              </div>
            </Comment>
            <Comment>
              <img src="comment_1.png" alt="comment one" />
              <div>
                <Para>
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </Para>
                <Bottom>
                  <Commenter>
                    <AuthorName>Emily Blunt</AuthorName>
                    <Date>December 4, 2017 at 3:12 pm</Date>
                  </Commenter>
                  <Date>Reply</Date>
                </Bottom>
              </div>
            </Comment>
          </AllComments>

          <div>
            <MyCommentHeading>Leave a reply</MyCommentHeading>
            <FormGrid action="">
              <TextArea name="" id="" placeholder="write message"></TextArea>
              <Input type="text" name="" id="" placeholder="name" />
              <Input type="email" name="" id="" placeholder="email" />
              <Input
                type="url"
                name=""
                id=""
                className="url"
                placeholder="example.com"
              />
              <Btn type="submit">Post Comment</Btn>
            </FormGrid>
          </div>
        </div>
        <BlogSidebar />
      </StyledBlogLayout>
    </div>
  );
}

export default BlogDetails;
