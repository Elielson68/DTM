import React from "react";

import { Container, MainContent, Search, Table, UpperDiv } from "./styles";
import MenuBar from "../../components/MenuBar";

import SearchIcon from "../../assets/img/search_icon.png";

export default function Dashboard() {
  return (
    <>
      <MenuBar />
      <Container>
        <MainContent>
          <UpperDiv>
            <h2>Lista de Pacientes</h2>
            <Search>
              <input type="text" placeholder="Nome do paciente" />
              <img src={SearchIcon} alt="" />
            </Search>
          </UpperDiv>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>{" "}
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
              <tr>
                <td>Rodrigo silva</td>
                <td>18</td>
                <td>roodrigo@gmail.com</td>
              </tr>
            </tbody>
          </Table>
        </MainContent>
      </Container>
    </>
  );
}
