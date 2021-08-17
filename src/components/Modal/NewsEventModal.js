import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const NewsEventModal = ({ showModal, setShowModal, newsevent }) => {
  console.log("hellow");
  console.log(newsevent[0].NewsEventDetails);

  const animation = useSpring({
    config: {
      duration: 10,
    },
    opacity: showModal ? 1 : 0,
  });

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);

  return (
    <>
      {showModal ? (
        <animated.div style={animation}>
          <Background ref={modalRef} onClick={closeModal}>
            <ModalWrapper showModal={showModal}>
              <ModalImg
                src={newsevent[0].NewsEventIcon}
                alt={newsevent[0].NewsEventIconAlt}
              />
              <ModalContent>
                <h3> {newsevent[0].NewsEventName} </h3>

                {newsevent[0].NewsEventDetails.map((detail, i) => (
                  <p key={i}> {detail} </p>
                ))}
              </ModalContent>
              <ModalCloseButton
                aria-label="Close Modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </Background>
        </animated.div>
      ) : null}
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;

  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: 90%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  align-items: center;
  grid-template-areas: "col1 col2";

  position: relative;
  z-index: 9999;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 1fr auto;
    grid-template-areas: "col1 col1" "col2 col2"; */
  }
`;

const ModalImg = styled.img`
  /* grid-area: col1; */
  width: 100%;
  height: 100%;

  border-radius: 10px 0 0 10px;
  background: #2a036e;

  @media (max-width: 768px) {
    height: 35%;
  }
`;

const ModalContent = styled.div`
  /* grid-area: col2; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding-left: 25px;
  padding-right: 25px;

  height: 600px;
  overflow-y: scroll;

  h1 {
    @media (max-width: 768px) {
      font-size: 25px;
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

    @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const ModalCloseButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 9999;

  @media (max-width: 768px) {
    color: #fff;
  }
`;

export default NewsEventModal;
