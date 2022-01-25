import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Aos from "aos";

/////////////////////////////////////////////////////////

import tcs from "../img/icons/tcs.png";
import freel from "../img/icons/freel.png";
import keyvalue from "../img/icons/keyvalue.png";

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  background-color: #edecec;
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
  border-bottom: 2px solid #36abab;
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  @media (max-width: 955px) {
    margin: 30px auto;
  }
`;

const WorkContainer = styled.div`
  width: 100%;
`;

const WorkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const WorkChart = styled.div``;

const WorkLogo = styled.img`
  width: 150px;
  padding-right: 30px;
  border-right: 2px solid #7580a3;
  align-self: center;
`;

const CompanyName = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.primary};
  font-size: 14px;
`;

const WorkDesc = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.secondary};
  font-size: 14px;
  white-space: wrap;
`;

const Duration = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.secondary};
  font-size: 14px;
`;

const Bold = styled.div`
  font-weight: bold;
  font-family: "Kanit", sans-serif;
`;

const Role = styled.div`
  font-family: "Kanit", sans-serif;
  color: #327a43;
  font-size: 14px;
`;

const WorkCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 30px;
  justify-content: center;
`;

const WorkRow = styled.div`
  width: max-content;
  display: flex;
  margin: 20px 0;
`;


const WorkRowRight = styled.div`
  width: max-content;
  display: flex;
  margin: 20px 0;
  align-self: flex-end;
  @media (max-width: 655px) {
    margin: 30px auto;
    align-self: center;
  }
`;

const DescLines = styled.div``;

const Work = (props) => {
  return (
    <Container ref={props.workRef}>
      <SessionHeader data-aos-duration="2000" data-aos="flip-down">Work Experiences</SessionHeader>
      <Main>
        <WorkRow
          data-aos-duration="1000"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <WorkLogo src={tcs} />
          <WorkCenter>
            <CompanyName>Tata Consultancy Services</CompanyName>
            <Role>Junior UI Engineer</Role>
            <Duration>2017 - 2019</Duration>
            <WorkDesc>Internal web app for Kuwait Bank (Angular 6)</WorkDesc>
          </WorkCenter>
        </WorkRow>
        <WorkRowRight
          style={{ marginRight: -40 }}
          data-aos-duration="1000"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
        >
          <WorkLogo style={{ height: 115 }} src={keyvalue} />
          <WorkCenter>
            <CompanyName>Keyvalue Software Systems</CompanyName>
            <Role>UI Engineer</Role>
            <Duration>2019 - 2022</Duration>
            <WorkDesc>
              <DescLines>- Banking Mobile App development (React Native)</DescLines>
              <DescLines>- E-commerce Web App (ReactJS)</DescLines>
              <DescLines>- Community Web App (React and TS)</DescLines>
            </WorkDesc>
          </WorkCenter>
        </WorkRowRight>
        <WorkRow
          data-aos-duration="1000"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <WorkLogo style={{ height: 115 }} src={freel} />
          <WorkCenter>
            <CompanyName>Freelance Projects</CompanyName>
            <WorkDesc>
              <DescLines>- Converting existing pages responsive</DescLines>
              <DescLines>- Designing and delivering responsive custom components</DescLines>
              <DescLines>- UX component designs</DescLines>
              <DescLines>- Branding Works, Events Designs</DescLines>
            </WorkDesc>
          </WorkCenter>
        </WorkRow>
      </Main>
    </Container>
  );
};

export default Work;
