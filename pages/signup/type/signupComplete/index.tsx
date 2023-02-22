import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router"

const index = () => {

  const userInfo = {

    email: sessionStorage.getItem('fullEmail'),
    password: sessionStorage.getItem('password'),
    Type: sessionStorage.getItem('type'),
    Nickname: sessionStorage.getItem('Nickname'),
    Gender: sessionStorage.getItem('Gender'),
    Name: sessionStorage.getItem('Name'),
    Brith: sessionStorage.getItem('Brith'),
    Country: sessionStorage.getItem('Country'),
    City: sessionStorage.getItem('City'),
    Address: sessionStorage.getItem('Address'),
    Phone: sessionStorage.getItem('Phone'),
    Phonecity: sessionStorage.getItem('Phonecity'),
    Music: sessionStorage.getItem('music')
  }

  console.log(userInfo);




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
  background: #14141c;
  color: #ffffff;
`;

export default index;
