import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { addCommentAC } from "./../redux/CommentsReducer";
import Button from "./styled/Button";
import styled from "styled-components";
import Title from "./styled/Title";

const Container = styled.div`
  padding: 48px 0;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.color};
  box-sizing: border-box;
  width: 445px;
  height: 38px;
  padding-left: 16px;
  outline: none;
`;

const BoxTextareaAutosize = styled.div`
  border-radius: 4px;
  border: 1px solid ${(props) => props.color};
  box-sizing: border-box;
  width: 920px;
  height: 120px;
  margin-top: 22px;
  resize: none;
  text-align: center;
  word-wrap: break-word;
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
  border: transparent;
  white-space: pre-wrap;
  width: 98%;
  height: 98%;
  resize: none;
  padding: 16px 0 0 6px;
  outline: none;
`;

const CommentsForm = ({ idDrink }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [color, setColor] = useState("#ced4da");

  const onSubmit = (data, e) => {
    dispatch(addCommentAC(idDrink, data, new Date()));
    e.target.reset();
  };

  return (
    <Container>
      <Title bottom="48">Leave a comment</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <Input
              placeholder="Author"
              {...register("name", { required: true })}
              onFocus={() => setColor("#9B51E0")}
              color={color}
            />
          </div>
          <BoxTextareaAutosize color={color}>
            <StyledTextareaAutosize
              placeholder="Write your comment here"
              {...register("comment", { required: true })}
              onFocus={() => setColor("#9B51E0")}
            />
          </BoxTextareaAutosize>
        </div>
        <div>
          <Button color="#7749F8" type="submit" top="23">
            Leave a Comment
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CommentsForm;
