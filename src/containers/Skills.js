import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/atom.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/js.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/html_5.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/css.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL +  "/img/icons/typescript.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/science.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/photoshop.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/illustrator.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/xd.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/premiere.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/figma.png"}></SkillLogo>
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
                  <SkillLogo src={process.env.PUBLIC_URL + "/img/icons/indesign.png"}></SkillLogo>
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
