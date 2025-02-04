import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import blogs from "../../components/Blogs/BlogsData";

const Blog1 = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let history = useHistory();

  const [blogIcon, setBlogIcon] = useState("");
  const [blogIconAlt, setBlogIconAlt] = useState("");
  const [blogName, setBlogName] = useState("");
  const [blogDetails, setBlogDetails] = useState([]);

  // console.log(props.location.pathname);

  const findBlog = (path) => {
    for (let i = 0; i < blogs.length; i++) {
      if (props.location.pathname === blogs[i].blogPath) {
        setBlogIcon(blogs[i].blogIcon);
        setBlogIconAlt(blogs[i].blogIconAlt);
        setBlogName(blogs[i].blogName);
        setBlogDetails(blogs[i].blogDetails);
      }
    }
  };

  useEffect(() => {
    findBlog();
    console.log(blogDetails);
  }, []);

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <NavbarBackground /> */}

      <BlogContainer>
        <BlogCard>
          <BlogImageWrapper>
            <BlogImage src={blogIcon} alt={blogIconAlt} />
          </BlogImageWrapper>

          <BlogContent>
            <BlogH1>{blogName}</BlogH1>

            {blogDetails?.map((aPara, i) => (
              <BlogP key={i}> {aPara} </BlogP>
            ))}
          </BlogContent>

          {/* <Link to="/#blog">
              <BlogMoreSection />
            </Link> */}
        </BlogCard>
      </BlogContainer>

      <BlogButton onClick={() => history.goBack()}>Back</BlogButton>

      <Footer />
    </>
  );
};

// const NavbarBackground = styled.div`
//   position: relative;
//   height: 100px;
//   background: #000;
// `;

const BlogButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  background: #1f4382;
  color: #fff;
  border: none;
  margin: 20px 50px 50px 50px;
  cursor: pointer;
`;

const BlogContainer = styled.div`
  position: relative;
  margin: 20px 50px 50px 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin: 20px 20px 50px 20px;
  }
`;

const BlogCard = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    border: 20px solid transparent;
    border-top: 20px solid #0f4cbd;
    border-right: 20px solid #0f4cbd;
  }
`;

const BlogImageWrapper = styled.div`
  margin-bottom: 10px;
`;

const BlogImage = styled.img`
  height: 450px;
  width: 100%;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 375px) {
    height: 200px;
  }
`;

const BlogContent = styled.div`
  overflow: hidden;
`;

const BlogH1 = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 2.5rem;
  color: #042157;
  margin: 20px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const BlogP = styled.p`
  margin: 20px;
  font-weight: 300;
  color: #042157;
`;

export default Blog1;
