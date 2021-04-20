import React, { useState } from "react";
import styled from "styled-components";
import deleteButton from "./../images/delete.jpg";
import ModalContent from "./ModalContent";
import Modal from "./styled/Modal";

const Container = styled.div`
  margin-top: 43px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #828282;
  margin-top: 20px;
`;

const User = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;

const Date = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  margin-left: 18px;
`;

const Row = styled.div`
  display: flex;
`;

const ButtonDelete = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
`;
const Img = styled.img`
  display: block;
  border-radius: 50%;
  overflow: hidden;
`;
const Comment = ({ text, name, idDrink, idComment, data }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Container>
      <Header>
        <Row>
          <User>User {name}</User>
          <Date>{data}</Date>
        </Row>
        <ButtonDelete onClick={() => setModalActive(true)}>
          <Img src={deleteButton} alt="deleteButton" />
        </ButtonDelete>
      </Header>
      <Text>{text}</Text>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        idDrink={idDrink}
        idComment={idComment}
      >
        <ModalContent setActive={setModalActive} />
      </Modal>
    </Container>
  );
};

export default Comment;
