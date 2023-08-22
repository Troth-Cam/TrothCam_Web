import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo2.svg";
import SearchBox from "./header/SearchBox";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const url = "https://trothly.com/auth/login";
    const requestBody = {
      id,
      password,
    };

    axios
      .post(url, requestBody)
      .then((response) => {
        const responseData = response.data;
        if (responseData.isSuccess) {
          // 로그인 성공 시 토큰을 저장하고 다음 페이지로 이동
          if (keepLogin) {
            const accessToken = responseData.result.accessToken;
            const refreshToken = responseData.result.refreshToken;
            const webToken = responseData.result.webToken;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("id", id);
            localStorage.setItem("webToken", webToken);
          } else {
            const accessToken = responseData.result.accessToken;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("id", id);
          }
          navigate("/");
        } else {
          alert("잘못된 아이디 혹은 비밀번호입니다.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("서버와 통신 중 오류가 발생했습니다.");
      });
  };

  window.addEventListener("beforeunload", () => {
    // 로그인 유지를 체크하지 않은 경우 토큰 만료 처리
    if (!keepLogin) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  });

  return (
    <LoginContainer>
      <SearchBox />
      <LoginContent>
        <LogoContainer>
          <StyledLogo />
        </LogoContainer>
      </LoginContent>
      <InputContainer>
        <Input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <KeepLogin>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={keepLogin}
              onChange={(e) => setKeepLogin(e.target.checked)}
            />
            로그인 유지
          </CheckboxLabel>
        </KeepLogin>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        <FindCredentialsText>
          <FindPasswordLink to="/">비밀번호</FindPasswordLink>를 잊으셨나요?
        </FindCredentialsText>
      </InputContainer>
      <Divider />
      <SignUpText>
        회원가입을 진행하지 않았습니까?{" "}
        <SignUpLink to="/signup">회원가입 하기</SignUpLink>
      </SignUpText>
      <Footer></Footer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10rem;
`;

// const LoginText = styled.div`
//   color: #222;
//   font-family: Inter;
//   font-size: 6rem;
//   font-weight: 400;
//   margin-top: 2rem;
// `;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const StyledLogo = styled(Logo)`
  width: 27.9rem;
  height: 11.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const Input = styled.input`
  padding: 0 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  border: 1px solid #222;
  width: 44.5rem;
  height: 5.9rem;
  outline: none;
  border-radius: 1rem;
  border: 2px solid #bcbdc1;
  font-size: 2.8rem;
  &::placeholder {
    color: #a8a8a8;
    font-size: 2.8rem;
  }
`;

const KeepLogin = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  label {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
  border-radius: 1rem;
  background: #5980ef;
`;

const LoginButton = styled.button`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  width: 49rem;
  height: 5.6rem;
  margin-left: 1rem;
  border: none;
  border-radius: 1rem;
  background: #6a8df1;
`;

const FindCredentialsText = styled.div`
  font-family: Inter;
  margin-top: 5rem;
  color: #000;
  font-size: 2rem;
  text-align: center;
`;

const Divider = styled.div`
  width: 92rem;
  height: 0.1rem;
  background-color: #9fa0a3;
  margin-top: 5rem;
`;

const SignUpText = styled.div`
  color: #222;
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  margin-top: 6rem;
  margin-bottom: 10rem;
`;

const SignUpLink = styled(Link)`
  color: #5980ef;
  cursor: pointer;
  text-decoration: none;
`;

const FindPasswordLink = styled(Link)`
  color: #5980ef;
  cursor: pointer;
  text-decoration: none;
`;
