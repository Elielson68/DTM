import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12%;
  border-bottom: 1vh solid #fff;
  background-color: #ba324f;
  position: sticky;
  .menu-icon {
    display: none;
  }

  @media (max-width: 1024px) {
    border-bottom: none;
    .menu-icon {
      display: inline;
      &:hover {
        cursor: pointer;
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
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
  @media (max-width: 1440px) {
    padding: 0 5%;
    max-width: 100%;
  }
`;

export const Logo = styled.div`
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
  justify-content: center;
  width: 55%;
  height: 100%;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 5%;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.5em;
      text-align: center;
      transition: all 0.2s linear;
      &:hover {
        font-weight: bold;
        border-bottom: 2px solid #fff;
      }
    }
  }

  @media (max-width: 1024px) {
    margin-right: 10%;
    float: none;
    text-align: left;
    border: none;
    span {
      margin: 0 3%;
      display: none;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 100%;
  height: 30%;
  position: fixed;
  background-color: #ba324f;
  margin-top: -2.5vh;
  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: fit-content;
    margin: 0 5% 0 0;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    transition: all 0.2s linear;
    &:hover {
      font-weight: bold;
      border-bottom: 2px solid #fff;
    }
  }
`;
