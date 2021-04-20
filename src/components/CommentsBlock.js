import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import Title from "./styled/Title";
import CommentsForm from "./CommentsForm";

const Container = styled.div`
  margin-top: 47px;
`;
const Box = styled.div`
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  padding: 48px 0;
`;
const NoComments = styled.div`
  margin-top: 30px;
`;
const CommentsBlock = ({ idDrink }) => {
  const comments = useSelector((state) =>
    state.comments.comments.find((item) => item.id === idDrink)
  );

  return (
    <Container>
      <Box>
        <Title>Comments:</Title>
        {!comments || comments.comments.length === 0 ? (
          <NoComments>...</NoComments>
        ) : (
          comments.comments.map((item, index) => (
            <Comment
              key={index}
              text={item.comment}
              name={item.name}
              idDrink={idDrink}
              idComment={item.id}
              data={item.date}
            />
          ))
        )}
      </Box>
      <CommentsForm idDrink={idDrink} />
    </Container>
  );
};

export default CommentsBlock;
