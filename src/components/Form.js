import React, { useState } from "react";
import styled from "@emotion/styled";
import { getYearDiff, calculateBrand, getPlan } from "../helper";
import PropType from "prop-types";

const Camp = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setResume, setLoading }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  const { brand, year, plan } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    let result = 2000;

    const diff = getYearDiff(year);

    result -= (diff * 3 * result) / 100;

    result = calculateBrand(brand) * result;

    const incrementPlan = getPlan(plan);

    result = parseFloat(incrementPlan * result).toFixed(2);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setResume({
        quotation: Number(result),
        data,
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>All fields are required</Error> : null}

      <Camp>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Camp>

      <Camp>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="2021">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Camp>

      <Camp>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={handleChange}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={handleChange}
        />
        Complete
      </Camp>

      <Button type="submit">Quote</Button>
    </form>
  );
};

Form.propTypes = {
  setResume: PropType.func.isRequired,
  setLoading: PropType.func.isRequired,
};

export default Form;
