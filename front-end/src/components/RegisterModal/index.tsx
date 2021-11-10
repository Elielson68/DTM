/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from "react";
import api from "../../services/api";
import {
  CancelButton,
  ConfirmationButton,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./styles";

interface ModalInterface {
  show: boolean;
  onClose: () => boolean;
}

export default function RegisterModal({ show, onClose }: ModalInterface) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [registeredNumber, setRegisteredNumber] = React.useState("");

  if (!show) {
    return null;
  }
  function handleRegister() {
    const data = {
      name,
      password,
      email,
      registeredNumber,
    };
    api.post("api/user", data).then(() => {
      alert("Cadastro realizado com sucesso");
    });
  }
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h4>Cadastro</h4>
        </ModalHeader>
        <ModalBody>
          <Label>Nome</Label>
          <Input
            placeholder="jhon doe"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label>E-mail</Label>
          <Input
            placeholder="exemplo@mail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Password</Label>
          <Input
            placeholder="**************"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label>Matricula</Label>
          <Input
            placeholder="12345678"
            type="number"
            value={registeredNumber}
            onChange={(e) => setRegisteredNumber(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <ConfirmationButton onClick={handleRegister}>
            Confirmar
          </ConfirmationButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
