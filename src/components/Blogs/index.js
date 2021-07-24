import React, { useState } from "react";
import Icon1 from "../../assets/images/22north_services_Guidance.svg";
import Icon2 from "../../assets/images/22north_services_Funding.svg";
import Icon3 from "../../assets/images/22north_services_OfficeSpace.svg";
import Icon4 from "../../assets/images/22north_services_Business_Development.svg";
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
        "We help you fly by building the wings for you. We believe in empowering women and supporting their ventures. We aim to make our socio-economic structure a balanced one where women are at par with their men counterparts and contribute equally to our economy. Our moto would be to guide entrepreneurs (preference would be given to women entrepreneurs) to venture into demanding sectors, adapt to upcoming technologies, incubate path-breaking business ideas, introduce them to different policies and schemes, help them build a support network, guidance for the right business structure, helping them in protecting the intellectual properties, getting business loans and get them started. If your start-up is selected by our start-up development programme, we guide you through the bumpy road of entrepreneurship and prevent you from taking self-damaging decisions.",
    },
    {
      blogIcon: Icon2,
      blogIconAlt: "22north blogs Funding",
      blogName: "Mistakes a Start-Up Should Avoid Doing",
      blogId: "Funding",
      blogSelected: false,
      blogDetails:
        "Don’t stop dreaming because of lack of funds, we keep your dreams alive, if we find them realistically achievable. We fund start-ups (with preference for female owned) which focuses on innovative business ideas, serving multiple sectors and adapts to upcoming market trends. Start-ups which embrace path-breaking technology initiatives, stands out among their competitors and are backed by potential team-members are considered to be eligible to receive funding. The applicant’s business plan should reflect business concept, strategy, plan-of-action, short term goals, long term goals, overall business growth plan and background of your management team We select and fund start-ups based on the following characteristics: Innovative business ideas Latest Technology adapter or enabler Proven track-record of serving customers Market valuation Potential growth model Scalable business model Potential Market Team credentials.",
    },
    {
      blogIcon: Icon3,
      blogIconAlt: "22north blogs Office Space",
      blogName: "Insights to Grow Your Business",
      blogId: "OfficeSpace",
      blogSelected: false,
      blogDetails:
        "We provide ambient, shared office space in the technological hub of Kolkata. We don’t charge rent for the office space you are using, instead we consider that as our investment for letting you succeed. We know the importance of operating in the midst of your customers, and from a place which your prospective employees would find convenient to reach. Getting an office space in the most sought after location, eats up your budget in the gestation period. Instead start from a shared office space, where you might meet some of your prospective clients and partners. While we take care of your operating space, you can invest in growing your business and churning your innovative business ideas. The office space comes with a shared meeting room, from where you can crack some of your very first deals.",
    },
    {
      blogIcon: Icon4,
      blogIconAlt: "22north blogs Business Development",
      blogName: "Understanding the Potential of Tech Start-Ups in India",
      blogId: "BusinessDevelopment",
      blogSelected: false,
      blogDetails:
        "Our business development partner will take care of your business development, while you focus on the R&D. We help you establish digitally, create and launch your website, maintain your social media handles, manage your SEO rating, carry out marketing campaigns and even take care of customer relationship management. Our Bus Dev partner specializes in techno-marketing and lead closure. Strategic marketing campaigns and email outreach programs through them lead to successful closure of sweet deals. We help you grow your business and guide you to stand out in a competitive market. Start-ups also get to post their expertise among numerous others in B2B Linking Platform and get matching requirements accordingly.",
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
  min-height: 800px;
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
  align-items: center;
  flex-wrap: wrap;
`;

const BlogsCard = styled.div`
  position: relative;
  width: 300px;
  padding: 20px;
  margin: 20px;

  background: #c4d5f5;

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
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

const BlogsIconWrapper = styled.div`
  margin-bottom: 10px;
`;

const BlogsIcon = styled.img`
  max-width: 250px;
  height: 200px;
`;

const BlogsContent = styled.div`
  position: relative;
  height: 150px;
  overflow: hidden;

  &:before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(transparent, #c4d5f5);
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
  margin-top: 15px;
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
