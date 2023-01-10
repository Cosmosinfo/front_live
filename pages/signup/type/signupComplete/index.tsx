import React from "react";
import styled from "styled-components";

const index = () => {
  const moveToHome = () => {
    location.href = "/";
  };

  return (
    <Container>
      <Form>
        <img />
        <div>가입 완료</div>
        <div className="welcome">
          <span>Welcome to </span>FullDive!
        </div>
        <button onClick={moveToHome}>메인으로 이동</button>
      </Form>
    </Container>
  );
};

const Form = styled.div`
  max-width: 250px;
  margin: 30% auto;
  text-align: center;
  > img {
    width: 100px;
    height: 100px;
    background: url("/images/signup/complete.svg") no-repeat;
    border: 1px solid black;
    margin-bottom: 25px;
  }
  > div {
    font-size: 2.25rem;
    &.welcome {
      margin-top: 24px;
      font-size: 1.25rem;
      font-weight: 500;
      > span {
        font-weight: 300;
      }
    }
  }
  > button {
    margin-top: 24px;
    padding: 20px 76px;
    background: #273dff;
    border-radius: 200px;
  }
`;

const Container = styled.div`
  display: inline-block;
  width: calc(100vw - 250px);
  height: 110vh;
  background: #1e1e1e;
  color: #ffffff;
`;

export default index;
