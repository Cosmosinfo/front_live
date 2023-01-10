import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <Container>
      <Form>
        <div>test</div>
      </Form>
    </Container>
  );
};

const Form = styled.div`
  max-width: 250px;
  margin: 50% auto;
  text-align: center;
`;

const Container = styled.div`
  display: inline-block;
  width: calc(100vw - 250px);
  height: 110vh;
  background: #1e1e1e;
  color: #ffffff;
`;

export default index;
