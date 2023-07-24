import React, { useState } from 'react';
import styled from 'styled-components';
import PhotoBoard from './PhotoBoard';
import DetailBorard from './DetailBoard';

const UserToken = styled.div`
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

    font-size: #000000;
    font-family: 400;
`;
const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top:32px;
`;
const LogoutBtn = styled.button`
width: 140px;
height: 50px;
border-radius: 8px;
border: 1px solid #FF0000;
font-size: 20px;
font-weight: 600;
font-family: inter;
background-color: #FF0000;
color: white;
`;
const SettingsBtn = styled.button`
width: 140px;
height: 50px;
border-radius: 8px;
border: 1px solid black;
font-size: 20px;
font-weight: 600;
font-family: inter;
background-color: white;
margin-right: 20px;

`;
const ButtonDiv = styled.div`
align-items: center;
justify-content: center;
margin-right: 50px;
`;


const Detail_me = () =>{
    
    const [isTabButton1Clicked, setIsTabButton1Clicked] = useState(true);
    const [isTabButton2Clicked, setIsTabButton2Clicked] = useState(false);
    const [isTabButton3Clicked, setIsTabButton3Clicked] = useState(false);
    const photoList = [
        {"Name": "이름", "price": "17000", "owner": "시니"},
        {"Name": "이름2", "price": "17000", "owner": "시니현"},
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

    return(
        <>
        <UserToken>qwbekhbjweghrk23</UserToken>
        <ButtonContainer>
            <div>
                <TabBtn clicked={isTabButton1Clicked} onClick={clickTabBtn1}>보유 중인 인증서</TabBtn>
                <TabBtn clicked={isTabButton2Clicked} onClick={clickTabBtn2}>상세 정보</TabBtn>
                <TabBtn clicked={isTabButton3Clicked} onClick={clickTabBtn3}>관심 인증서</TabBtn>
            </div>
            <ButtonDiv>
                <SettingsBtn>Settings</SettingsBtn>
                <LogoutBtn>Log out</LogoutBtn>
            </ButtonDiv>
        </ButtonContainer>
        {isTabButton1Clicked && <PhotoBoard photoList={photoList} />}
        {isTabButton2Clicked && <DetailBorard />}
        {isTabButton3Clicked && <PhotoBoard photoList={photoList} />}
        </>
    )
};

export default Detail_me;