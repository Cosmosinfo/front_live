
import React, { useState, ChangeEvent, useEffect } from "react";
import styled, { css } from "styled-components";
import SHA256 from "../../sha256";
import Router, { useRouter } from "next/router"
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const [values, setValues] = useState({
    email: "",
    emailSite: "",
    password: "",
    confirm_password: "",
  });




  const { email, emailSite, password, confirm_password } = values;

  const fullEmail = email + "@" + emailSite;

  const onChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  // formik 
  const ValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required("이름은 필수항목입니다."),
    password: Yup.string()
      .required("이름은 필수항목입니다.")
  });

  const initialValues = {
    email: "",
    password: ""
  };

  const sessionStorage = window.sessionStorage;

  const [emailError, setEmailError] = useState(false);



  const nextUrl = () => {



    sessionStorage.setItem('fullEmail', fullEmail)
    sessionStorage.setItem('password', SHA256(password))

    Router.push("/signup/type")


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
          <LoginForm>

            <p>이메일</p>
            <EmailForm >
              <Email name="email" type="text" placeholder="abcd1234" autoComplete="off" value={email} onChange={onChangeValues} />
              <span>@</span>
              <EmailSite name="emailSite" placeholder="이메일 선택" autoComplete="off" value={emailSite} onChange={onChangeValues} />
            </EmailForm>
            <p>비밀번호</p>
            <PasswordForm>
              <Password name="password" type={passwordType.type} autoComplete="off" value={password} onChange={onChangeValues} />
              <VisibleIcon onClick={handlePasswordType} type={passwordType.type} />
            </PasswordForm>
            <p>비밀번호 확인</p>
            <PasswordForm>
              <Password

                name="confirm_password"
                type={passwordType.type}
                autoComplete="off"
                value={confirm_password}
                onChange={onChangeValues}
              />
              <VisibleIcon onClick={handlePasswordType} type={passwordType.type} />
            </PasswordForm>

            <LoginButton onClick={nextUrl} type="button">계정 만들기</LoginButton>

          </LoginForm >
        </Form >
      </Wrap >
    </Container >
  );
};

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
  background: #14141c;
  color: #ffffff;
  display: flex;
`;

export default Login;
