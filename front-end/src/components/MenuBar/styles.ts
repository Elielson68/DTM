import styled from "styled-components";

export const Logo = styled.div`
  margin-left: 5%;
  h1 {
    color: #ffffff;
    margin: 0;
    padding: 0;
  }

  p {
    color: #ffffff;
    margin: 0;
    padding: 0;
    margin: -5px 0 0 20px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-right: 5%;
  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 1%;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    transition: all 0.2s linear;
    &:hover {
      font-weight: bold;
      border-bottom: 2px solid #fff;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 40vh;
  background-color: #ba324f;
  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: fit-content;
    margin: 0 5% 0 0;
    &:last-child{
      margin: 0 5% 5% 0;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 12vh;
  position: sticky;
  border-bottom: 1vh solid #fff;
  background-color: #ba324f;

  span:last-child {
    margin-right: 5%;
    display: none;
    img {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 671px) {
    border-bottom: none;
    span:last-child {
      display: inline;
    }
    ${Options} {
      margin-right: 10%;
      float: none;
      display: block;
      text-align: left;
      span {
        margin: 0 3%;
        display: none;
      }
    }
  }
`;
