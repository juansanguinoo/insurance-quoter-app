import React from "react";
import styled from "@emotion/styled";
import PropType from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const QuotationResult = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const QuotationText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const Result = ({ quotation }) => {
  return quotation === 0 ? (
    <Message>Choose brand, year and plan</Message>
  ) : (
    <QuotationResult>
      <TransitionGroup component="span" className="result">
        <CSSTransition
          key={quotation}
          classNames="result"
          timeout={{ enter: 500, exit: 500 }}
        >
          <QuotationText>
            The quotation is: $ <span>{quotation}</span>
          </QuotationText>
        </CSSTransition>
      </TransitionGroup>
    </QuotationResult>
  );
};

Result.propTypes = {
  quotation: PropType.number.isRequired,
};

export default Result;
