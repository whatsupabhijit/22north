import React, { useState } from "react";
import styled from "styled-components";
import { ImLocation2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { GoMailRead } from "react-icons/go";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import * as emailjs from "emailjs-com";
import ServiceModal from "../Modal/ServiceModal";
import Icon1 from "../../assets/images/22north_Entrepremeur_Selection_Process.png";

const Contact = () => {
  const width100 = false;
  const inputSubmit = false;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject] = useState("Incoming Query!");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(" ");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    // console.log("form submitted with below details");
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(message);

    e.preventDefault();
    const templateParams = {
      from_name: firstName + " " + lastName,
      from_email: email,
      to_name: "TheBoxStep",
      subject,
      message: message,
    };

    emailjs.init("user_XQam9iVgn3VFzriotMWJg");

    // TODO:
    // 1. once submitted, show some message to the user
    // 2. if unsuccesful, show error message
    // 3. Use ReCaptcha to avoid spamming
    // 4. use the api to collect email ids
    emailjs
      .send(
        "service_eu713wt",
        "template_bw04l23",
        templateParams,
        "user_XQam9iVgn3VFzriotMWJg"
      )
      .then(
        (res) => {
          console.log("SUCCESS!", res.status, res.text);
        },
        (e) => {
          console.log("FAILED!! ", e);
        }
      );

    resetForm();

    e.target.reset();
  };

  const [registerDetails] = useState([
    {
      serviceIcon: Icon1,
      serviceIconAlt: "22north Services - How To Register",
      serviceName: "Get Selected and Grow with Us",
      serviceId: "HowToRegister",
      serviceSelected: false,
      serviceDetails: [
        "22 Degrees North is keen to invest in early stage businesses which have potential to create disproportionate value. The members of the Network are leaders in the Entrepreneurial Eco-System as they have had strong operational experience as CEOs or a background of creating new and successful ventures. They share a passion to create, scale and value for start -up ventures.",
        "So, if you have an entrepreneurial acumen and you have a promising technical idea which has a solid foundation and you belong to eastern India then 22 Degrees is a right place for you. Not only you will be assisted with a venture capital, you will get a complimentary management team which allows you to scale and nurture your idea into an established business.",
        "If you are looking for an investment partner and are interested in getting strategical guidance, please send in a presentation comprising of 5-7 Slides (with a max file size of 5MB) covering the basic aspects of the proposition and the business plan. The presentation should comprise of your academic qualification, your business and growth plan along with a glimpse of your technical idea. Reach us on info@22north, we will be eager to help your business grow leaps and bounds.",
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const handleShowMoreClick = (e) => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <ServiceModal
        showModal={showModal}
        setShowModal={setShowModal}
        service={registerDetails}
      />
      <ContactSection id="contact">
        <ContactContainer>
          {/*  */}
          {/* 1. Information */}
          <ContactInfo>
            <ContactInfoH2>Reach Us At</ContactInfoH2>
            <ContactInfoUl>
              {/* 3. Address */}
              <ContactInfoLi>
                <IconContext.Provider value={{ color: "#fff", size: 30 }}>
                  <ContactInfoSpan>
                    <ImLocation2 />
                  </ContactInfoSpan>
                </IconContext.Provider>
                <ContactInfoDetail>
                  San Jose
                  <ContactInfoDetailBreak />
                  CA 95124, USA
                </ContactInfoDetail>
              </ContactInfoLi>

              {/* 1. Mail */}
              <ContactInfoLi>
                <IconContext.Provider value={{ color: "#fff", size: 30 }}>
                  <ContactInfoSpan>
                    <GoMailRead />
                  </ContactInfoSpan>
                </IconContext.Provider>
                <ContactInfoDetail>info@22north.us</ContactInfoDetail>
              </ContactInfoLi>

              {/* 2. Contact */}
              <ContactInfoLi>
                <IconContext.Provider value={{ color: "#fff", size: 30 }}>
                  <ContactInfoSpan>
                    <FiPhoneCall />
                  </ContactInfoSpan>
                </IconContext.Provider>
                <ContactInfoDetail>+1 408-850-0455</ContactInfoDetail>
              </ContactInfoLi>
            </ContactInfoUl>

            <SocialMedia>
              <SocialMediaWrap>
                <SocialIcons>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>

                  <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                    <FaTwitter />
                  </SocialIconLink>

                  <SocialIconLink
                    href="//www.linkedin.com/company/22northus"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </ContactInfo>

          {/* 2. Form */}
          <form onSubmit={handleSubmit}>
            <ContactForm>
              <ContactFormH2>Write To Us</ContactFormH2>
              <ContactFormBox>
                <ContactFormInputBox
                  width100={width100}
                  inputSubmit={inputSubmit}
                >
                  <ContactFormInput
                    type="text"
                    required
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  ></ContactFormInput>
                  <ContactFormSpan>First Name</ContactFormSpan>
                </ContactFormInputBox>
                <ContactFormInputBox
                  width100={width100}
                  inputSubmit={inputSubmit}
                >
                  <ContactFormInput
                    type="text"
                    required
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                  ></ContactFormInput>
                  <ContactFormSpan>Last Name</ContactFormSpan>
                </ContactFormInputBox>
                <ContactFormInputBox
                  width100={width100}
                  inputSubmit={inputSubmit}
                >
                  <ContactFormInput
                    type="email"
                    required
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></ContactFormInput>
                  <ContactFormSpan>Email Address</ContactFormSpan>
                </ContactFormInputBox>
                <ContactFormInputBox
                  width100={width100}
                  inputSubmit={inputSubmit}
                >
                  <ContactFormInput type="text" required></ContactFormInput>
                  <ContactFormSpan> Mobile Number</ContactFormSpan>
                </ContactFormInputBox>
                <ContactFormInputBox
                  width100={!width100}
                  inputSubmit={inputSubmit}
                >
                  <ContactFormTextArea
                    required
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></ContactFormTextArea>
                  <ContactFormSpan>Write your message here...</ContactFormSpan>
                </ContactFormInputBox>
                <ContactFormInputBox
                  width100={!width100}
                  inputSubmit={!inputSubmit}
                >
                  <ContactFormSubmit
                    type="submit"
                    value="Submit"
                  ></ContactFormSubmit>

                  <ContactHowToRegister onClick={handleShowMoreClick}>
                    How To Register?
                  </ContactHowToRegister>
                </ContactFormInputBox>
              </ContactFormBox>
            </ContactForm>
          </form>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

const ContactSection = styled.section`
  background: #121a40;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background: #c9d9f5;
  }

  @media (max-width: 991px) {
    background: #74757a;
    &:before {
      display: none;
    }
  }
`;

const ContactContainer = styled.div`
  position: relative;
  min-width: 1100px;
  min-height: 550px;
  display: flex;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 90%;
    min-width: auto;
    margin: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ContactInfo = styled.div`
  position: absolute;
  top: 40px;
  width: 350px;
  height: calc(100% - 80px);
  background: #105fe8;
  z-index: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);

  @media (max-width: 1200px) {
    top: 0;
    height: 550px;
    position: relative;
    box-shadow: none;
  }

  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    /* flex-direction: row; */
  }

  @media (max-width: 600px) {
    padding: 25px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactForm = styled.div`
  position: absolute;
  padding: 70px 50px;
  padding-left: 250px;
  margin-left: 150px;
  width: calc(100% - 150px);
  height: 100%;
  background: #fff;
  /* background: #62529c; */
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    position: relative;
    width: calc(100%);
    padding-left: 0;
    margin-left: 0;
    padding: 40px;
    height: 550px;
    box-shadow: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 991px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 600px) {
    padding: 25px;
  }
`;

const ContactInfoH2 = styled.h2`
  color: #fff;
  font-size: 40px;
  font-weight: 500;
`;

const ContactInfoUl = styled.ul`
  position: relative;
  margin: 20px 0;
`;

const ContactInfoLi = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  margin: 20px 0;
  cursor: pointer;
  align-items: center;
  color: #fff;
  font-size: 20px;
`;

const ContactInfoSpan = styled.span`
  /* width: 30px; */
  min-width: 30px;
`;

const ContactInfoDetail = styled.span`
  margin-left: 15px;
  font-size: 16px;
  line-height: 18px;
`;

const ContactInfoDetailBreak = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

//
//
// Form Styles
//
//
const ContactFormH2 = styled.h2`
  color: #0f3959;
  font-size: 24px;
  font-weight: 500;
`;

const ContactFormBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
`;

const ContactFormInputBox = styled.div`
  position: relative;
  margin-bottom: 35px;
  width: ${({ width100 }) => (width100 ? "100%" : "47%")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ContactFormInput = styled.input`
  width: 100%;
  resize: none;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 300;
  color: #333;
  border: none;
  outline: none;
  border-bottom: 1px solid #777;

  &:focus ~ span,
  &:valid ~ span {
    transform: translateY(-20px);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #095a55;
  }
`;

const ContactFormSubmit = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`
  position: relative;
  cursor: pointer;
  background: #095a55;
  color: #fff;
  border: none;
  width: 100px;
  max-width: 150px;
  padding: 12px;
  border-radius: 10%;

  &:hover {
    background: #0d948b;
  }
`;

const ContactFormTextArea = styled.textarea`
  width: 100%;
  resize: none;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 300;
  color: #333;
  border: none;
  outline: none;
  border-bottom: 1px solid #777;

  &:focus ~ span,
  &:valid ~ span {
    transform: translateY(-20px);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    color: #095a55;
  }

  height: 120px;
`;

const ContactFormSpan = styled.span`
  position: absolute;
  left: 0;
  padding: 5px 0;

  pointer-events: none;
  font-size: 18px;
  font-weight: 300;
  transition: 0.3s;
`;

const ContactHowToRegister = styled.a`
  position: relative;
  padding: 10px 15px;
  display: inline-flex;

  cursor: pointer;
  text-transform: uppercase;
  color: #428df5;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 14px;

  text-decoration: underline;
  margin-left: calc(100% - 310px);
`;

//
//
// Social Media Styles
//
//
const SocialMedia = styled.section`
  margin-top: 25px;
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export default Contact;
