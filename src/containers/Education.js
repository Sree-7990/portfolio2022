import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #edecec;
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
  border-bottom: 2px solid #36abab;
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  @media (max-width: 955px) {
    margin: 30px auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const EduHeader = styled.div`
  display: flex;
`;

const EduContainer = styled.div`
  padding: 35px 10px;
  @media (max-width: 575px) {
    padding: 15px 10px;
  }
`;

const DescRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EduTitle = styled.div`
  font-family: "Kanit", sans-serif;
  font-size: 22px;
  color: ${(props) => props.theme.primary};

  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

const EduRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SelectorLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 1px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.secondary};
`;

const EduLabel = styled.div`
  font-family: "Kanit", sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme.secondary};
  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const EduDesc = styled.div`
  font-family: "Kanit", sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme.secondary};
  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const EduLocation = styled.img`
  width: 10px;
  margin-right: 10px;
  height: 10px;

  @media (max-width: 575px) {
    margin-right: 5px;
  }
`;

const EduLocationValue = styled.div`
  font-family: "Kanit", sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme.primary};
  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const Instituion = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Marks = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 15px;
  color: #1b6c2f;
  margin-left: 20px;
  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const EduDetails = (props) => {
  return (
    <Container ref={props.eduRef}>
      <SessionHeader data-aos-duration="2000" data-aos="flip-down">Education</SessionHeader>
      <Main>
        <Wrapper data-aos-duration="2000" data-aos="flip-down">
          <EduRow>
            <EduHeader>
              <EduTitle>School</EduTitle>
            </EduHeader>
          </EduRow>
          <SelectorLine data-aos-duration="1000" data-aos="flip-down" />
          <EduContainer>
            <DescRow>
              <EduLabel>Secondary School Leaving Examination</EduLabel>
              <EduLabel>
                Secured &nbsp;&nbsp;&nbsp;:
                <Marks>9.6 CGPA</Marks>
              </EduLabel>
            </DescRow>
            <DescRow>
              <EduDesc>Central Board of Secondary Education</EduDesc>
              <Instituion>
                <EduLocation src={process.env.PUBLIC_URL + "/img/icons/loc_pin.png"}></EduLocation>
                <EduLocationValue>Sree Sabari Central School</EduLocationValue>
              </Instituion>
            </DescRow>
          </EduContainer>
        </Wrapper>

        <Wrapper data-aos-duration="2000" data-aos="flip-down">
          <EduRow>
            <EduHeader>
              <EduTitle>Higher Secondary</EduTitle>
            </EduHeader>
          </EduRow>
          <SelectorLine data-aos-duration="1000" data-aos="flip-down" />
          <EduContainer>
            <DescRow>
              <EduLabel>Higher Secondary Examination</EduLabel>
              <EduLabel>
                Secured &nbsp;&nbsp;&nbsp;:
                <Marks>83%</Marks>
              </EduLabel>
            </DescRow>
            <DescRow>
              <EduDesc>Central Board of Secondary Education</EduDesc>
              <Instituion>
                <EduLocation src={process.env.PUBLIC_URL + "/img/icons/loc_pin.png"}></EduLocation>
                <EduLocationValue>Sree Sabari Central School</EduLocationValue>
              </Instituion>
            </DescRow>
          </EduContainer>
        </Wrapper>

        <Wrapper data-aos-duration="2000" data-aos="flip-down">
          <EduRow>
            <EduHeader>
              <EduTitle>Graduation</EduTitle>
            </EduHeader>
          </EduRow>
          <SelectorLine data-aos-duration="1000" data-aos="flip-down" />
          <EduContainer>
            <DescRow>
              <EduLabel>Bachelor of Technology</EduLabel>
              <EduLabel>
                Secured &nbsp;&nbsp;&nbsp;:
                <Marks>7.4 CGPA</Marks>
              </EduLabel>
            </DescRow>
            <DescRow>
              <EduDesc>Kerala University</EduDesc>
              <Instituion>
                <EduLocation src={process.env.PUBLIC_URL + "/img/icons/loc_pin.png"}></EduLocation>
                <EduLocationValue>
                  Sree Buddha College of Engineering
                </EduLocationValue>
              </Instituion>
            </DescRow>
          </EduContainer>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default EduDetails;
