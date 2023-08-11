import React from 'react';
import styled from 'styled-components';
import infoImg from './img/infoIcon.png';

const Valid = (props) => {
    return (
        <Container>
            <PayContainer>
                <Pay1>| 판매가</Pay1>
                <Infoicon src={infoImg} alt="infoImg" />
            </PayContainer>

            <Input1 type="text" placeholder="가격을 입력해주세요."/>
            <Ex1>판매를 원하는 가격을 작성해주세요.</Ex1>

            <PayContainer>
                <Pay2>| 설명 작성 </Pay2>
                <Infoicon src={infoImg} alt="infoImg" />
            </PayContainer>

            <Input2 type="text" placeholder="설명을 작성해주세요."/>
            <Ex2>사진에 대한 자세한 설명을 작성해주세요.</Ex2>
            <Button3 onClick={props.onButtonClick}>온라인에 게시하기 (판매하기)</Button3>
        </Container>
    );
}

export default Valid;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 379px;
    height: 546px;
    margin-top:-50px;
    margin-left:10%;

    border-radius: 10px;
    border: 1px;

    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: 1px solid #9FA0A3;
    
    @media (max-width:680px) {
        justify-content: center;
        
        margin-top:-260px;
        margin-left:15%;
`;

const PayContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Pay1 = styled.div`
    width: 100px;
    height: 24px;
    margin-top:5%;
    margin-left:6%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000

`;

const Infoicon=styled.img`
    width: 24px;
    height: 24px;
    margin-top:4.3%;
    margin-left:-20px;
`;


const Input1 = styled.input`
    width: 343px;
    height: 59px;
    top: 366px;
    margin-top:2%;
    margin-left:5%;
    border-radius: 10px;
    border: 1px solid #BCBDC1;
    color: #a8a8a8;
    background-color:#ffffff;

   
    &::placeholder {
        position: absolute;
        //top: 5px;           // 상단에 고정
        left: 15px;        // 약간의 왼쪽 패딩
        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        color: #a8a8a8;  // Placeholder 색상
    }
    
`;

const Ex1=styled.div`
    width: 338px;
    height: 24px;
    margin-top:10px;
    margin-left:6%;
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color:#9FA0A3;

`;
const Pay2 = styled.div`
    width: 115px;
    height: 24px;
    margin-top:3%;
    margin-left:5%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;


`;
const Input2 = styled.input`

    width: 343px;
    height: 258px;
    top: 366px;
    margin-left:5%;
    border-radius: 10px;
    border: 1px solid #BCBDC1;
    color: #a8a8a8;
    background-color:#ffffff;

    &::placeholder {
        position: absolute;
        top: 15px;           // 상단에 고정
        left: 15px;        // 약간의 왼쪽 패딩
        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        color: #a8a8a8;  // Placeholder 색상
    }
    
`;

const Ex2=styled.div`
    width: 338px;
    height: 24px;
    margin-top:10px;
    margin-left:6%;
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color:#9FA0A3;

`;



const Button3 = styled.button`
    width: 342px;
    height: 53px;
    top: 800px;
    margin-left:5%;
    border-radius: 10px;


    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    
    color:#FFFFFF;
    background-color: #5980EF;

`;