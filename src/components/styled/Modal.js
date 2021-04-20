import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteCommentAC } from "../../redux/CommentsReducer";
import Button from "./Button";

const ModalBox = styled.div`
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  opacity: ${(props) => (props.active ? "1" : "0")};
  pointer-events: ${(props) => props.active && "all"};
`;

const ModalContent = styled.div`
  border-radius: 12px;
  border: 1px solid #ced4da;
  background-color: #fff;
  width: 500px;
  transform: scale(0.95);
  transition: 0.4s all;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  transform: ${(props) => props.active && "scale(1)"};
  padding: 16px;
`;

const ModalClose = styled.div`
  top: 20px;
  right: 22px;
  cursor: pointer;
  z-index: 100;
  position: fixed;
  width: 10px;
  height: 10px;
`;

const Row = styled.div`
  display: flex;
  margin-top: 47px;
  justify-content: flex-end;
`;

const Modal = ({ active, setActive, children, idComment, idDrink }) => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    setActive(false);
    dispatch(deleteCommentAC(idDrink, idComment));
  };

  return (
    <ModalBox active={active} onClick={() => setActive(false)}>
      <ModalContent active={active} onClick={(e) => e.stopPropagation()}>
        <ModalClose onClick={() => setActive(false)}> &times;</ModalClose>
        {children}
        <Row>
          <Button color="#6C757D" right="24" onClick={() => setActive(false)}>
            Cancel
          </Button>
          <Button color="#7749F8" onClick={onButtonClick}>
            Delete
          </Button>
        </Row>
      </ModalContent>
    </ModalBox>
  );
};

export default Modal;
