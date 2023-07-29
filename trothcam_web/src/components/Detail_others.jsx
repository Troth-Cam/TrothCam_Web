import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoBoard from './PhotoBoard';
import DetailBorard from './DetailBoard';
import ShareIcon from "./img/share_icon.png";
import CopyIcon from "./img/copy_icon.png";
import MoreIcon from "./img/more_icon.png";
const UserToken = styled.div`
    display: inline;
    color: #5980EF;
    font-size: 70px;
    weight: 700;
    margin-left: 37px;
    margin-top: 144px;
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
    margin-top:32px;
    font-size: #000000;
    font-family: 400;
`;
const RecentArrange = styled.div`
font-family: inter;
font-size: 25px;
font-weight: 400;
color: #000000;
margin-left: 36px;
margin-top: 30px;
`;
const BtnDiv = styled.div`
  display: inline-block;
  float: right;
  margin-right: 20px;
`;
const Btn = styled.button`
  border: solid 1px #9FA0A3;
  width: 59px;
  height: 59px;
  background-color: #FFFFFF00;
`;
const BtnImg = styled.img`

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
          <Btn><BtnImg src={ShareIcon}/></Btn>
          <Btn><BtnImg src={CopyIcon}/></Btn>
          <Btn style={{ borderBottomRightRadius: "5px", borderTopRightRadius:"5px"}}><BtnImg src={MoreIcon}/></Btn>
        </BtnDiv>
        <div>
        <TabBtn clicked={isTabButton1Clicked} onClick={clickTabBtn1}>보유 중인 인증서</TabBtn>
        <TabBtn clicked={isTabButton2Clicked} onClick={clickTabBtn2}>상세 정보</TabBtn>
        </div>
        {isTabButton1Clicked && <RecentArrange>최근 본 상품</RecentArrange>}
        {isTabButton1Clicked ? <PhotoBoard photoList={photoList} /> : null}
      {isTabButton2Clicked && <DetailBorard />}
        </>
    )
};

export default Detail_others;