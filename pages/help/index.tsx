import React, { useState } from "react";
import styled from "styled-components";

const supporting_menus = [
  {
    id: 1,
    name: "일반 문의",
    type: false,
  },
  {
    id: 2,
    name: "비즈니스 문의",
    type: true,
  },
];

const index = () => {
  const [ableButton, setAbleButton] = useState(false);
  const [inputs, setInputs] = useState({});

  const changeButton = () => {
    setAbleButton(!ableButton);
  };

  return (
    <Container>
      <Wrap>
        <div>문의하기</div>
        <Top>
          {supporting_menus.map((menu, index) => (
            <TopButton key={index} isHere={menu.type === ableButton} onClick={changeButton}>
              {menu.name}
            </TopButton>
          ))}
        </Top>
        <Main>
          <div>
            <p>문의 유형</p>
            <Input className="type" placeholder="계정" />
          </div>
          <div>
            <p>수신받을 이메일</p>
            <Input placeholder="test@gmail.com" />
          </div>
          <div>
            <p>문의 내용</p>
            <TextArea placeholder="문의 내용을 입력해 주세요" />
          </div>
        </Main>
        <Button>보내기</Button>
      </Wrap>
    </Container>
  );
};

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 20px 0;
  background: #273dff;
  border-radius: 100px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 400px;
  margin-top: 12px;
  background: rgba(217, 217, 217, 0.1);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  padding: 12px;
  resize: none;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 12px;
  background: rgba(217, 217, 217, 0.1);
  border: none;
  border-radius: 100px;
  height: 40px;
  color: #ffffff;
  padding: 0 12px;
  &.type {
    width: 50%;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: initial;
  width: 100%;
  > div {
    margin-top: 24px;
  }
`;

const Top = styled.div`
  background: #2e2e3d;
  border-radius: 48px;
  width: 100%;
  height: 60px;
`;

const TopButton = styled.button<{ isHere: boolean }>`
  width: 50%;
  line-height: 60px;
  border-radius: 48px;
  font-size: 1.125rem;
  ${({ isHere }) => isHere && `background: #273dff;`}
`;

const Wrap = styled.div`
  min-width: 520px;
  height: 698px;
  margin: 30px auto;
  border-radius: 24px;
  text-align: center;
  > div {
    display: inline-block;
    font-size: 1.25rem;
    margin: 0 auto;
    margin-bottom: 24px;
  }
`;

const Container = styled.main`
  width: calc(100vw - 250px);
  margin-left: 250px;
  height: 130vh;
  background: #14141c;
  color: #ffffff;
  padding: 30px;
  display: flex;
  padding-top: 30px;
`;

export default index;
