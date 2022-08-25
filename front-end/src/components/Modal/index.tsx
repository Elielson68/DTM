import React from "react";
import {
  Container,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "./styles";

interface ModalInterface {
  show: boolean;
  onClose: () => boolean;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  show,
  onClose,
  title,
  children,
}: ModalInterface) {
  if (!show) {
    return null;
  }
  return (
    <Container onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h4>{title}</h4>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Container>
  );
}
