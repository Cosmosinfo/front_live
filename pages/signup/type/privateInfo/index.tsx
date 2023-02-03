import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

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

const index = () => {
  const router = useRouter();
  const { currentName } = router.query;
  console.log(currentName);

  const [selected, setSelected] = useState("남자");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

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
          <Profile>프로필</Profile>
          <InputForm>
            <Individual>
              <div>닉네임</div>
              <input type="text" className="nickname" placeholder="닉네임을 입력해주세요." />
            </Individual>
            <Individual>
              <div>성별</div>
              <Gender>
                <input type="radio" name="남자" value="남자" checked={selected === "남자"} onChange={handleChange} />
                <label>남자</label>
                <input type="radio" name="여자" value="여자" checked={selected === "여자"} onChange={handleChange} />
                <label>여자</label>
              </Gender>
            </Individual>
          </InputForm>
          <InputForm className="second">
            <Individual>
              <div>이름</div>
              <input type="text" className="name" placeholder="이름을 입력해주세요." />
            </Individual>
            <Individual>
              <div>생년월일</div>
              <input type="text" className="date" placeholder="YYYY/MM/DD" />
            </Individual>
          </InputForm>
          <InputForm className="second">
            <Individual>
              <div>국가</div>
              <input type="text" className="name" placeholder="대한민국" />
            </Individual>
            <Individual>
              <div>도시</div>
              <input type="text" className="date" placeholder="서울특별시" />
            </Individual>
          </InputForm>
          <Individual>
            <input type="text" className="location" placeholder="상세주소를 입력하세요. (선택사항)" />
          </Individual>
          <InputForm className="second">
            <Individual>
              <div>휴대전화</div>
              <input type="text" className="name" placeholder="대한민국" />
            </Individual>
            <Individual>
              <div>도시</div>
              <input type="text" className="date" placeholder="서울특별시" />
            </Individual>
          </InputForm>
        </Main>
        <Bottom>
          <button className="previous">이전</button>

          <Link
            href={{
              pathname: `/signup/type/signupComplete`, // 라우팅 id
              query: { currentName: JSON.stringify(currentName) }, // props
            }}
            as={`/signup/type/signupComplete`} //url에 표시할 query
          >
            <button className="next">다음</button>
          </Link>
        </Bottom>
      </Form>
    </Container>
  );
};

const Profile = styled.div`
  margin-bottom: 35px;
`;

const Gender = styled.div`
  margin-top: 20px;
  > label {
    width: 95%;
    margin: 10px;
  }
`;

const Individual = styled.div`
  width: 100%;
  text-align: left;
  > input {
    margin-top: 10px;
    border: none;
    background-color: #d9d9d91a;
    border-radius: 100px;
    color: #ffffff;
    padding: 0 10px;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    &.location {
      width: 100%;
    }
  }
`;

const InputForm = styled.div`
  display: flex;
  justify-content: space-around;
  &.second {
    margin-top: 24px;
  }
`;

const Main = styled.div`
  margin-top: 100px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 10% auto;
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
  background: #14141c;
  color: #ffffff;
`;

export default index;
