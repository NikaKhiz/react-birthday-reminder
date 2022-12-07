import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
`;
const StyledImg = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: var(--light-shadow);
`;
const StyledParagraph = styled.p`
  margin-bottom: 0;
  color: var(--clr-grey-5);
  font-size: 0.875rem;
  @media screen and (min-width: 800px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;
const StyledHeading = styled.h4`
  margin-bottom: 0.35rem;
  font-size: 0.875rem;
  line-height: 1.25;
  @media screen and (min-width: 800px) {
    font-size: 1rem;
    line-height: 1;
  }
`;
const StyledDiv = styled.div``;

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <StyledArticle key={id}>
            <StyledImg src={image} alt={name} />
            <StyledDiv>
              <StyledHeading>{name}</StyledHeading>
              <StyledParagraph>{age} years</StyledParagraph>
            </StyledDiv>
          </StyledArticle>
        );
      })}
    </>
  );
};

export default List;
