import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import Link from "next/link";
import Router, { useRouter } from "next/router"
import { CallingCodePicker } from '@digieggs/rn-country-code-picker';

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
    name: "가입요청완료",
    imgUrl: "/images/signup/setting.svg",
  },
];

const index = () => {


  const userInfo = {
    email: sessionStorage.getItem('fullEmail'),
    password: sessionStorage.getItem('password'),
    Type: sessionStorage.getItem('type'),
    // Type : type,

  }

  console.log(userInfo);



  const [values, setValues] = useState({

    artistname: "",
    name: "",
    genre: "",
    debutdate: "",
    agency: "",
    member: "",
    membername: "",
    phone: "",
    phoneCountry: "",

  });

  const { artistname, name, genre, debutdate, agency, member, membername, phone, phoneCountry } = values;







  const [selected, setSelected] = useState("")


  const onChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    setSelected(e.target.value);
  };

  const [genderSelected, setgenderSelected] = useState("남");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setgenderSelected(e.target.value);
  };

  const [AgencySelected, setAgencySelected] = useState("유");


  const handleAgencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgencySelected(e.target.value);

  };




  const backUrl = () => {
    window.location.href = '/signup/type/agreement';
  }

  const nextUrl = () => {
    if (sessionStorage.getItem('password') === null) {
      alert("이메일 또는 비밀번호를 먼저 입력하세요")
      Router.push("/signup")
    } else {
      // sessionStorage.setItem('회원유형', )

      sessionStorage.setItem('artistname', artistname)
      sessionStorage.setItem('Gender', genderSelected)
      sessionStorage.setItem('Name', name)
      sessionStorage.setItem('genre', genre)
      sessionStorage.setItem('debutdate', debutdate)
      sessionStorage.setItem('agency', agency)
      sessionStorage.setItem('member', member)
      sessionStorage.setItem('Phone', phone)
      sessionStorage.setItem('phoneCountry', phoneCountry)

      Router.push("/signup/type/artistComplete")

    }
  };

  return (
    <Container>
      <Form>
        <Title>아티스트 정보입력</Title>
        <Top>
          {menus.map((menu, id) => (
            <Menu key={id} imgUrl={menu.imgUrl}>
              <p>{menu.name}</p>
            </Menu>
          ))}
        </Top>
        <Main>

          <InputForm className="one">

            {/* 아티스트명 */}
            <Individual>
              <div>아티스트명</div>
              <input name="nickname" type="text" className="nickname" placeholder="닉네임을 입력해주세요." value={artistname} onChange={onChangeValues} />
            </Individual>

            {/* 성별 */}
            <Individual>
              <div>성별</div>
              <Gender>
                <input type="radio" name="남" value="남" checked={genderSelected === "남"} onChange={handleChange} />
                <label>남자</label>
                <input type="radio" name="여" value="여" checked={genderSelected === "여"} onChange={handleChange} />
                <label>여자</label>
                <input type="radio" name="혼성" value="혼성" checked={genderSelected === "혼성"} onChange={handleChange} />
                <label>혼성</label>
              </Gender>
            </Individual>
          </InputForm>

          <InputForm className="second">

            {/* 장르 */}
            <Individual>
              <div>장르</div>
              <input type="text" name="name" className="name" placeholder="이름을 입력해주세요." value={name} onChange={onChangeValues} />
            </Individual>

            {/* 데뷔일 */}
            <Individual>
              <div>데뷔일</div>
              <input type="text" name="brith" className="date" placeholder="YYYY/MM/DD" value={debutdate} onChange={onChangeValues} />
            </Individual>
          </InputForm>

          <InputForm className="third">
            <InputFormAgText>
              <div>소속사 유무</div>
            </InputFormAgText>

            <IndividualAgBox>

              {/* 소속사 유무 */}
              <Individual >
                <Agency>
                  <input type="radio" name="유" value="유" checked={AgencySelected === "유"} onChange={handleAgencyChange} />
                  <label>유</label>


                  <input type="radio" name="무" value="무" checked={AgencySelected === "무"} onChange={handleAgencyChange} />
                  <label>무</label>
                </Agency>
              </Individual>

              {/* 소속사 */}

              <Individual>
                {AgencySelected === "유" && <input type="text" name="brith" className="date" placeholder="00소속사" value={agency} onChange={onChangeValues} />
                }
              </Individual>

            </IndividualAgBox>
          </InputForm>

          <InputForm className="member">

            {/* 멥버수 */}
            <Individual>
              <div>멥버수</div>
              <input type="text" name="country" className="name" placeholder="4" value={member} onChange={onChangeValues} />
            </Individual>



          </InputForm>

          <InputForm className="third">

            {/* 휴대전화 */}
            <InputFormText>
              <div>휴대전화</div>
            </InputFormText>

            <IndividualBox>

              {/* 국가코드 */}
              <Individual className="ex1">
                <input type="text" name="phoneCountry" className="name" placeholder="대한민국" value={phoneCountry} onChange={onChangeValues} />
              </Individual>

              {/* 번호 */}
              <Individual className="ex2">
                <input type="text" name="phone" className="date" placeholder="010-0000-0000" value={phone} onChange={onChangeValues} />
              </Individual>

            </IndividualBox>

          </InputForm>
        </Main>
        <Bottom>
          <button onClick={backUrl} className="previous">이전</button>


          <button onClick={nextUrl} className="next">다음</button>
        </Bottom>
      </Form>
    </Container>
  );
};

const InputFormAgText = styled.div`
  display : flex;
`;
const IndividualAgBox = styled.div`
  display : flex;
  gap: 24px;
`;

const Gender = styled.div`
  margin-top: 20px;
  > label {
    width: 95%;
    margin: 10px;
  }
`;
const Agency = styled.div`
margin-top: 13px;
  > label {
    width: 95%;
    margin: 10px;
  }
`;

const InputFormText = styled.div`
  display : flex;
`;
const IndividualBox = styled.div`
  display : flex;
  gap : 24px;
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

  &.ex1 {

    flex: 0.4;
  }
  
  &.ex2 {
  
    flex: 2;
  }
`;

const InputForm = styled.div`
  display: flex;
  
  margin-top: 24px;


  &.one {
    gap : 24px;
    
    
  }

  &.member{
    margin-top: 24px;
    gap : 24px;
    max-width: 48%
    
  }

  &.second {
    margin-top: 24px;
    gap : 24px;
    
  }

  &.third{
    display: flex;
    margin-top: 24px;
    flex-direction: column;
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
