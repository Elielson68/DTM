import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 13vh);
  background-color: #102e4a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid red;
  width: 80%;
  height: 80%;
`;

export const UpperDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  border: 1px solid white;
  margin-bottom: 3%;

  h2 {
    color: #ffffff;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: fit-content;
  border-bottom: 1px solid white;

  input {
    outline: none;
    margin: none;
    padding: 2%;
    background: none;
  }

  span {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16px;

  thead {
    color: #000;
    font-weight: bold;
    font-size: 23px;
    display: flex;
    padding: 2%;
    text-align: center;
    tr {
      display: flex;
      width: 100%;
      th {
        width: 33.33%;
      }
    }
  }

  tbody{
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    max-height: 560px;
    tr{
      cursor: pointer;
      transition: background-color 250ms ease-in-out;
      display: flex;
      width: 100%;
      margin: 2% 0;
      td{
        width: 33.33%;
      }
    }
  }
`;
