import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 15%);
`;

export const MainContent = styled(Container)`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 5%;
  border: 1px solid yellow;
`;

export const Exam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 40%;
  border: 1px solid white;
  h1 {
    margin: 0;
    margin-bottom: 5%;
    padding: 0;
    color: #fff;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 0 5%;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  span {
    font-size: 0.75rem;
    margin-bottom: 2%;
  }
  h3 {
    margin: 0;
    margin-bottom: 2%;
  }
`;

export const MeasurementInfo = styled(TextInfo)`
  span:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    margin-bottom: 2%;
    width: 40%;
    height: 25px;
    background-color: #009f93;
    border-radius: 16px;
    color: #fff;
  }
`;

export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 40%;
  color: #fff;
  overflow-y: visible;
  border: 1px solid green;
  h2 {
    &:first-child {
      margin: 0;
      margin-bottom: 2.5%;
    }
    margin: 2.5% 0;
  }
`;

export const OpenMouthPic = styled(Data)`
  flex-direction: row;
  justify-content: center;
  width: 80%;
  height: 50%;
  padding: 2.5%;
  img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }
`;

export const ClosedMouthPic = styled(OpenMouthPic)``;
