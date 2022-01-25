import React, { useEffect, useState } from "react";
import styled from "styled-components";

import atom from "../img/icons/atom.png";
import html_5 from "../img/icons/html_5.png";
import css from "../img/icons/css.png";
import science from "../img/icons/science.png";
import typescript from "../img/icons/typescript.png";
import js from "../img/icons/js.png";

import photoshop from "../img/icons/photoshop.png";
import illustrator from "../img/icons/illustrator.png";
import xd from "../img/icons/xd.png";
import premiere from "../img/icons/premiere.png";
import indesign from "../img/icons/indesign.png";
import figma from "../img/icons/figma.png";

import Aos from "aos";
import HSBar from "react-horizontal-stacked-bar-chart";

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  height: 100vh;
  @media (max-width: 955px) {
    margin: 200px auto;
  }

  @media (max-width: 570px) {
    margin: 100px auto;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 116px 0;
  max-width: 955px;
  padding: 0 41px;
  margin: 0 auto;
  // background-color: red;
`;

const SessionHeader = styled.div`
  display: flex;
  height: max-content;
  width: max-content;
  margin: 30px auto;
  margin: 30px auto;
  padding-bottom: 10px;
  align-self: center;
  justify-content: center;
  font-family: "Kanit", sans-serif;
  text-align: left;
  border-bottom: 2px solid #2a4848;
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  @media (max-width: 955px) {
    margin: 30px auto;
  }
`;

const SkillContainer = styled.div`
  width: 100%;
`;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const SkillDetails = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.secondary};
  font-size: 14px;
`;
const SkillChart = styled.div``;
const SkillCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const SkillLogo = styled.img`
  width: 25px;
  height: 25px;
`;

const SkillBox = styled.div`
  width: 50%;
  display: grid;
`;

const SkillRow = styled.div`
  width: 100%;
  display: flex;
`;

const Skills = (props) => {
  return (
    <Container ref={props.skillRef}>
      <SessionHeader data-aos-duration="2000" data-aos="flip-down">
        Skills
      </SessionHeader>
      <Main>
        <SkillContainer>
          <SkillRow>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="flip-down">
                  <SkillLogo src={atom}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>React Js</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 70,
                        color: "#2a4848",
                      },
                      {
                        name: "",
                        value: 30,
                        color: "#cdd3e5",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>

            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="flip-down">
                  <SkillLogo src={js}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>JavaScript</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 70,
                        color: "#2a4848",
                      },
                      {
                        name: "",
                        value: 30,
                        color: "#cdd3e5",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
          </SkillRow>
          <SkillRow>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="flip-down">
                  <SkillLogo src={html_5}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>HTML 5</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 90,
                        color: "#2a4848",
                      },
                      {
                        name: "",
                        value: 10,
                        color: "#cdd3e5",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="flip-down">
                  <SkillLogo src={css}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>CSS</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 90,
                        color: "#2a4848",
                      },
                      {
                        name: "",
                        value: 10,
                        color: "#cdd3e5",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
          </SkillRow>
          <SkillRow>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="flip-down">
                  <SkillLogo src={typescript}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>TypeScript</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 60,
                        color: "#2a4848",
                      },
                      {
                        name: "",
                        value: 40,
                        color: "#cdd3e5",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="flip-down">
                  <SkillLogo src={science}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>React Native</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 40,
                        color: "#2a4848",
                      },
                      {
                        name: "",
                        value: 60,
                        color: "#cdd3e5",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
          </SkillRow>
        </SkillContainer>
      </Main>
      <SessionHeader>Tools</SessionHeader>
      <Main>
        <SkillContainer>
          <SkillRow>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="fade-right">
                  <SkillLogo src={photoshop}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="flip-down"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>Adobe Photoshop</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 70,
                        color: "#41e9e6",
                      },
                      {
                        name: "",
                        value: 30,
                        color: "#7580a3",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>

            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="fade-right">
                  <SkillLogo src={illustrator}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="flip-down"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>Adobe Illustrator</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 70,
                        color: "#41e9e6",
                      },
                      {
                        name: "",
                        value: 30,
                        color: "#7580a3",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
          </SkillRow>
          <SkillRow>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="fade-right">
                  <SkillLogo src={xd}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="flip-down"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>Adobe Xd</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 90,
                        color: "#41e9e6",
                      },
                      {
                        name: "",
                        value: 10,
                        color: "#7580a3",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="fade-right">
                  <SkillLogo src={premiere}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="flip-down"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>Premiere Pro</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 50,
                        color: "#41e9e6",
                      },
                      {
                        name: "",
                        value: 10,
                        color: "#7580a3",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
          </SkillRow>
          <SkillRow>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="fade-right">
                  <SkillLogo src={figma}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="flip-down"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>Figma</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 60,
                        color: "#41e9e6",
                      },
                      {
                        name: "",
                        value: 40,
                        color: "#7580a3",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
            <SkillBox>
              <SkillWrapper>
                <SkillCenter data-aos-duration="2000" data-aos="fade-right">
                  <SkillLogo src={indesign}></SkillLogo>
                </SkillCenter>
                <SkillChart
                  data-aos-duration="500"
                  data-aos="flip-down"
                  data-aos-easing="ease-in-sine"
                >
                  <SkillDetails>InDesign</SkillDetails>
                  <HSBar
                    height={5}
                    outlineWidth={0.0}
                    outlineColor="black"
                    id="new_id"
                    fontColor="rgb(50,20,100)"
                    data={[
                      {
                        name: "",
                        value: 40,
                        color: "#41e9e6",
                      },
                      {
                        name: "",
                        value: 60,
                        color: "#7580a3",
                      },
                    ]}
                    onClick={(e) => console.log(e.bar)}
                  />
                </SkillChart>
              </SkillWrapper>
            </SkillBox>
          </SkillRow>
        </SkillContainer>
      </Main>
    </Container>
  );
};

export default Skills;
