import React from 'react';

// Importando os styled components
import { 
    Container,
    DivL,
    Card, 
    MainText,
    Info,
    Dados,
    Line,
    EditButton,
    DeleteButton,
    DivButton,
    DivR,
    NewExamButtom,
    Div,
    DivTable,
    CardSup,
    CardInf,
    DadosTable,
    LineTable,
    InfoTable
} from "../patientsDetails/style"

export function PatientsDetails() {
    return(
        <Container>
            <DivL>
                <MainText>Perfil do Paciente</MainText>
                <Card>
                    <Info>Nome</Info>
                    <Dados>Rodrigo Silva</Dados>
                    <Line />
                    <Info>Idade</Info>
                    <Dados>18</Dados>
                    <Line />
                    <Info>Genêro</Info>
                    <Dados>Masculino</Dados>
                    <Line />
                    <Info>E-mail</Info>
                    <Dados>rodrigo.silva123@gmail.com</Dados>
                    <Line />
                    <Info>Telefone</Info>
                    <Dados>(91) 1234-5678</Dados>
                    <Line />
                    <Info>Sente dor?</Info>
                    <Dados>Sim</Dados>
                    <Line />
                    <DivButton>
                        <EditButton>Editar</EditButton>
                        <br/>
                        <DeleteButton>Deletar</DeleteButton>
                    </DivButton>
                </Card>
            </DivL>

            <DivR>
                <Div>
                    <MainText>Exames Realizados</MainText>
                    <NewExamButtom>Novo Exame</NewExamButtom>
                </Div>
                <CardSup>
                    <DivTable>
                        <DadosTable>Fisioterapeuta</DadosTable>
                        <DadosTable>Dia do Exame</DadosTable>
                        <DadosTable>Medição</DadosTable>
                    </DivTable>
                    <LineTable/>
                    <DivTable>
                        <InfoTable>Dr. John Dor</InfoTable>
                        <InfoTable>22/10/2021</InfoTable>
                        <InfoTable>300mm</InfoTable>
                    </DivTable>
                </CardSup>
                <br/>
                <CardInf />
            </DivR>
        </Container>
    );
}