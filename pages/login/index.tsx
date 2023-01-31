import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setAdmin } from "../../store/_redcuers/authReducer";
import Router from "next/router";

const Login = () => {
  const dispatch = useDispatch();

  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const [values, setValues] = useState({
    email: "",
    emailSite: "",
    password: "",
  });

  const { email, emailSite, password } = values;

  const onChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const fullEmail = email + "@" + emailSite;

  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const submit = async (e: any) => {
    e.preventDefault();
    const userData = {
      userEmail: fullEmail,
      userPassword: password,
    };
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`, userData);
      data.responses === 200 && dispatch(setToken(data.jwt));
      dispatch(setAdmin(data.admin));
      Router.push("/");
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e);
      window.alert("로그인 에러");
    }
  };

  return (
    <Container>
      <Wrap>
        <Form>
          <Top>
            <Title>
              로그인<p>풀다이브에 오신것을 환영합니다.</p>
            </Title>
            <SocialLogin>
              <div>
                <SosicalLoginButton social="google">구글 계정으로 로그인</SosicalLoginButton>
                <SosicalLoginButton social="line">라인 계정으로 로그인</SosicalLoginButton>
              </div>
              <div>
                <SosicalLoginButton social="apple">애플 계정으로 로그인</SosicalLoginButton>
                <SosicalLoginButton social="kakao">카카오 계정으로 로그인</SosicalLoginButton>
              </div>
            </SocialLogin>
          </Top>
          <Or>또는</Or>
          <LoginForm onSubmit={submit}>
            <p>이메일</p>
            <EmailForm>
              <Email name="email" type="text" placeholder="abcd1234" autoComplete="off" value={email} onChange={onChangeValues} />
              <span>@</span>
              <EmailSite name="emailSite" placeholder="이메일 선택" autoComplete="off" value={emailSite} onChange={onChangeValues} />
            </EmailForm>
            <p>비밀번호</p>
            <PasswordForm>
              <Password name="password" type={passwordType.type} autoComplete="off" value={password} onChange={onChangeValues} />
              <VisibleIcon onClick={handlePasswordType} type={passwordType.type} />
            </PasswordForm>
            <LoginButton type="submit">접속하기</LoginButton>
            <Bottom>
              <p className="mssing_user">아이디 / 비밀번호 찾기</p>
              <Link href="/signup">
                <p>계정이 없으신가요?</p>
              </Link>
            </Bottom>
          </LoginForm>
        </Form>
      </Wrap>
    </Container>
  );
};

const Bottom = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #8692ff;
  > p {
    &.mssing_user {
      color: #b7b7b7;
    }
  }
`;

const PasswordForm = styled.div`
  position: relative;
`;

const LoginButton = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 200px;
  background-color: #273dff;
`;

const VisibleIcon = styled.div<{ type: string }>`
  position: absolute;
  top: 40%;
  right: 20px;
  width: 24px;
  height: 22px;
  cursor: pointer;
  background: url("/images/login/password_non_visible.svg") no-repeat;
  ${({ type }) => type === "text" && ` background: url("/images/login/password_visible.svg") no-repeat;`}
`;

const Password = styled.input`
  width: 100%;
  margin-top: 10px;
  color: inherit;
  border: none;
  border-radius: 100px;
  padding: 20px 40px 20px 60px;
  background: url("/images/login/password.svg") no-repeat 25px 50% #28282f;
  :focus {
    border: 2px solid #273dff;
    background: url("/images/login/password_white.svg") no-repeat 25px 50% #28282f;
  }
`;

const EmailSite = styled.input`
  margin-top: 10px;
  max-width: 240px;
  height: 60px;
  border: none;
  border-radius: 100px;
  padding: 20px 40px;
  background-color: #28282f;
  color: inherit;
`;

const Email = styled.input`
  margin-top: 10px;
  max-width: 240px;
  color: inherit;
  height: 60px;
  border: none;
  border-radius: 100px;
  padding: 20px 40px 20px 60px;
  background: url("/images/login/email.svg") no-repeat 25px 50% #28282f;
  :focus {
    border: 2px solid #273dff;
    background: url("/images/login/email_white.svg") no-repeat 25px 50% #28282f;
  }
`;

const EmailForm = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    color: #aeaeae;
    margin: auto 0;
  }
`;

const LoginForm = styled.form`
  > p {
    margin-top: 35px;
  }
`;

const Or = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  font-size: 1.25rem;
  margin-top: 35px;
  ::before {
    content: "";
    flex-grow: 1;
    background: rgba(99, 99, 99, 1);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin-right: 16px;
  }
  ::after {
    content: "";
    flex-grow: 1;
    background: rgba(99, 99, 99, 1);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin-left: 16px;
  }
`;

const SosicalLoginButton = styled.button<{ social: string }>`
  min-width: 248px;
  height: 60px;
  padding: 20px 40px 20px 60px;
  margin-top: 36px;
  ${({ social }) => {
    switch (social) {
      case "google":
        return css`
          background: url("/images/login/google.svg") no-repeat 35px 50% #28282f;
          margin-right: 24px;
        `;
      case "line":
        return css`
          background: url("/images/login/line.svg") no-repeat 35px 50% #28282f;
        `;
      case "apple":
        return css`
          background: url("/images/login/apple.svg") no-repeat 35px 50% #28282f;
          margin-right: 24px;
          margin-top: 12px;
        `;
      case "kakao":
        return css`
          background: url("/images/login/kakao.svg") no-repeat 25px 50% #28282f;
          padding-left: 50px;
          margin-top: 12px;
        `;
    }
  }}
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
  margin: 36px auto;
  border-radius: 24px; ;
`;

const Container = styled.main`
  width: calc(100vw - 250px);
  margin-left: 250px;
  height: 100%;
  background: #1e1e1e;
  color: #ffffff;
  display: flex;
`;

export default Login;
