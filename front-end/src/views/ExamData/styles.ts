import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: calc(100vh - 16vh);
  padding: 2.5% 10%;

  @media (max-width: 1440px) {
    height: calc(100vh - 15vh);
    padding: 2.5%;
  }

  @media (max-width: 768px) {
    height: fit-content;
    flex-wrap: wrap;
    padding: 5% 2.5%;
  }
`;

export const Exam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  h1 {
    text-align: center;
    margin: 0;
    margin-bottom: 5%;
    padding: 0;
    color: #fff;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    width: 75%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    h1 {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    height: fit-content;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  height: 75%;
  background-color: #fff;
  border-radius: 16px;
  padding: 0 5%;

  @media (max-width: 1440px) {
    width: 70%;
    height: 70%;
  }

  @media (max-width: 1024px) {
    padding: 0 5%;
    width: 80%;
    height: 80%;
  }

  @media (max-height: 540px) {
    width: 60%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 550px;
  }

  @media (max-width: 425px) {
    width: 95%;
    height: 500px;
  }
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
    font-size: 1rem;
    margin-bottom: 5px;
  }
  h3 {
    margin: 0;
    margin-bottom: 5px;
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
  width: 100%;
  color: #fff;
  overflow-y: visible;
  text-align: center;
  overflow-y: visible;
  h1 {
    &:first-child {
      margin: 0;
      margin-bottom: 2.5%;
    }
    margin: 2.5% 0;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 768px) {
    padding-top: 5%;
  }
`;

export const Picture = styled(Data)`
  flex-direction: row;
  justify-content: center;
  width: 45%;
  height: 45%;
  padding: 2%;
  img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1440px) {
    width: 50%;
    height: 40%;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-height: 540px) {
    width: 60%;
  }
`;
