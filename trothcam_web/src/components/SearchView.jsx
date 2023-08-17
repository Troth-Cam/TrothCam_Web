import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoBoard from './PhotoBoard';

const PhotoBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Four items in a row
 // gap: 20px; // Gap between items
  margin: 0 auto; // Center the grid
  max-width: 880px; // Maximum width for the grid (adjust as needed)
`;
const Search = styled.div`
    font-size: 15px;
    text-align: center;
`;
const SearchDiv = styled.div`
display:flex;
    font-size: 15px;
    color: #ffffff;
    background-color: #5980EF;
    width: 194px;
    height: 33px;
    padding-left: 15px;
    margin-left: 20%;
    font-family: Inter;
    border-radius: 10px;
    align-items:center;
    border: solid 1px #000000;
`;
const CountDiv = styled.div`
display: flex;
justify-content: center; // Horizontally center content
align-items: center; // Vertically center content
width: 46px;
height: 20px;
border-radius: 10px;
background-color: #ffffff;
color: #5980EF;
font-size: 15px;
font-family: Inter;
font-weight: 600;
text-align: center;
margin-left: 9px;
}
`;
const Hr = styled.hr`
 color:#777777;
 width: 60%;
 margin-top: 13px;
 box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); // Add shadow
`

const SearchView = () =>{

    const photoList = [
        {"Name": "이름", "price": "17000", "owner": "시니"},
        {"Name": "이름2", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니"},
        {"Name": "이름2", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니현"},
      ];
    const [searchResult, setSearchResult] = useState("ipsum");
    return <>

        <Search><b>'{searchResult}'</b> 검색 결과</Search>
        <SearchDiv>Troth Certification 
            <CountDiv>143</CountDiv>
        </SearchDiv>
        <Hr/>
        <PhotoBoardContainer>
            <PhotoBoard photoList={photoList} />
        </PhotoBoardContainer>
    </>
}
export default SearchView;