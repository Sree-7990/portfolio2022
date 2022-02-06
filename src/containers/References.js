import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Aos from "aos";


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

const ReferContainer = styled.div`
  width: 100%;
`;

const ReferWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const ReferLogoContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid #36abab;
  border-right-color: #edecec;
  border-top-color: #edecec;
  transition: all 2s;
`;

const ReferLogo = styled.img`
  width: 90px;
  border-radius: 150px;
  align-self: center;

  transition: all 2s;
`;

const CompanyName = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.primary};
  font-size: 14px;
`;

const ReferDesc = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.secondary};
  font-size: 14px;
  white-space: wrap;
`;

const Mail = styled.div`
  font-family: "Kanit", sans-serif;
  text-decoration: underline;
  color: ${(props) => props.theme.secondary};
  font-size: 14px;
`;

const Phone = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.secondary};
  text-decoration: underline;
  font-size: 14px;
`;

const Bold = styled.div`
  font-weight: bold;
  font-family: "Kanit", sans-serif;
`;

const Role = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${(props) => props.theme.secondary};
  font-size: 14px;
`;

const ReferCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 10px;
  justify-content: center;
`;

const ReferRow = styled.div`
  width: max-content;
  display: flex;
  margin: 20px 0;
`;

const ReferRowRight = styled.div`
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

const References = (props) => {
  return (
    <Container ref={props.referRef}>
      <SessionHeader data-aos-duration="2000" data-aos="flip-down">
        References
      </SessionHeader>
      <Main>
        <ReferRow
          data-aos-duration="1000"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="ref-wrapper"
        >
          <ReferLogoContainer className="ref-container">
            <ReferLogo src={process.env.PUBLIC_URL + "/img/people/Eldhose.png"} className="ref-logo" />
          </ReferLogoContainer>
          <ReferCenter>
            <CompanyName>Eldhose TJ</CompanyName>
            <Role>IT Analyst at Tata Consultancy Services</Role>
            <Mail>testmail@gmail.com</Mail>
            <Phone>+91 96334 48618</Phone>
          </ReferCenter>
        </ReferRow>
        <ReferRowRight
          style={{ marginRight: -40 }}
          data-aos-duration="1000"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          className="ref-wrapper"
        >
          <ReferLogoContainer className="ref-container">
            <ReferLogo src={process.env.PUBLIC_URL + "/img/people/Jackson.jpeg"} className="ref-logo" />
          </ReferLogoContainer>
          <ReferCenter>
            <CompanyName>Jackson EJ</CompanyName>
            <Role>Senior Technical lead at Keyvalue Systems</Role>
            <Mail>jaxon.ej@gmail.com</Mail>
            <Phone>+91 99956 32211</Phone>
          </ReferCenter>
        </ReferRowRight>
        <ReferRow
          data-aos-duration="1000"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="ref-wrapper"
        >
          <ReferLogoContainer className="ref-container">
            <ReferLogo src={process.env.PUBLIC_URL + "/img/people/Aswathy.png"} className="ref-logo" />
          </ReferLogoContainer>
          <ReferCenter>
            <CompanyName>Aswathy S Mohanan</CompanyName>
            <Role>Senior Technical lead at Keyvalue Systems</Role>
            <Mail>aswathy.s@keyvalue.systems</Mail>
            <Phone>+91 98951 11075</Phone>
          </ReferCenter>
        </ReferRow>
      </Main>
    </Container>
  );
};

export default References;
