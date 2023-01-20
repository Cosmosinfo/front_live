import Link from "next/link";
import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <Container>
      <Form>
        <img src="/images/signup/complete.svg" width="100px" height="100px" />
        <div>가입완료</div>
        <p>Welcome to FullDive!</p>
        <Link href="/" legacyBehavior passHref>
          <button>메인으로 이동</button>
        </Link>
      </Form>
    </Container>
  );
};

const Form = styled.div`
  max-width: 250px;
  margin: 20% auto;
  text-align: center;
  > div {
    margin-top: 24px;
    font-size: 2.25rem;
  }
  > p {
    margin-top: 24px;
    font-size: 1.25rem;
  }
  > button {
    width: 100%;
    margin-top: 24px;
    padding: 20px 80px;
    background-color: #273dff;
    border-radius: 200px;
    font-size: 1rem;
  }
`;

const Container = styled.div`
  display: inline-block;
  width: calc(100vw - 250px);
  margin-left: 250px;
  height: 100%;
  background: #1e1e1e;
  color: #ffffff;
`;

export default index;
