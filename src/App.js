import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "./Data";
import List from "./List";

const StyledSection = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
  width: 90vw;
  margin: 5rem 0;
  max-width: var(--fixed-width);
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
  box-shadow: var(--dark-shadow);
`;
const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledHeading = styled.h3`
  font-weight: normal;
  text-transform: none;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);

  @media screen and (min-width: 800px) {
    font-size: 1.75rem;
    line-height: 1;
  }
`;
const StyledButton = styled.button`
  color: var(--clr-white);
  display: block;
  width: 100%;
  border-color: transparent;
  background: var(--clr-pink);
  margin: 2rem auto 0 auto;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  letter-spacing: var(--spacing);
  border-radius: var(--radius);
  outline: 1px solid rgba(242, 138, 178, 0.8);
  cursor: pointer;
`;

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <StyledMain>
        <StyledSection>
          <StyledHeading>{people.length} birthdays today</StyledHeading>
          <List people={people} />
          <StyledButton type="button" onClick={() => setPeople([])}>
            clear all
          </StyledButton>
        </StyledSection>
      </StyledMain>
    </>
  );
}

export default App;
