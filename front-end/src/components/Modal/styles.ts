import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3 linear;
`;

export const ModalContent = styled.div`
  width: 40%;
  background-color: #fff;
  border-radius: 16px;

  @media (max-width: 1000px) {
    width: 85%;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: #102e4a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 13px 13px 0 0;
  h4 {
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  justify-content: center;
`;