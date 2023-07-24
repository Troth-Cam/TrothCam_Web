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
    margin-top:32px;
    font-size: #000000;
    font-family: 400;
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
        <div>
        <TabBtn clicked={isTabButton1Clicked} onClick={clickTabBtn1}>보유 중인 인증서</TabBtn>
        <TabBtn clicked={isTabButton2Clicked} onClick={clickTabBtn2}>상세 정보</TabBtn>
        </div>
        {isTabButton1Clicked ? <PhotoBoard photoList={photoList} /> : null}
      {isTabButton2Clicked && <DetailBorard />}
        </>
    )
};

export default Detail_others;