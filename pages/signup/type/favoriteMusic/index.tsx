import React from "react";
import styled from "styled-components";

const menus = [
  {
    id: 1,
    name: "약관 동의",
    imgUrl: "/images/signup/agreement_white.svg",
  },
  {
    id: 2,
    name: "개인정보 입력",
    imgUrl: "/images/signup/edit.svg",
  },
  {
    id: 3,
    name: "좋아하는 장르",
    imgUrl: "/images/signup/music.svg",
  },
  {
    id: 4,
    name: "가입 완료",
    imgUrl: "/images/signup/setting.svg",
  },
];

const music = [
  {
    id: 1,
    type: "케이팝",
  },
  {
    id: 2,
    type: "알앤비",
  },
  {
    id: 3,
    type: "락/메탈",
  },
  {
    id: 4,
    type: "팝",
  },
  {
    id: 5,
    type: "일렉트로닉",
  },
  {
    id: 6,
    type: "얼터너티브",
  },
  {
    id: 7,
    type: "제이팝",
  },
  {
    id: 8,
    type: "발라드",
  },
  {
    id: 9,
    type: "재즈",
  },
  {
    id: 10,
    type: "컨트리",
  },
  {
    id: 11,
    type: "힙합",
  },
  {
    id: 12,
    type: "펑크",
  },
  {
    id: 13,
    type: "메탈",
  },
  {
    id: 14,
    type: "댄스",
  },
  {
    id: 15,
    type: "클래식",
  },
  {
    id: 16,
    type: "이디엠",
  },
  {
    id: 17,
    type: "레게",
  },
  {
    id: 18,
    type: "인디",
  },
];

const index = () => {
  return (
    <Container>
      <Form>
        <Title>회원가입</Title>
        <Top>
          {menus.map((menu, id) => (
            <Menu key={id} imgUrl={menu.imgUrl}>
              <p>{menu.name}</p>
            </Menu>
          ))}
        </Top>
        <Main>
          <Profile>
            좋아하는 장르<span>*복수선택 3가지 가능</span>
          </Profile>
          <MusicBox>
            {music.map((data, id) => (
              <div key={id}>{data.type}</div>
            ))}
          </MusicBox>
        </Main>
        <Bottom>
          <button className="previous">이전</button>
          <button className="next">다음</button>
        </Bottom>
      </Form>
    </Container>
  );
};

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 15% auto 10%;
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

const MusicBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    display: block;
    width: 30%;
    margin-bottom: 12px;
    padding: 16px 30px;
    border: 1px solid #9a9a9a;
    border-radius: 100px;
    color: #cacaca;
  }
`;

const Profile = styled.div`
  text-align: left;
  margin-bottom: 24px;
  > span {
    margin-left: 8px;
    font-size: 0.875rem;
    color: #c6c6c6;
  }
`;

const Main = styled.div`
  margin-top: 100px;
`;

const Menu = styled.div<{ imgUrl: string }>`
  position: relative;
  border: 1px solid #262667;
  border-radius: 100px;
  min-width: 112px;
  height: 48px;
  background: ${(props) => `url(${props.imgUrl}) no-repeat center`};
  ${(props) =>
    props.imgUrl === "/images/signup/agreement_white.svg" &&
    `
      border: 2px solid #273DFF; 
      background-color: #273DFF;     
  `}
  ${(props) =>
    props.imgUrl === "/images/signup/edit.svg" &&
    `
    border: 2px solid #273DFF; 
    background-color: #273DFF;   
  `}
  ${(props) =>
    props.imgUrl === "/images/signup/music.svg" &&
    `
    border: 2px solid #273DFF; 
  `}
  > p {
    width: 100%;
    position: absolute;
    top: 60px;
    text-align: center;
    font-size: 1rem;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Form = styled.div`
  max-width: 520px;
  margin: 36px auto;
  text-align: center;
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
