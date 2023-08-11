import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoBoard from './PhotoBoard';
import DetailBorard from './DetailBoard';
import ShareIcon from "./img/share_icon.png";
import CopyIcon from "./img/copy_icon.png";
import MoreIcon from "./img/more_icon.png";
import ListIcon from "./img/list_icon.png";

const UserToken = styled.div`
display: inline;
color: #5980EF;
font-size: 45px;
margin-left: 21.8%;
margin-top: 87px;
font-weight: 600;
font-family: inter;
`;
const TabBtn = styled.button`
    color: #000000;
    font-size: 30px;
    font-family: inter;
    background-color: white;
    border: white;
    border-bottom: solid 3px ${props => (props.clicked ? '#5980EF' : '#ffffff')};
    padding-bottom: 5px;
    margin-left: 36px;
    font-size: #000000;
    font-weight: 400;
`;
const RecentArrange = styled.div`
font-family: inter;
font-size: 20px;
font-weight: 400;
color: #000000;
margin-left: 21.8%;
margin-top: 30px;
`;
const BtnDiv = styled.div`
  display: inline-block;
  float: right;
  margin-right: 21.8%;
`;
const Btn = styled.button`
  border: solid 1px #9FA0A3;
  width: 44px;
  height: 45px;
  background-color: #FFFFFF00;
`;
const BtnImg = styled.img`
width: 26px;
height: 23px;
`;
const TabDiv = styled.div` 
  margin-top: 70px;
  margin-left: 21%;
`;
const ListImg = styled.img`
  margin-right: 10px;
`;
const PhotoBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); // Four items in a row
  gap: 20px; // Gap between items
  margin: 0 auto; // Center the grid
  max-width: 850px; // Maximum width for the grid (adjust as needed)
`;
const Detail_others = () =>{
    
    const [isTabButton1Clicked, setIsTabButton1Clicked] = useState(true);
    const [isTabButton2Clicked, setIsTabButton2Clicked] = useState(false);

    const photoList = [
        {"Name": "이름", "price": "17000", "owner": "시니"},
        {"Name": "이름2", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니현"},
      ];

    const clickTabBtn1 = () => { 
      setIsTabButton1Clicked(true);
      setIsTabButton2Clicked(false);
        if(isTabButton1Clicked == true)
            <PhotoBoard photoList={photoList} />
      };
      const clickTabBtn2 = () => {
        setIsTabButton1Clicked(false);
        setIsTabButton2Clicked(true);
        if(isTabButton2Clicked == true)
            <DetailBorard/>
      };
    return(
        <>
        <UserToken>qwbekhbjweghrk23</UserToken>
        <BtnDiv>
        <Btn style={{ borderBottomLeftRadius: "5px", borderTopLeftRadius:"5px"}}>이미지</Btn>
          <Btn style={{ borderBottomRightRadius: "5px", borderTopRightRadius:"5px"}}><BtnImg src={CopyIcon}/></Btn>
        </BtnDiv>
        <TabDiv>
        <TabBtn clicked={isTabButton1Clicked} onClick={clickTabBtn1} style={{marginLeft:"0px"}}>보유 중인 인증서</TabBtn>
        <TabBtn clicked={isTabButton2Clicked} onClick={clickTabBtn2}>상세 정보</TabBtn>
        </TabDiv>
        {isTabButton1Clicked}
        
        {isTabButton1Clicked ? (
                <PhotoBoardContainer>
                    <PhotoBoard photoList={photoList} />
                </PhotoBoardContainer>
            ) : null}
      {isTabButton2Clicked && <DetailBorard />}
        </>
    )
};

export default Detail_others;