import React from "react";

import styled from "styled-components";

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #152536;
  text-decoration: none;
  margin-bottom: ${(props) => props.bottom}px;
`;

const Title = ({ children, bottom }) => {
  return <StyledTitle bottom={bottom}>{children}</StyledTitle>;
};

export default Title;
