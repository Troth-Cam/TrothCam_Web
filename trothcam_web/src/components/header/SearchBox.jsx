import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const SearchBox = () => {
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleLoginClick = () => {
    //로그인 화면으로 이동
  };

  const handleSignUpClick = () => {
    //navigate("/"); //register1-b로 이동
  };

  return (
    <SearchBoxContainer>
      <LogoLayout>
        <Logo />
      </LogoLayout>
      <SearchBoxLayout>
        <SearchIcon />
        <SearchBoxInput
          placeholder="어떤 사진을 찾으시나요?"
          onFocus={handleInputFocus}
          isInputFocused={isInputFocused}
        />
      </SearchBoxLayout>

      <LoginButton onClick={handleLoginClick}>Login</LoginButton>
      <Link to="/Register">
      <SignUpButton onClick={handleSignUpClick}>Sign up</SignUpButton>
      </Link>
    </SearchBoxContainer>
  );
};

export default SearchBox;

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  background-color: #ffffff;
`;
const LogoLayout = styled.div`
  margin-left: 1rem;
`;
const SearchBoxLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;

  width: 33rem;
  height: 2rem;
  border-radius: 1.3rem;
  border: 1px solid #a8a8a8;
  padding: 0.3rem;
  margin-left: 1rem;
`;
const SearchBoxInput = styled.input`
  border: none;
  width: 100%;
  padding-left: 1.2rem;
  outline: none;
  &::placeholder {
    color: ${({ isInputFocused }) =>
      isInputFocused ? "transparent" : "#bcbdc1"};
    font-size: 0.875rem;
    font-family: Inter;
  }
`;
const LoginButton = styled.button`
  margin-left: 42rem;
  width: 9.3rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1.5px solid #5980ef;
  background-color: #ffffff;
  color: #5980ef;
  font-family: Inter;
  font-size: 1.375rem;
  font-weight: 600;
`;
const SignUpButton = styled.button`
  margin-left: 1rem;
  width: 9.3rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #5980ef;
  color: #ffffff;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 600;
`;
