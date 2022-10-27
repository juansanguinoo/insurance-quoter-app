import React from "react";
import styled from "@emotion/styled";
import PropType from "prop-types";

const ResumeContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <ResumeContainer>
      <h2>Resume</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>Year: {year}</li>
        <li>Plan: {plan}</li>
      </ul>
    </ResumeContainer>
  );
};

Resume.propTypes = {
  data: PropType.object.isRequired,
};

export default Resume;
