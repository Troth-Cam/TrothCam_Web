import React from "react";
import styled from "styled-components";
import SearchBar from "./header/SearchBox";
import Footer from "./Footer";

const Rank = () => {
  return (
    <RankContainer>
      <SearchBar></SearchBar>
      <TopCostButton></TopCostButton>
      <Footer></Footer>
    </RankContainer>
  );
};

export default Rank;

const RankContainer = styled.div``;

const TopCostButton = styled.button``;
