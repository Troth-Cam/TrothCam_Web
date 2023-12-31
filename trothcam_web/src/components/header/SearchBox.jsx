import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const SearchBox = () => {
  const navigate = useNavigate();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isLoggedIn = localStorage.getItem("accessToken") !== null;
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/register");
  };

  const handleMyPageClick = () => {
    navigate("/detail_me");
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      //navigate(`/search?query=${encodeURIComponent(searchQuery)}`); //search 페이지로 이동
      navigate("/search");
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const backToMain = () => {
    navigate("/");
  }
  return (
    <>
      <SearchBoxContainer>
        <LogoLayout>
          <Logo onClick={backToMain}/>
        </LogoLayout>
        <SearchBoxLayout>
          <SearchBoxInput
            placeholder="어떤 사진을 찾으시나요?"
            onFocus={handleInputFocus}
            onKeyDown={handleSearch}
            value={searchQuery}
            onChange={handleSearchInputChange}
            isInputFocused={isInputFocused}
          />
          <SearchIcon />
        </SearchBoxLayout>

        {isLoggedIn ? (
          <>
            <MyPageButton onClick={handleMyPageClick}>My Page</MyPageButton>
          </>
        ) : (
          <>
            <LoginButton onClick={handleLoginClick}>Login</LoginButton>
            <Link to="/Register">
              <SignUpButton onClick={handleSignUpClick}>Sign up</SignUpButton>
            </Link>
          </>
        )}
      </SearchBoxContainer>
      <Divider />
    </>
  );
};

export default SearchBox;

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
`;
const LogoLayout = styled.div`
  margin-left: 10rem;
`;
const SearchBoxLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  height: 2rem;
  border-radius: 1.3rem;
  border: 1px solid #a8a8a8;
  padding: 0.3rem;
  margin-left: 1rem;
`;
const SearchBoxInput = styled.input`
  border: none;
  width: 25rem;
  padding-left: 1.2rem;
  outline: none;
  font-size: 1rem;
  &::placeholder {
    color: ${({ isInputFocused }) =>
      isInputFocused ? "transparent" : "#bcbdc1"};
    font-size: 1rem;
    font-family: Inter;
  }
`;
const LoginButton = styled.button`
  margin-left: 12rem;
  width: 9.3rem;
  min-width: 9.3rem;
  height: 3rem;
  border-radius: 0.8rem;
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
  border-radius: 0.8rem;
  border: none;
  background-color: #5980ef;
  color: #ffffff;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 600;
`;
const MyPageButton = styled.button`
  margin-left: 25%;
  width: 9rem;
  height: 3rem;
  border-radius: 0.8rem;
  border: none;
  background-color: #5980ef;
  color: #ffffff;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 600;
`;
const Divider = styled.div`
  height: 0.08rem;
  background-color: #bcbdc1;
  margin-bottom: 2rem;
`;
