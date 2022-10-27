import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    quotation: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const { quotation, data } = resume;

  return (
    <Container>
      <Header title="Insourance quoter" />

      <FormContainer>
        <Form setResume={setResume} setLoading={setLoading} />

        {loading ? <Spinner /> : null}

        <Resume data={data} />

        {!loading ? <Result quotation={quotation} /> : null}
      </FormContainer>
    </Container>
  );
}

export default App;
