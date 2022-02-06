import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "../components/MenuBar";
import EduDetails from "./Education";
import Skills from "./Skills";
import Work from "./Work";
import References from "./References";
import Others from "./Others";

const HomeContainer = styled.div`
  background-size: fill;
  background-position: center;
  width: 100%;
  height: 100vh;  
}
`;

const Box = styled.div`
  width: 50%;
  background-color: red;
  height: 350px;
  margin: 50px auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const HomeBody = styled.div`
  width: 100%;
`;
const Background1 = styled.img`
  min-width: 440px;
  width: 100%;
  font-family: Impact, fantasy;
  z-index: -1;
  pointer-events: none;
  @media (max-width: 955px) {
  }
  @media (max-width: 655px) {
  }
`;

const PortfolioLogo = styled.img`
  width: 80px;
`;

const Title = styled.div`
  font-family: "Kanit", sans-serif;
  white-space: nowrap;
  height: max-content;
  display: flex;
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
  @media (max-width: 955px) {
    width: max-content;
  }
  @media (max-width: 655px) {
    align-items: flex-start;
    display: grid;
  }
`;

const Name = styled.div`
  font-family: "Kanit", sans-serif;
  text-align: left;
  white-space: nowrap;
  height: max-content;
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
  @media (max-width: 955px) {
    max-width: 100%;
  }
  @media (max-width: 655px) {
    margin-top: -30px;
  }
`;

const Desc = styled.div`
  min-width: max-content;
  font-family: "Kanit", sans-serif;
  font-size: 19px;
  color: ${(props) => props.theme.secondary};
`;

const DescContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -15px;
  align-items: center;
  margin-right: 10px;
`;

const Personal = styled.div`
  font-size: 14px;
  margin: 13px 20px;
  color: gray;
`;

const Intro = styled.span`
  width: -webkit-fill-available;
  font-family: "Kanit", sans-serif;
  text-align: left;
  font-size: 4rem;
  margin-right: 20px;
  color: ${(props) => props.theme.secondary};
`;

const Location = styled.img`
  width: 15px;
  margin-left: 25px;
  height: max-content;
`;

const LocationName = styled.span`
  font-size: 19px;
  margin-left: 10px;
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.secondary};
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 131px);
  max-width: 955px;
  margin: 0 auto;
  @media (max-width: 955px) {
    display: grid;
    margin: 0 auto;
  }
  @media (max-width: 655px) {
    margin: 0 auto;
  }
`;

const Left = styled.div`
  width: max-content;
  margin-left: 50px;
  margin-bottom: 100px;
  margin-right: 40;
  margin: "0 40px 100px 40px";
  zindex: 2;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 955px) {
    align-items: center;
    justify-self: center;
    width: 100%;
    margin-left: 0px;
    height: 150px !important;
    text-align: center;
  }

  @media (max-width: 655px) {
    display: grid;
  }
`;
const Right = styled.div`
  display: flex;
  width: 50%;
  align-self: center;
  @media (max-width: 955px) {
    background-position: center;
    width: 85%;
    margin-top: -100px;
    margin-left: 70px;
    z-index: -1;
  }
  @media (max-width: 655px) {
    width: 100%;
    margin-left: 0px;
  }
`;
const RButtonContainer = styled.div``;

const ResumeButton = styled.div`
  width: 175px;
  height: 40px;
  z-index:10;
  border-radius: 50px;
  cursor: pointer;
  background-color: #fff;
  // position: fixed;
  // bottom: 35px;
  // right: 50px;
  display: flex;
  justify-content: center;
  // border: 2px solid #36abab;
  align-items: center;
  padding: 10px;
  transition: width 0.5s;
  overflow: hidden;
  &:hover {
    width: 175px;
  }
`;

const ScrollButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
  background-color: #fff;
  position: fixed;
  bottom: 50px;
  opacity: 0.8;
  right: 50px;
  display: flex;
  justify-content: center;
  // border: 2px solid #36abab;
  align-items: center;
  padding: 10px;
  transition: width 0.5s;
  overflow: hidden;
`;

const ScrollIcon = styled.img`
  width: 35px;
  transform: ${(props) => (props.atTop ? "" : "rotate(180deg)")};
  transition: all 1s;
`;

const ResumeIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ResumeTag = styled.div`
  margin-left: 10px;
  font-family: "Kanit", sans-serif;
  font-size: 13px;
  color: #7580a3;
  white-space: nowrap;
`;

const Login = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.onscroll = function () {
      setAtTop(window.pageYOffset === 0);
    };
  }, []);

  const [expandResume, setExpandResume] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const myRef = useRef(null);
  const eduRef = useRef(null);
  const skillRef = useRef(null);
  const workRef = useRef(null);
  const referRef = useRef(null);
  const othRef = useRef(null);
  const scrollToSection = (page) => {
    if (page === "home") myRef.current.scrollIntoView();
    else if (page === "edu") eduRef.current.scrollIntoView();
    else if (page === "skill") skillRef.current.scrollIntoView();
    else if (page === "work") workRef.current.scrollIntoView();
  };

  return (
    <HomeContainer ref={myRef}>
      <ScrollButton onClick={() => window.scrollTo(0, 0)}>
        <ScrollIcon atTop={atTop} src={process.env.PUBLIC_URL + "/img/icons/scrollGif.gif"} />
      </ScrollButton>
      <HeaderContainer>
        <Personal>
          <PortfolioLogo src={process.env.PUBLIC_URL + "/img/icons/SVLogo.png"} />
        </Personal>
        <MenuBar scrollTo={(page) => scrollToSection(page)} />
      </HeaderContainer>
      <HomeBody>
        <Main>
          <Left>
            <Title
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <Intro>Hi, I m </Intro>
              <Name>Sreehari V</Name>
            </Title>
            <DescContainer>
              <Desc
                data-aos-duration="300"
                data-aos="zoom-out-up"
                data-aos-delay="1000"
              >
                UI Developer | UX designer
              </Desc>
              <LocationContainer
                data-aos-duration="500"
                data-aos-delay="1000"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
              >
                <Location src={process.env.PUBLIC_URL + "/img/icons/location.png"}></Location>
                <LocationName>Kochi</LocationName>
              </LocationContainer>{" "}
            </DescContainer>
            <RButtonContainer className="r-container">
              <a href="/resume.pdf" target="_blank">
                <ResumeButton
                  onMouseEnter={() => setExpandResume(true)}
                  onMouseLeave={() => setExpandResume(false)}
                >
                  <ResumeIcon className="r-icon" src={process.env.PUBLIC_URL + "/img/icons/SVLogo.png"} />
                  <ResumeTag expandResume={expandResume}>
                    Download Resume
                  </ResumeTag>
                </ResumeButton>
              </a>
            </RButtonContainer>
          </Left>
          <Right
            lg
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          >
            <Background1 src={process.env.PUBLIC_URL + "/img/bgimg/me.png"} />
          </Right>
        </Main>
      </HomeBody>
      <Work workRef={workRef} />
      <Skills skillRef={skillRef} />
      <EduDetails eduRef={eduRef} />
      <Others othRef={othRef} />
      <References referRef={referRef} />
    </HomeContainer>
  );
};

export default withRouter(Login);
