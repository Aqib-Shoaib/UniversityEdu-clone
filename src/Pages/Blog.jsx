import styled from "styled-components";
import BannerCommon from "../Components/BannerCommon";
import BlogPost from "../Components/BlogPost";
import BlogSidebar from "../Components/BlogSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const StyledBlogLayout = styled.div`
  display: grid;
  grid-template-columns: 65rem 30rem;
  padding: 8rem;
  padding-bottom: 0;
`;
const BlogPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 80vw;
  margin: 4rem 1rem;

  & .active {
    background: rgba(136, 136, 136, 0.2);
  }
`;
const PaginateSpan = styled.span`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 45px;
  color: rgb(136, 136, 136);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgb(136, 136, 136);
  padding: 0.2rem 1.25rem;

  &:hover {
    color: rgb(0, 122, 92);
  }
`;

function Blog() {
  return (
    <>
      <BannerCommon heading="Blogs" />

      <StyledBlogLayout>
        <div>
          <BlogPost image="/single_blog_1.jpg" />
          <BlogPost image="/single_blog_2.jpg" />
          <BlogPost image="/single_blog_3.jpg" />
          <BlogPost image="/single_blog_4.jpg" />
          <BlogPost image="/single_blog_5.jpg" />
        </div>
        <BlogSidebar />
      </StyledBlogLayout>
      <BlogPagination>
        <PaginateSpan>
          <FontAwesomeIcon icon={faChevronLeft} />
        </PaginateSpan>
        <PaginateSpan>1</PaginateSpan>
        <PaginateSpan className="active">2</PaginateSpan>
        <PaginateSpan>3</PaginateSpan>
        <PaginateSpan>
          <FontAwesomeIcon icon={faChevronRight} />
        </PaginateSpan>
      </BlogPagination>
    </>
  );
}

export default Blog;
