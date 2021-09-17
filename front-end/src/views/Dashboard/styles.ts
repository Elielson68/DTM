import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 12vh);
  background-color: #102e4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid yellow;

  @media (max-width: 768px) {
    height: calc(100vh - 13vh);
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 75%;
  height: 100%;
  padding: 2.5% 5%;
  border: 1px solid green;
  @media (max-width: 1440px) {
    padding: 5% 5%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const UpperDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  margin-bottom: 2.5%;
  h2 {
    font-size: 2em;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5em;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  height: 50%;
  border-bottom: 1px solid #fff;
  transition: border-bottom 0.3s ease-in;

  input {
    width: 100%;
    outline: none;
    border: none;
    margin: none;
    background: none;
    padding: 10px 20px;
    color: #fff;
    &::placeholder {
      font-size: 1.25em;
      color: #b1b1b1;
    }
  }

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }
  &:focus-within {
    border-bottom: 2px solid #f1ae02;
  }

  @media (max-width: 768px) {
    width: 75%;
    input {
      padding: 10px 5px 10px 0;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #fff;
  border-radius: 16px;
  margin: 0;
  padding: 0;

  thead {
    tr {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      padding: 2%;
      color: #000;
      font-weight: bold;
      font-size: 2.5em;
      text-align: center;
    }
  }

  tbody {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 16px;
    overflow-y: scroll;

    tr {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      padding: 2.5% 0;
      font-size: 2em;
      border-top: 1px solid lightgray;
      transition: all 0.2s linear;

      &:hover {
        background-color: lightgray;
        cursor: pointer;
      }

      td {
        width: 33.33%;
      }
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 16px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #96a4ff;
      border-radius: 16px;
    }
  }

  @media (max-width: 1920px) {
    tbody {
      tr {
        font-size: 1.5em;
      }
    }
  }

  @media (max-width: 1024px) {
    thead {
      tr {
        font-size: 2em;
      }
    }
    tbody {
      tr {
        font-size: 1em;
      }
    }
  }

  @media (max-width: 768px) {
    height: 70%;
    thead {
      tr {
        font-size: 1.5em;
      }
    }
    tbody {
      tr {
        font-size: 0.7em;
        padding: 5% 0;
      }
    }
  }
`;
