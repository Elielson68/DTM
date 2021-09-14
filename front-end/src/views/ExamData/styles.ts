import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 13vh);
  background-color: #102e4a;
`;

export const MainContent = styled(Container)`
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
`;

export const Exam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
  width: 50%;

  h2 {
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
  justify-content: space-between;
  width: 60%;
  height: 90%;
  background-color: #fff;
  border-radius: 16px;
  padding: 5% 7.5%;
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
    background-color: #009F93;
    border-radius: 16px;
    color: #fff;
  }
`;

export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  color: #fff;
  margin-top: 5%;
  align-self: flex-start;

  h2{
    &:first-child{
      margin: 0;
      margin-bottom: 5%;
    }
    margin-bottom: 5%;
  }
`;

export const OpenMouthPic = styled(Data)`
  flex-direction: row;
  justify-content: center;
  width: 70%;
  height: 50%;
  padding: 2.5%;

  img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }
`;

export const ClosedMouthPic = styled(OpenMouthPic)``;
