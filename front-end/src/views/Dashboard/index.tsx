import React from "react";

import { Container, MainContent, UpperDiv, Search, Table } from "./styles";

import SearchIcon from "../../assets/img/search_icon.png";

export default function Dashboard() {
  return (
    <>
      <Container>
        <MainContent>
          <UpperDiv>
            <h2>Lista de Pacientes</h2>
            <Search>
              <input type="text" placeholder="Nome do paciente" />
              <span>
                <img src={SearchIcon} alt="" />
              </span>
            </Search>
          </UpperDiv>
          <Table>
            <thead className="table-header">
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>

              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            </tbody>
          </Table>
        </MainContent>
      </Container>
    </>
  );
}
