import React from "react";
// Importando do Chart.JS
import { Line } from 'react-chartjs-2';
// Importando o Menu Navbar
import MenuBar from "../../components/MenuBar";
// Importando os styled components
import {
  Container,
  DivLeft,
  Card,
  MainText,
  Info,
  Data,
  Linha,
  EditButton,
  DeleteButton,
  DivButton,
  DivRight,
  NewExamButtom,
  Div,
  DivTable,
  CardTop,
  CardBottom,
  DataTable,
  LineTable,
  InfoTable,
  DivChart
} from "../PatientDetails/styles";

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Distância',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

export default function PatientDetails() {
  return (
    <>
      <MenuBar />
      <Container>
        <DivLeft>
          <MainText>Perfil do Paciente</MainText>
          <Card>
            <Info>Nome</Info>
            <Data>Rodrigo Silva</Data>
            <Linha />
            <Info>Idade</Info>
            <Data>18</Data>
            <Linha />
            <Info>Genêro</Info>
            <Data>Masculino</Data>
            <Linha />
            <Info>E-mail</Info>
            <Data>rodrigo.silva123@gmail.com</Data>
            <Linha />
            <Info>Telefone</Info>
            <Data>(91) 1234-5678</Data>
            <Linha />
            <Info>Sente dor?</Info>
            <Data>Sim</Data>
            <Linha />
            <br />
            <DivButton>
              <EditButton>Editar</EditButton>
              <br />
              <DeleteButton>Deletar</DeleteButton>
            </DivButton>
          </Card>
        </DivLeft>

        <DivRight>
          <Div>
            <MainText>Exames Realizados</MainText>
            <NewExamButtom>Novo Exame</NewExamButtom>
          </Div>
          <CardTop>
            <DivTable>
              <DataTable>Fisioterapeuta</DataTable>
              <DataTable>Dia do Exame</DataTable>
              <DataTable>Medição</DataTable>
            </DivTable>
            <LineTable />
            <DivTable>
              <InfoTable>Dr. John Dor</InfoTable>
              <InfoTable>22/10/2021</InfoTable>
              <InfoTable>300mm</InfoTable>
            </DivTable>
          </CardTop>
          <br />
          <CardBottom>
            <DivChart>
              <Line data={ data }/>
            </DivChart>
          </CardBottom>
        </DivRight>
      </Container>
    </>
  );
}
