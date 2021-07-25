import React, { useState } from "react";
import { Link } from "react-router-dom";

import blogdata from "./BlogsData";
import styled from "styled-components";

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);
  const [blogs, setBlogs] = useState(blogdata);

  const handleShowMoreClick = (e) => {
    for (let i = 0; i < blogs.length; i++) {
      if (blogs[i].blogId === e.target.name) {
        // Toggle the selected status
        blogs[i].blogSelected = !blogs[i].blogSelected;

        // Update the blogs
        setBlogs(blogs);

        // Set the active blog if the selected status is truthy
        blogs[i].blogSelected
          ? setActiveBlog(e.target.name)
          : setActiveBlog(null);
      }
    }
  };

  return (
    <>
      <BlogContainer id="blogs">
        <BlogsH1>Blogs</BlogsH1>

        <BlogsContainerWrapper>
          {blogs?.map((blog, i) => (
            <BlogsCard
              key={i}
              className={activeBlog === blog.blogId ? "showless" : ""}
            >
              <BlogsIconWrapper>
                <BlogsIcon src={blog.blogIcon} alt={blog.blogIconAlt} />
              </BlogsIconWrapper>

              <BlogsContent
                className={activeBlog === blog.blogId ? "showless" : ""}
              >
                <BlogsH3>
                  {blog.blogName} {blog.blogSelected}
                </BlogsH3>
                <BlogsP> {blog.blogDetails[0]} </BlogsP>
              </BlogsContent>

              <Link to={blog.blogPath}>
                <BlogsMoreSection
                  name={blog.blogId}
                  // onClick={handleShowMoreClick}
                  className={activeBlog === blog.blogId ? "showless" : ""}
                />
              </Link>
            </BlogsCard>
          ))}
        </BlogsContainerWrapper>
      </BlogContainer>
    </>
  );
};

const BlogContainer = styled.div`
  min-height: 700px;
`;

const BlogsH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.5rem;
  color: #042157;
  margin-top: 65px;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const BlogsContainerWrapper = styled.div`
  width: auto;
  position: relative;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BlogsCard = styled.div`
  position: relative;
  width: 300px;
  margin: 20px;

  /* background: #c4d5f5; */

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

  &.showless {
    &:before {
      border-top: 20px solid #ff3b7e;
      border-right: 20px solid #ff3b7e;
    }
  }

  &:hover {
    transform: scale(1.09);
    transition: all 0.2s ease-in-out;
  }
`;

const BlogsIconWrapper = styled.div`
  margin-bottom: 10px;
`;

const BlogsIcon = styled.img`
  max-width: 300px;
  height: 200px;
`;

const BlogsContent = styled.div`
  position: relative;
  height: 150px;
  padding: 20px;
  overflow: hidden;

  &:before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    /* background: linear-gradient(transparent, #c4d5f5); */
    background: linear-gradient(transparent, #fff);
  }

  &.showless {
    height: auto;

    &:before {
      display: none;
    }
  }
`;

const BlogsH3 = styled.h3`
  color: #042157;
  font-size: 1.4em;
  font-weight: 600;
  margin-bottom: 10px;
`;

const BlogsP = styled.p`
  font-weight: 300;
  color: #042157;
`;

const BlogsMoreSection = styled.button`
  position: relative;
  padding: 10px 15px;
  background: #0f4cbd;
  margin: 15px;

  display: inline-block;

  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 14px;

  &:before {
    content: "Read More";
  }

  &.showless {
    background: #ff3b7e;

    &:before {
      content: "Read Less";
    }
  }
`;

export default Blogs;
