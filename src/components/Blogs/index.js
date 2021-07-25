import React, { useState } from "react";
import Icon1 from "../../assets/images/22north_Blog_1.jpg";
import Icon2 from "../../assets/images/22north_Blog_2.jpg";
import Icon3 from "../../assets/images/22north_Blog_3.jpg";
import Icon4 from "../../assets/images/22north_Blog_1.jpg";
import styled from "styled-components";

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);
  const [blogs, setBlogs] = useState([
    {
      blogIcon: Icon1,
      blogIconAlt: "22north blogs - Startup Guidance",
      blogName: "How to stand out from the Crowd",
      blogId: "Guidance",
      blogSelected: false,
      blogDetails:
        // "<p><em>“There are two ways of making yourself stand out from the crowd. One is by having a job, so big you can go home before the bell rings if you want to. The other is by finding; so much to do that you must stay after the others have gone. The one who enjoys the former once took advantage of the latter”</em>                                        <em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>-Henry Ford</strong></em></p>",
        "“There are two ways of making yourself stand out from the crowd. One is by having a job, so big you can go home before the bell rings if you want to. The other is by finding; so much to do that you must stay after the others have gone. The one who enjoys the former once took advantage of the latter”                                        <strong>-Henry Ford</strong>",
    },
    {
      blogIcon: Icon2,
      blogIconAlt: "22north blogs Funding",
      blogName: "Mistakes a Start-Up Should Avoid Doing",
      blogId: "Funding",
      blogSelected: false,
      blogDetails:
        "So, if you are starting a business, you’d surely like to tick off the below-mentioned checklists before taking the plunge.  After all, business is a complex venture that very few can pull off. Hence, there are certain common mistakes that one needs to avoid to see efforts come to fruition.",
    },
    {
      blogIcon: Icon3,
      blogIconAlt: "22north blogs Office Space",
      blogName: "Insights to Grow Your Business",
      blogId: "OfficeSpace",
      blogSelected: false,
      blogDetails:
        "Starting a business can be scary, because huge risks are involved in it. But the sheer thought of owning a business and see it growing is a thrilling experience. However, there’s a big difference between starting a business and being able to turn it into a long-term success. So, what are the judicious ways to grow a startup? Let’s delve a little deeper.",
    },
    {
      blogIcon: Icon4,
      blogIconAlt: "22north blogs Business Development",
      blogName: "Understanding the Potential of Tech Start-Ups in India",
      blogId: "BusinessDevelopment",
      blogSelected: false,
      blogDetails:
        "The technology sector has registered an exponential growth over the past decade with social media, remote communications, cloud computing, cyber security, e-commerce and robotics taking the spotlight. The COVID-19 pandemic and the resultant social distancing norms have augmented the utility of digitization even more. Per NASSCOM1, mega global tech trends are currently associated with Augmented Reality, Smart Cards, Urbanization Solution for Public, Smart Security, Smart is the New Green, Smart City Initiative India, Social Trends – Gen Y Geo Socialization, Automation, Future of Mobility and so on. While big tech behemoths have a strong foothold in the above-said areas, start-ups too are well-positioned to take the solid advantage of this boom.",
    },
  ]);

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
                <BlogsP> {blog.blogDetails} </BlogsP>
              </BlogsContent>

              <BlogsMoreSection
                name={blog.blogId}
                onClick={handleShowMoreClick}
                className={activeBlog === blog.blogId ? "showless" : ""}
              />
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

const BlogsMoreSection = styled.a`
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
