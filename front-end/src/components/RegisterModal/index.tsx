import React from "react";
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
} from "../registerModal/styles";

interface ModalInterface {
  show: boolean;
  onClose: () => boolean;
}

export default function RegisterModal({ show, onClose }: ModalInterface) {
  if (!show) {
    return null;
  }
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h4>Cadastro</h4>
        </ModalHeader>
        <ModalBody>
          <Label>Nome</Label>
          <Input placeholder="jhon doe" />
          <Label>E-mail</Label>
          <Input placeholder="exemplo@mail.com" type="email" />
          <Label>Matricula</Label>
          <Input placeholder="12345678" type="number" />
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <ConfirmationButton>Confirmar</ConfirmationButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
