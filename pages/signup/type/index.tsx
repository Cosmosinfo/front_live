import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router"

const index = () => {
  const router = useRouter()
  const { email } = router.query
  const { password } = router.query
  console.log("email : " + email , "password : " + password );


  
  



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


          <Link
            href={{
              pathname: `/signup/type/agreement`, // 라우팅 id
              query: { currentName: (email) }, // props 
              }}
              as={`/signup/type/agreement`} //url에 표시할 query
            >
            
            <button className="next">다음</button>
          </Link>

         
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
  margin-left: 250px;
  height: 100%;
  background: #1e1e1e;
  color: #ffffff;
`;

export default index;
