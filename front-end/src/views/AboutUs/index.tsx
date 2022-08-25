import React from "react";
import MenuBar from "../../components/MenuBar";

import { 
  Container,
  Card
} from "./styles";

export default function AboutUs() {
  return (
    <>
      <MenuBar />
      <Container>
        <h1>Sobre Nós</h1>
        <Card>
          <p>Este projeto foi desenvolvido com o intuito de servir como uma alternativa avaliativa para tratamento e acompanhamento de pacientes sintomáticos de DTM (Disfunção Temporomandibular), utilizando um script em python para auxiliar o tratamento, junto de uma interface web para que os médicos possam ter acesso aos dados gerados por cada paciente.</p>
          <br/>
          <p>Plataforma desenvolvida por GETA</p>
          <p>(Grupo de Estudos de Tecnologia Assistiva)</p>
          <br/>
          <p>www.sitedogeta.com.br</p>
        </Card>
      </Container>
    </>
  );
}
