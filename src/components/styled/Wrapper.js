import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding-bottom: ${(props) => props.paddingBottom}px;
`;

const Wrapper = ({ children, paddingBottom }) => {
  return (
    <StyledWrapper paddingBottom={paddingBottom}>{children}</StyledWrapper>
  );
};

export default Wrapper;
