import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import PhotoBoard from './PhotoBoard';
import DetailBorard from './DetailBoard';
import LockIcon from "./img/lock_icon.png";
import ReloadIcon from "./img/reload_icon.svg";
import CopyIcon from "./img/copy_icon.png";
import {CopyToClipboard} from 'react-copy-to-clipboard'
import api from "../apis/axios";

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
    font-size: 25px;
    font-family: inter;
    background-color: white;
    border: white;
    border-bottom: solid 3px ${props => (props.clicked ? '#5980EF' : '#ffffff')};
    padding-bottom: 5px;
    margin-left: 36px;
    font-size: #000000;
    font-weight: 400;
`;
const LogoutBtn = styled.button`
width: 104px;
height: 37px;
border-radius: 8px;
border: 1px solid #FF0000;
font-size: 15px;
font-weight: 600;
font-family: inter;
background-color: #FF0000;
color: white;
`;
const ButtonDiv = styled.div`
float: right;
margin-right: 21%;
margin-top: 15px;
`;
const BtnDiv = styled.div`
  display: inline-block;
  float: right;
  margin-right: 21.8%;
  margin-top: 8px;

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
const PhotoBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Four items in a row
  gap: 0px; // Gap between items
  margin: 0 auto; // Center the grid
  max-width: 820px; // Maximum width for the grid (adjust as needed)
`;

const Detail_me = () =>{
  const navigate = useNavigate();
  const clickLogout = () => {
    // 사용자 토큰을 여기에 입력하세요
    const refreshToken = localStorage.getItem("refreshToken");
    console.log(refreshToken);
    // const headers = {Authorization: "`Bearer ${refreshToken}`"};
    //   // 다른 헤더도 필요한 경우 추가하세요

    // console.log(headers);
    // api.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`
    
    api.post('/auth/logout', {}, {headers: {'Authorization' : `${refreshToken}`}})
      .then((response) => {
        // 성공 처리
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
      
  }
  const currentURL = window.location.href;
    
    const [isTabButton1Clicked, setIsTabButton1Clicked] = useState(true);
    const [isTabButton2Clicked, setIsTabButton2Clicked] = useState(false);
    const [isTabButton3Clicked, setIsTabButton3Clicked] = useState(false);
    const photoList = [
        {"Name": "이름", "price": "17000", "owner": "시니"},
        {"Name": "이름2", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니현"},
        {"Name": "이름", "price": "17000", "owner": "시니현"},
      ];

    const clickTabBtn1 = () => { 
      setIsTabButton1Clicked(true);
      setIsTabButton2Clicked(false);
      setIsTabButton3Clicked(false);
      };
      const clickTabBtn2 = () => {
        setIsTabButton1Clicked(false);
        setIsTabButton2Clicked(true);
        setIsTabButton3Clicked(false);
      };
      const clickTabBtn3 = () => {
        setIsTabButton1Clicked(false);
        setIsTabButton2Clicked(false);
        setIsTabButton3Clicked(true);
      };
      const reloadBtn = () =>{
        window.location.reload();
      }
    return(
        <>
        <UserToken>qwbekhbjweghrk23</UserToken>
        <BtnDiv>
        <Btn onClick={reloadBtn} style={{ borderBottomLeftRadius: "5px", borderTopLeftRadius:"5px"}}><BtnImg src={ReloadIcon}/></Btn>
        <CopyToClipboard text={currentURL}>
          <Btn style={{ borderBottomRightRadius: "5px", borderTopRightRadius:"5px"}}><BtnImg src={CopyIcon}/></Btn>
          </CopyToClipboard>
        </BtnDiv>
        <ButtonDiv>
                <LogoutBtn onClick={clickLogout}>Log out</LogoutBtn>
            </ButtonDiv>
          <TabDiv>
                <TabBtn clicked={isTabButton1Clicked} onClick={clickTabBtn1} style={{marginLeft:"0px"}}>보유 중인 인증서</TabBtn>
                <TabBtn clicked={isTabButton2Clicked} onClick={clickTabBtn2}>상세 정보</TabBtn>
                <TabBtn clicked={isTabButton3Clicked} onClick={clickTabBtn3}>비공개 인증서<BtnImg style={{marginLeft: "10px"}} src={LockIcon}/></TabBtn>
            </TabDiv>
        
         {(isTabButton1Clicked || isTabButton3Clicked)}
         {isTabButton1Clicked && (
                <PhotoBoardContainer>
                    <PhotoBoard photoList={photoList} />
                </PhotoBoardContainer>
            )}
        {isTabButton2Clicked && <DetailBorard />}
        {isTabButton3Clicked && (
                <PhotoBoardContainer>
                    <PhotoBoard photoList={photoList} />
                </PhotoBoardContainer>
            )}
        </>
    )
};

export default Detail_me;