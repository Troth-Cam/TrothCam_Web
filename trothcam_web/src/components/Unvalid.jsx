import React from 'react';
import styled from 'styled-components';


const Unvalid = (props) => {
    return (
        <Container>
            <Day>최근 거래 3일전</Day>
            <PayContainer>
                <Pay1>판매가</Pay1>
                <Pay2>  30,000KRW</Pay2>
            </PayContainer>
            <BuyButton>비공개하기 (판매 취소하기)</BuyButton>
        </Container>
    );
}

export default Unvalid;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 379px;
    height: 218px;
    margin-top:-270px;
    margin-left:10%;
   
    border-radius: 10px;
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: 1px solid #9FA0A3;

    @media (max-width:780px) {
        justify-content: center;
        
        margin-top:0px;
        margin-left:5%;
       
  
`;

const Day = styled.div`
    width: 182px;
    height: 23px;
    margin-top:8%;
    margin-left:6%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:#A6A6A6;

`;
const PayContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Pay1 = styled.div`
    width: 55px;
    height: 24px;
    margin-top:15%;
    margin-left:6%;
    font-family: Inter;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000

`;

const Pay2 = styled.div`
    width: 287px;
    height: 49px;
    margin-top:10%;
    margin-left:5%;
    font-family: Inter;
    font-size: 45px;
    font-weight: 400;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000

`;

const BuyButton = styled.button`
    width: 342px;
    height: 43px;
    margin-top:3%;
    margin-left:6%;
    border-radius: 10px;
    background: #5980EF;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color:#ffffff;
    border:none;
    background-color: #E86056;
`;
