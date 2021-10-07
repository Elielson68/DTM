import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 125px;
  @media screen and (max-width: 1024px) {
    height: fit-content;
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
  @media screen and (max-width: 1920px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Exam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 70%;
  padding: 5% 0;
  h1 {
    text-align: center;
    margin: 0;
    margin-bottom: 5%;
    padding: 0;
    color: #fff;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 75%;
  height: 95%;
  background-color: #fff;
  border-radius: 16px;
  padding: 5%;
  @media screen and (max-width: 1920px) {
    width: 65%;
  }
  @media screen and (max-width: 1024px) {
    width: 85%;
  }
  @media screen and (max-width: 768px) {
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
    font-size: 200%;
    margin-bottom: 10px;
  }
  h3 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 200%;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1440px) {
    span {
      font-size: 100%;
    }
    h3 {
      font-size: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    span {
      font-size: 100%;
    }
    h3 {
      font-size: 100%;
    }
  }
  @media screen and (max-width: 1024px) {
    span {
      font-size: 150%;
    }
    h3 {
      font-size: 150%;
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
    font-size: 200%;
    margin-bottom: 10px;
  }
  span:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 200%;
    padding: 5%;
    width: 50%;
    height: 100%;
    padding: 10px;
    background-color: #009f93;
    border-radius: 16px;
    color: #fff;
  }
  @media screen and (max-width: 1440px) {
    span {
      font-size: 100%;
      &:last-child {
        font-size: 100%;
      }
    }
    h3 {
      font-size: 100%;
    }
  }

  @media screen and (max-width: 1200px) {
    span {
      font-size: 100%;
      &:last-child {
        font-size: 100%;
      }
    }
    h3 {
      font-size: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    span {
      font-size: 100%;
      &:last-child {
        font-size: 100%;
      }
    }

    h3 {
      font-size: 100%;
    }
  }
`;

export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 5% 0;
  @media screen and (max-width: 1920px) {
    flex-direction: row;
  }

  @media screen and (max-width: 1024px) {
    height: 70%;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Picture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 16px;
  padding: 0 5%;
  width: 50%;
  padding: 1.5%;
  img {
    border-radius: 16px;
    width: 100%;
  }

  h1 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 200%;
    color: #000;
    &:nth-child(3) {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 1920px) {
    width: 45%;
    h1 {
      font-size: 200%;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 45%;
  }

  @media screen and (max-width: 768px) {
    width: 40%;
  }

  @media screen and (max-width: 425px) {
    width: 70%;
    &:first-child{
      margin-bottom: 10%;
    }
  }
`;
