import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo2.svg";
import SearchBox from "./header/SearchBox";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = () => {
    console.log("Login button clicked!");
  };

  return (
    <LoginContainer>
      <SearchBox />
      <LoginContent>
        <LoginText>Login into</LoginText>
        <LogoContainer>
          <StyledLogo />
        </LogoContainer>
      </LoginContent>
      <InputContainer>
        <Input type="text" placeholder="ID" />
        <Input type="password" placeholder="Password" />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        <FindCredentialsText>아이디 | 비밀번호 찾기</FindCredentialsText>
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

const LoginText = styled.div`
  color: #222;
  font-family: Inter;
  font-size: 6rem;
  font-weight: 400;
  margin-top: 2rem;
`;

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
  border: 1px solid #222;
  width: 70rem;
  height: 7rem;
  outline: none;
  font-size: 2.8rem;
  &::placeholder {
    color: #a8a8a8;
    font-size: 2.8rem;
  }
`;

const LoginButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: rgba(89, 128, 239, 0.9);
  color: #fff;
  border: none;
  text-align: center;
  font-size: 3rem;
  cursor: pointer;
  width: 74rem;
  height: 8rem;
  margin: 2rem 0 1rem;
`;

const FindCredentialsText = styled.div`
  text-align: right;
  font-family: Inter;
  margin-top: 1rem;
  color: #000;
  font-size: 2rem;
`;

const Divider = styled.div`
  width: 92rem;
  height: 0.1rem;
  background-color: #9fa0a3;
  margin-top: 10rem;
`;

const SignUpText = styled.div`
  color: #222;
  text-align: center;
  font-family: Inter;
  font-size: 2.8rem;
  margin-top: 6rem;
  margin-bottom: 10rem;
`;

const SignUpLink = styled(Link)`
  color: #5980ef;
  cursor: pointer;
  text-decoration: none;
`;
