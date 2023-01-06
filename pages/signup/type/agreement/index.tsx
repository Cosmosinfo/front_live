import React from "react";
import styled from "styled-components";
import SignupTop from "../../../../components/signupTop";

const index = () => {
  return (
    <Container>
      <SignupTop />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  width: calc(100vw - 250px);
  height: 100vh;
  background: #1e1e1e;
  color: #ffffff;
`;

export default index;
