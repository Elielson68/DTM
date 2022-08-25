import styled from "styled-components";

export const Modal = styled.div`
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
  width: 30%;
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
  height: 300px;
  justify-content: center;
  
  input:last-child{
    margin-bottom: 0px;
  }
`;

export const Label = styled.span`
  font-size: 1rem;
  align-self: flex-start;
  margin-left: 10%;
  margin-bottom: 1%;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  transition: linear 0.2s;
  margin-bottom: 10px;
  :focus {
    outline: 0;
    border-bottom-color: #f1ae02;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
`;

export const ConfirmationButton = styled.button`
  width: 40%;
  height: 40px;
  color: #ffffff;
  background-color: #009f93;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 16px;
  margin: 20px 0px;
  transition: linear 0.2s;

  &:hover {
    background-color: #015c56;
    cursor: pointer;
    width: 45%;
  }
`;

export const CancelButton = styled.button`
  width: 40%;
  height: 40px;
  color: #ffffff;
  background-color: #ff0000;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 16px;
  margin: 20px 0px;
  transition: linear 0.2s;

  &:hover {
    background-color: #a40000;
    cursor: pointer;
    width: 45%;
  }
`;
