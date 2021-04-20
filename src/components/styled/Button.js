import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => props.color};
  margin-top: ${(props) => props.top}px;
  margin-right: ${(props) => props.right}px;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 600;
  padding: 10px 10px 10px 16px;
  display: block;
  outline: none;
  cursor: pointer;
`;

const Button = ({ color, children, top, right, onClick }) => {
  return (
    <StyledButton color={color} top={top} right={right} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
