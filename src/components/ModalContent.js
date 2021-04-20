import React from "react";
import styled from "styled-components";

const TitleSmall = styled.div`
  font-weight: 600;
`;
const Text = styled.div`
  line-height: 26px;
  color: #6c757d;
  margin-top: 68px;
`;

const ModalContent = () => {
  return (
    <div>
      <TitleSmall> Confirm Deletion</TitleSmall>
      <Text>Are you sure you want to delete a comment?</Text>
    </div>
  );
};

export default ModalContent;
