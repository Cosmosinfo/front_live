import Link from "next/link";
import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <Container>
      <Form>
        <div>회원 유형 선택</div>
        <Member>
          <div className="fan">
            <p>일반(팬)</p>
          </div>
          <div className="artist">
            <p>아티스트</p>
          </div>
        </Member>
        <Bottom>
          <button className="previous">이전</button>
          <button className="next">다음</button>
        </Bottom>
      </Form>
    </Container>
  );
};

const Member = styled.div`
  display: flex;
  color: #858585;
  margin-top: 30%;
  cursor: pointer;
  > div {
    width: 50%;
    height: 188px;
    border: 1px solid #282828;
    border-radius: 12px;
    background: url("/images/signup/user.svg") no-repeat 50% 40% #0f0f15;
    > p {
      margin-top: 55%;
    }
    &.artist {
      margin-left: 24px;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 30% auto 0;
  > button {
    width: 50%;
    border-radius: 200px;
    font-size: 1rem;
    &.previous {
      border: 1px solid #888888;
    }
    &.next {
      background-color: #273dff;
      margin-left: 24px;
    }
  }
`;

const Form = styled.div`
  max-width: 520px;
  margin: 36px auto;
  text-align: center;
  > p {
    font-size: 1.25rem;
  }
`;

const Container = styled.div`
  display: inline-block;
  width: calc(100vw - 250px);
  height: 100vh;
  background: #1e1e1e;
  color: #ffffff;
`;

export default index;
