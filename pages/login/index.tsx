import Link from "next/link";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setAdmin } from "../../store/_redcuers/authReducer";
import Router from "next/router";
// import liff from '@line/liff';

declare global {
  interface Window {
    Kakao: any;
    gapi: any;
  }
}
const frog = 1;
console.log(123123);

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


  const [contactGroups, setContactGroups] = useState([]);



  const GoogleLoginHandler = () => {


    const CLIENT_ID = "181931049890-18f0g8iibl4ovduro9jehsjuekfnef5k.apps.googleusercontent.com";
    const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
    const PEOPLE_URI = "https://people.googleapis.com/v1/contactGroups";

    const queryStr = qs.stringify({
      client_id: CLIENT_ID,
      redirect_uri: 'http://localhost:3000/login',
      response_type: "token",
      scope: "https://www.googleapis.com/auth/contacts.readonly"
    });

    const loginUrl = AUTHORIZE_URI + "?" + queryStr;


    const { access_token } = qs.parse(window.location.hash.substr(1));

    if (!access_token) {
      window.location.assign(loginUrl);
      return null;
    }



    useEffect(() => {
      fetch(PEOPLE_URI, {
        headers: { Authorization: "Bearer " + access_token }
      })
        .then(response => response.json())
        .then(data => setContactGroups(data.contactGroups));
      console.log(contactGroups);

    }, [access_token]);

    console.log(contactGroups);


  }

  console.log(contactGroups);




  //  gapi.load('auth2', function(){
  //    // Retrieve the singleton for the GoogleAuth library and set up the client.
  //    gapi.auth2.init({
  //      client_id: '181931049890-18f0g8iibl4ovduro9jehsjuekfnef5k.apps.googleusercontent.com',
  //      cookiepolicy: 'single_host_origin',
  //      // Request scopes in addition to 'profile' and 'email'
  //      //scope: 'additional_scope'
  //    });
  // })

  //    const GoogleLoginHandler = (auth2: {
  //     [x: string]: any; attachClickHandler: (arg0: any, arg1: {}, arg2: (googleUser: any) => void, arg3: (error: any) => void) => void; 
  // },element: { id: any; }) => {

  //     console.log(element.id);
  //         auth2.attachClickHandler(element, {},
  //             function(googleUser) {
  //                 const profile = auth2.googleUser.get().getBasicProfile();
  //   console.log('ID: ' + profile.getId());
  //   console.log('Full Name: ' + profile.getName());
  //   console.log('Given Name: ' + profile.getGivenName());
  //   console.log('Family Name: ' + profile.getFamilyName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail());

  //             }, function(error) {
  //               alert(JSON.stringify(error, undefined, 2));
  //             });













  // const GoogleAPI = "181931049890-18f0g8iibl4ovduro9jehsjuekfnef5k.apps.googleusercontent.com";

  // const onSuccess = (res: any) => {
  //   console.log("Login SUCCESS! Current user : ", res.profileObj);
  // };

  // const onFailure = (res: any) => {
  //   console.log("Login faile! Current res : ", res);
  // };

  // kakao login

  const kakaoLogin = async () => {
    const { Kakao } = window;
    // 카카오 초기화
    if (!Kakao.isInitialized()) {
      Kakao.init("446d0bddcd2aabc533a967c7c8d61f0e");
    }


    // 카카오 로그인 구현

    Kakao.Auth.login({
      success: () => {
        Kakao.API.request({
          url: "/v2/user/me", // 사용자 정보 가져오기
          success: (res: any) => {
            // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
            console.log(res);
            Router.push("/login");
          },
          fail: (error: any) => {
            console.log(error);
          },
        });
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };

  // 라인 로그인 구현

  const [idCode, setidCode] = useState({
    type: String,
  });

  const [idToken, setIdToken] = useState({
    type: String,
  });

  const [pictureUrl, setPictureUrl] = useState();

  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userID, setUserID] = useState("");
  const [test, setTest] = useState<string | null>("");

  const Line_LOGIN_URL = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657847379&redirect_uri=http://localhost:3000/login&state=cosmos&scope=profile%20openid%20email`;

  // async function getUser() {
  //   try {
  //     const response = await fetch(Line_LOGIN_URL, {
  //       method: 'POST',
  //       headers: {
  //         accept: 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const LineLoginHandler = async (e: any) => {
    // getUser()

    await window.location.assign(Line_LOGIN_URL);
    // await window.open(Line_LOGIN_URL)

    console.log("1");

    const url = new URL(window.location.href);
    console.log("2");
    const authorizationCode = url.searchParams.get("code");
    console.log("3");
    console.log(authorizationCode);
    console.log("4");
    getToken(authorizationCode);
  };

  const getToken = async (authorizationCode: any) => {
    console.log("5");
    console.log("authorizationCode", authorizationCode);

    // const data =  qs.stringify({
    //   'grant_type': 'authorization_code',
    //   'code': authorizationCode,
    //   'client_secret': '898f2a141088ca6c6617c33245a06a7b',
    //   'redirect_uri': 'http://localhost:3000/login',
    //   'client_id': '1657847379'
    // });
    // const config = {
    //   method: 'post',
    //   url: 'https://api.line.me/oauth2/v2.1/token',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data : data
    // };
    // console.log("6")
    //  axios(config)
    // .then(function (response) {
    //   console.log('token',JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   alert(error)
    //   // console.log(error);
    // });

    return;

    // const authorizationCode = AUTHORIZE_URI.searchParams.get("code");

    // const handleGetAccessToken = async (authorizationCode) => {
    //  await axios.post(
    //     "http://localhost:80/sign/google", // 구글 소셜 로그인 엔드포인트
    //     {
    //       authorizationCode: authorizationCode,
    //     },
    //     {
    //       headers: { accept: `application/json` },
    //     },
    //   );
  };

  const Linelogin = async (e: any) => {
    e.preventDefault();

    // const handleGetAccessToken = async (authorizationCode: any) => {
    //  await axios.post(
    //     "http://localhost:3000/login",
    //     {
    //       authorizationCode: authorizationCode,
    //     },
    //     {
    //       headers: { accept: `application/json` },
    //     },
    //   );

    // const access_token = await axios
    // .post(AUTHORIZE_URI, {
    // 	headers: { "content-type": "application/x-www-form-urlencoded" },
    // })
    // .then((el) => {
    // 	return el.data.access_token
    // })
    // .catch((err) => {
    // 	console.log("err=", err)
    // })

    // console.log(access_token);

    // setIdToken(AUTHORIZE_URI.searchParams.code)

    // const query = new URLSearchParams();

    // const authorizationCode = AUTHORIZE_URI.query.get("code");

    //   try {
    //     axios.post(`https://api.line.me/oauth2/v2.1/token`, {
    //       headers: {
    //         "content-type": "application/x-www-form-urlencoded",
    //         "grant_type" : "authorization_code",
    //         "client_id" : "1657847379",
    //         "client_secret" : '898f2a141088ca6c6617c33245a06a7b',
    //         "redirect_uri" : "http://localhost:3000/login" ,
    //         "code" : "bN2T4sbDs07p9VRPyeqL"

    //       },
    //     });
    //   } catch (res : any) {

    // console.log(res);

    //   }

    // liff.init({ liffId: "1657847379-PD7wYpD6" })
    //   .then(() => {
    //     if (liff.isLoggedIn()) {
    //       runApp();
    //     } else {
    //       liff.login();
    //     }
    //   }).catch((err) => {
    //     console.log(err.code, err.message);
    //   });
  };

  // const runApp = () => {
  //   const idToken = liff.getIDToken();
  //   liff.getProfile().then(profile => {
  //     console.log(profile)
  //     setDisplayName(profile.displayName)
  //     setUserID(profile.userId)
  //   }).catch(err => console.error(err));
  // }

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
                <SosicalLoginButton className="g-signin2" data-onsuccess="GoogleLoginHandler" onClick={GoogleLoginHandler} social="google">구글 계정으로 로그인</SosicalLoginButton>

                <SosicalLoginButton onClick={LineLoginHandler} social="line">
                  라인 계정으로 로그인
                </SosicalLoginButton>
              </div>
              <div>
                <SosicalLoginButton social="apple">애플 계정으로 로그인</SosicalLoginButton>
                <SosicalLoginButton onClick={kakaoLogin} social="kakao">
                  카카오 계정으로 로그인
                </SosicalLoginButton>
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
  background: #14141c;
  color: #ffffff;
  display: flex;
`;

export default Login;
