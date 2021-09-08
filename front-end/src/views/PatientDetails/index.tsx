import React from "react";

// Importando os styled components
import { 
  Container,
  DivLeft,
  Card, 
  MainText,
  Info,
  Data,
  Line,
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
  InfoTable
} from "../PatientDetails/styles"

const PatientDetails: React.FC = () => (
  <Container>
            <DivLeft>
                <MainText>Perfil do Paciente</MainText>
                <Card>
                    <Info>Nome</Info>
                    <Data>Rodrigo Silva</Data>
                    <Line />
                    <Info>Idade</Info>
                    <Data>18</Data>
                    <Line />
                    <Info>Genêro</Info>
                    <Data>Masculino</Data>
                    <Line />
                    <Info>E-mail</Info>
                    <Data>rodrigo.silva123@gmail.com</Data>
                    <Line />
                    <Info>Telefone</Info>
                    <Data>(91) 1234-5678</Data>
                    <Line />
                    <Info>Sente dor?</Info>
                    <Data>Sim</Data>
                    <Line />
                    <DivButton>
                        <EditButton>Editar</EditButton>
                        <br/>
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
                    <LineTable/>
                    <DivTable>
                        <InfoTable>Dr. John Dor</InfoTable>
                        <InfoTable>22/10/2021</InfoTable>
                        <InfoTable>300mm</InfoTable>
                    </DivTable>
                </CardTop>
                <br/>
                <CardBottom />
            </DivRight>
        </Container>
);

export default PatientDetails;
