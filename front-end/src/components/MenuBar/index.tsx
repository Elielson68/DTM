/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Container, Logo, Options, MobileMenu } from "./styles";
import MenuIcon from "../../assets/img/menu-icon.png";

export default function MenuBar() {
  const [show, setShow] = React.useState(false);
  function handleResize() {
    if (window.innerWidth > 670) {
      setShow(false);
    }
  }

  window.addEventListener("resize", handleResize);

  return (
    <>
      <Container>
        <Logo>
          <h1>DTM</h1>
          <p>evaluation</p>
        </Logo>
        <Options>
          <span>
            <a href="/dashboard">Pacientes</a>
          </span>
          <span>
            <a href="/register-patient">Resgistrar Paciente</a>
          </span>
          <span>
            <a href="/edit-professional">Editar Perfil</a>
          </span>
          <span>
            <a href="/about-us">Sobre Nós</a>
          </span>
          <span>
            <a href="/">Sair</a>
          </span>
        </Options>
        <span onClick={() => setShow(!show)}>
          <img src={MenuIcon} alt="" />
        </span>
      </Container>

      {show && (
        <MobileMenu>
          <span>
            <a href="/dashboard">Pacientes</a>
          </span>
          <span>
            <a href="/register-patient">Resgistrar Paciente</a>
          </span>
          <span>
            <a href="/edit-professional">Editar Perfil</a>
          </span>
          <span>
            <a href="/about-us">Sobre Nós</a>
          </span>
          <span>
            <a href="/">Sair</a>
          </span>
        </MobileMenu>
      )}
    </>
  );
}
