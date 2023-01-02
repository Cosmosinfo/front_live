import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Wrap>
        <Form>
          <Top>
            <Title>
              로그인<p>풀다이브에 오신것을 환영합니다.</p>
            </Title>
            <SocialLogin>
              <SosicalLoginButton>구글 계정으로 로그인</SosicalLoginButton>
              <SosicalLoginButton>구글 계정으로 로그인</SosicalLoginButton>
            </SocialLogin>
          </Top>
        </Form>
      </Wrap>
    </Container>
  );
};

const SosicalLoginButton = styled.button`
  padding: 20px 40px 20px 70px;
  margin-top: 36px;
  background: url("/images/login/google.svg") no-repeat 35px 50% #202024;
  border-radius: 100px;
  font-size: 1rem;
`;

const SocialLogin = styled.div``;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  > p {
    margin-top: 12px;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const Top = styled.div`
  text-align: center;
`;

const Form = styled.div`
  padding: 36px 32px;
`;

const Wrap = styled.div`
  min-width: 584px;
  height: 698px;
  background: #181820;
  margin: 5% auto;
  border-radius: 24px; ;
`;

const Container = styled.main`
  width: calc(100vw - 250px);
  background: #1e1e1e;
  color: #ffffff;
  display: flex;
`;

export default Login;
