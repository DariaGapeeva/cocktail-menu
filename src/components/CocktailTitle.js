import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 222px;
  display: flex;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-top: 24px;
  padding: 24px;
`;

const Title = styled(NavLink)`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #152536;
  text-decoration: none;
`;

const ImageBox = styled.div`
  width: 174px;
  height: 174px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Column = styled.div`
  flex: 0 1 80%;
  margin-left: 24px;
  height: 76px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
`;

const Alcohol = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #68717a;
`;
const Glass = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #68717a;
  margin-left: 35px;
`;

const CocktailTitle = ({ title, address, picture, alcohol, glass }) => {
  return (
    <Container>
      <ImageBox>
        <NavLink to={`/${address}`}>
          {" "}
          <Image src={picture} alt={title} />
        </NavLink>
      </ImageBox>
      <Column>
        <Title to={`/${address}`}>{title}</Title>
        <Row>
          <Alcohol>{alcohol}</Alcohol>
          <Glass>{glass}</Glass>
        </Row>
      </Column>
    </Container>
  );
};

export default CocktailTitle;
