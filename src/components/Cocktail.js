import React, { useEffect } from "react";
import Wrapper from "./styled/Wrapper";
import styled from "styled-components";
import CommentsBlock from "./CommentsBlock";
import Title from "./styled/Title";
import { setCocktailThunk } from "./../redux/CategoryReduser";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const Header = styled.div`
  display: flex;
  margin-top: 48px;
`;

const ImageBox = styled.div`
  width: 445px;
  height: 445px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Column = styled.div`
  margin-left: 30px;
`;
const Row = styled.div`
  display: flex;
  margin-top: 13px;
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
  margin-left: 24px;
`;

const TitleSmall = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #333333;
  margin-top: 48px;
`;

const List = styled.ul`
  //   list-style: none;
  font-size: 16px;
  line-height: 28px;
  color: #828282;
  margin-left: 26px;
  margin-top: 16px;
`;

const Li = styled.li`
  margin: 0px 0px 9px -1px;
`;

const Instructions = styled.div``;

const Text = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  margin-top: 12px;
`;

const Cocktail = () => {
  let { idDrink } = useParams();

  useEffect(() => {
    dispatch(setCocktailThunk(idDrink));
  }, []);

  const dispatch = useDispatch();
  const cocktail = useSelector((state) => state.category.cocktail);

  return (
    <Wrapper>
      <Header>
        <ImageBox>
          <Image src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
        </ImageBox>
        <Column>
          <Title>{cocktail.strDrink}</Title>
          <Row>
            <Alcohol>{cocktail.strAlcoholic}</Alcohol>
            <Glass>{cocktail.strGlass}</Glass>
          </Row>
          <TitleSmall> Ingredients</TitleSmall>
          <List>
            {cocktail.strIngredients &&
              cocktail.strIngredients.map((item, index) =>
                item ? <Li key={index}>{item}</Li> : null
              )}
          </List>
        </Column>
      </Header>
      <Instructions>
        <TitleSmall> How to make it</TitleSmall>
        <Text> {cocktail.strInstructions} </Text>
      </Instructions>
      <CommentsBlock idDrink={cocktail.idDrink} />
    </Wrapper>
  );
};

export default Cocktail;
