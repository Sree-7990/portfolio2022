import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Aos from "aos";
import ReactDOM from "react-dom";
import Donut from "react-donut";

/////////////////////////////////////////////////////////

import tcs from "../img/icons/tcs.png";
import freel from "../img/icons/freel.png";
import keyvalue from "../img/icons/keyvalue.png";

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  background-color: #fff;
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

const OtherContainer = styled.div`
  width: 100%;
`;

const OtherWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const OtherChart = styled.div``;

const OtherLogo = styled.img`
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

const OtherDesc = styled.div`
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

const OtherCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 30px;
  justify-content: center;
`;

const OtherRow = styled.div`
  width: max-content;
  display: flex;
  margin: 20px 0;
`;

const OtherRowRight = styled.div`
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

const dataMock = [
  { title: "One", value: 10, color: "#E38627" },
  { title: "Two", value: 15, color: "#C13C37" },
  { title: "Three", value: 20, color: "#6A2135" },
];

const Others = (props) => {
  return (
    <Container ref={props.othRef}>
      <SessionHeader data-aos-duration="2000" data-aos="flip-down">
        When Not Working
      </SessionHeader>
      <Main>                                 
      </Main>
    </Container>
  );
};

export default Others;
