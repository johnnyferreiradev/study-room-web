import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #0005;
  padding-top: 80px;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ModalContent = styled.div`
  opacity: 0;
  width: 100%;
  max-width: 700px;
  transition: all .5s;
`;

const ModalHeader = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background: #5C73F2;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    width: 34px;
    heigth: 32px;
    padding: 8px;
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;

    :hover {
      background: #5C73F2CC;
      cursor: pointer;
    }
  }
`;

const ModalBody = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
};
