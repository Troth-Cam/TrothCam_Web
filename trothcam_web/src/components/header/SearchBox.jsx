import styled from "styled-components";
//import { ReactComponent as SearchIcon } from "assets";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import searchSvg from "../../assets/search.svg";

const SearchBox = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <img src={searchSvg} />
    </header>
  );
};

export default SearchBox;

const SearchBoxLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;

  border: 1px solid ${({ theme }) => theme.colors.gray300};
  width: 50rem;
  height: 5rem;
  border-radius: 4rem;
  padding: 5px;
`;
const SearchBoxInput = styled.input`
  ${({ theme }) => theme.fonts.body1};
  border: none;
  width: 100%;
  &::placeholder {
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray300};
  }
  padding-left: 1.2rem;
`;
const SearchBoxButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const SearchIcon = styled.img``;
