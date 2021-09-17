import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: calc(100vh - 12vh);
  @media (max-width: 768px) {
    height: fit-content;
    padding: 10% 0;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 75%;
  height: 100%;

  @media (max-width: 1920px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: fit-content;
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
  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  height: 80%;
  background-color: #fff;
  border-radius: 16px;
  padding: 5%;
  @media (max-width: 1440px) {
    width: 80%;
    height: 80%;
  }
  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 375px) {
    width: 80%;
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
  margin-bottom: 10px;
  span {
    font-size: 2em;
    margin-bottom: 10px;
  }
  h3 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 2em;
  }

  &:last-of-type{
    margin-bottom: 0;
  }
  @media (max-width: 375px) {
    span {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.5em;
    }
  }
`;

export const MeasurementInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  span {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  span:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    padding: 5%;
    width: 50%;
    height: 100%;
    padding: 10px;
    background-color: #009f93;
    border-radius: 16px;
    color: #fff;
  }

  @media (max-width: 375px) {
    span {
      font-size: 1.5em;
      &:last-child{
        font-size: 1.5em;
      }
    }
  }
`;

export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  h1 {
    margin: 0;
    margin-bottom: 2.5%;
    &:nth-child(3) {
      margin-top: 2.5%;
    }
  }
`;

export const Picture = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  padding: 0 5%;
  flex-direction: row;
  justify-content: center;
  width: 60%;
  height: 40%;
  padding: 1%;
  img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1920px) {
    width: 40%;
  }
  @media (max-width: 1440px) {
    width: 60%;
  }
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 375px) {
    width: 80%;
  }
`;
