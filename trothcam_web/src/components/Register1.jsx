import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import SignUp from './SignUp';
import SearchBar from "./header/SearchBox";
import agreepic1 from './img/agreepic1.png'; 
import agreepic2 from './img/agreepic2.png'; 
import agreepic3 from './img/agreepic3.png'; 


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   
`;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top:10%;
    height: 237px;
    align-items: center;
    background-color: #E8EAEF;
`;




const Title = styled.h1`
    
    font-family: Inter;
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    padding-left: 8%;
    
    
    @media (max-width: 1439px) { 
        font-size: 30px;
        padding-left: 10%;
    }
    
    @media (max-width: 950px) {
        font-size: 20px;
        padding-left: 10%;
    }
   
   
`;

const Line = styled.div`
   
    width: 1250px;
    margin:auto;
    border: 3px solid #000000;

    @media (max-width: 1439px) {
        width:80%;
        border: 2px solid #000000;
        margin-top:-10px;
    }
    
    @media (max-width: 950px) {
        width:80%;
        border: 1px solid #000000;
        margin-top:-20px;
    }

`;

const Agree1 = styled.div`
    
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 10%;
    margin-top:2%;

    @media (max-width: 1439px) { 
        font-size: 22px;
        padding-left: 12%;
    }
    
    @media (max-width: 950px) {
        font-size: 15px;
    }
`;


const Image1 = styled.img`

    width: 1112px;
    max-height: 304px;
    margin: auto; 
    overflow-y: auto; // 세로 스크롤
    display: block; // 필요한 경우
    
    @media (max-width: 1439px) {
        width: 80%;
    }
    
`;


const Check1 = styled.div`
    
    width: 286px;
    height: 24px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    letter-spacing: 0em;
    padding-top:2%;
    margin-left: 66%;

    @media (max-width: 1439px) { 
        font-size: 16px;
        margin-left: 66%;
    }
    
    @media (max-width: 965px) {
        font-size: 12px;
        margin-left: 65%;
    }
    @media (max-width: 700px) {
        font-size: 8px;
        margin-left: 60%;
    }

`;



const Checkbox1 = styled.input.attrs({ type: 'checkbox' })`
    
    width: 29px;
    height: 29px;
    margin-left: 86%;
    margin-top:-24px;
    border: 1px solid #000000;

    @media (max-width: 1439px) { 
        width: 24px;
        height: 24px;
        margin-left: 88%;
       
    }
    
    @media (max-width: 950px) {
        width: 18px;
        height: 18px;
        margin-left: 88%;
        margin-top:-22px;
    
    }
    @media (max-width: 700px) {
        width: 15px;
        height: 15px;
        margin-left: 88%;
        margin-top:-20px;
    
    }

`;





const Agree2 = styled.div`
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 10%;
    margin-top:2%;

    @media (max-width: 1439px) { 
        font-size: 22px;
        padding-left: 12%;
    }

    @media (max-width: 950px) {
        font-size: 15px;
    }

`;


const Image2 = styled.img`
    width: 1112px;
    max-height: 304px;
    margin: auto; 
    overflow-y: auto; // 세로 스크롤
    display: block; // 필요한 경우

    @media (max-width: 1439px) {
        width: 80%;
    }
    
`;

const Check2 = styled.div`

    width: 286px;
    height: 24px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    letter-spacing: 0em;
    padding-top:2%;
    margin-left: 66%;

    @media (max-width: 1439px) { 
        font-size: 16px;
        margin-left: 66%;
    }

    @media (max-width: 965px) {
        font-size: 12px;
        margin-left: 65%;
    }
    @media (max-width: 700px) {
        font-size: 8px;
        margin-left: 60%;
    }

`;





const Checkbox2 = styled.input.attrs({ type: 'checkbox' })`
    width: 29px;
    height: 29px;
    margin-left: 86%;
    margin-top:-24px;
    border: 1px solid #000000;

    @media (max-width: 1439px) { 
        width: 24px;
        height: 24px;
        margin-left: 88%;
    
    }

    @media (max-width: 950px) {
        width: 18px;
        height: 18px;
        margin-left: 88%;
        margin-top:-22px;

    }
    @media (max-width: 700px) {
        width: 15px;
        height: 15px;
        margin-left: 88%;
        margin-top:-20px;

    }
`;





const Agree3 = styled.div`
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 10%;
    margin-top:2%;

    @media (max-width: 1439px) { 
        font-size: 22px;
        padding-left: 12%;
    }

    @media (max-width: 950px) {
        font-size: 15px;
    }

`;


const Image3 = styled.img`
    
    width: 1112px;
    max-height: 304px;
    margin: auto; 
    overflow-y: auto; // 세로 스크롤
    display: block; // 필요한 경우

    @media (max-width: 1439px) {
        width: 80%;
    }
`;

const Check3 = styled.div`
    
    width: 286px;
    height: 24px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    letter-spacing: 0em;
    padding-top:2%;
    margin-left: 66%;

    @media (max-width: 1439px) { 
        font-size: 16px;
        margin-left: 66%;
    }

    @media (max-width: 965px) {
        font-size: 12px;
        margin-left: 65%;
    }
    @media (max-width: 700px) {
        font-size: 8px;
        margin-left: 60%;
    }
`;



const Checkbox3 = styled.input.attrs({ type: 'checkbox' })`
    width: 29px;
    height: 29px;
    margin-left: 86%;
    margin-top:-24px;
    border: 1px solid #000000;

    @media (max-width: 1439px) { 
        width: 24px;
        height: 24px;
        margin-left: 88%;
    }

    @media (max-width: 950px) {
        width: 18px;
        height: 18px;
        margin-left: 88%;
        margin-top:-22px;
    }
    @media (max-width: 700px) {
        width: 15px;
        height: 15px;
        margin-left: 88%;
        margin-top:-20px;
    }
`;

const Allagree = styled.div`
    
    width: 286px;
    height: 24px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    letter-spacing: 0em;
    padding-top:2%;
    margin-left: 77%;

    @media (max-width: 1439px) { 
        font-size: 16px;
        margin-left: 77%;
    }

    @media (max-width: 965px) {
        font-size: 12px;
        margin-left: 77%;
    }
    @media (max-width: 700px) {
        font-size: 8px;
        margin-left: 75%;
    }

`;



const Checkbox4 = styled.input.attrs({ type: 'checkbox' })`
    width: 29px;
    height: 29px;
    margin-left: 86%;
    margin-top:-24px;
    border: 1px solid #000000;

    @media (max-width: 1439px) { 
        width: 24px;
        height: 24px;
        margin-left: 88%;
    }

    @media (max-width: 950px) {
        width: 18px;
        height: 18px;
        margin-left: 88%;
        margin-top:-22px;

    }
    @media (max-width: 700px) {
        width: 15px;
        height: 15px;
        margin-left: 88%;
        margin-top:-20px;
    }
`;

const Button = styled.button`
  
    width: clamp(50px, 10vw, 107px);
    height: clamp(30px, 6vh, 64px);
    font-size: clamp(12px, 1.5vw, 28px);
    
    margin:auto;
    border-radius: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    border:none;

    color: ${props => (props.enabled ? '#000000' : '#ffffff')};
    background-color: ${props => (props.enabled ? '#5980EF': '#D9D9D9')};

`;



const Register1 = () => {


    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    const [isButtonEnabled, setButtonEnabled] = useState(false);

    const handleCheckAll = (checked) => {
        setChecked1(checked);
        setChecked2(checked);
        setChecked3(checked);
        setChecked4(checked);
    }

    useEffect(() => {
        // 체크1, 체크2 또는 체크1, 체크2, 체크3이 체크되었는지 확인
        if ((checked1 && checked2) || (checked1 && checked2 && checked3)) {
            setButtonEnabled(true); // 조건을 만족한다면 버튼을 활성화
        } else {
            setButtonEnabled(false); // 아니라면 버튼을 비활성화
        }
        // 체크1, 체크2, 체크3가 모두 체크되어 있는지 확인
        if (checked1 && checked2 && checked3) {
            setChecked4(true); // 모두 체크되어 있다면 '전체 동의하기'도 체크
        } else {
            setChecked4(false); // 하나라도 체크되어 있지 않다면 '전체 동의하기'를 해제
        }
    }, [checked1, checked2, checked3]); //  배열 안의 변수들이 변할 때마다 useEffect 내부의 함수를 호출

    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!checked1 || !checked2) {
            alert('필수 항목을 체크해주세요!');
            return;
        }
        else{
            navigate('/SignUp'); // 다음 페이지로 이동하는 로직
        }
        
    }

    

    return (
        <PageContainer>
            <SearchBar></SearchBar>
            <Title>약관 동의</Title>
            <Line></Line>
       
            <Agree1>| 이용약관 동의(필수)</Agree1>
            <Image1 src={agreepic1} alt="agreepic1" />
            <Check1>위 내용을 확인했으며, 동의합니다.</Check1>
            <Checkbox1 checked={checked1} onChange={() => setChecked1(!checked1)} />
     
            <Agree2>| 개인정보 수집 및 이용에 관한 동의(필수)</Agree2>
            <Image2 src={agreepic2} alt="agreepic2" />
            <Check2>위 내용을 확인했으며, 동의합니다.</Check2>
            <Checkbox2 checked={checked2} onChange={() => setChecked2(!checked2)} />

            <Agree3>| 개인정보 수집 및 이용에 관한 동의서</Agree3>
            <Image3 src={agreepic3} alt="agreepic3" />
            <Check3>위 내용을 확인했으며, 동의합니다.</Check3>
            <Checkbox3 checked={checked3} onChange={() => setChecked3(!checked3)} />

            <Allagree>전체 동의하기</Allagree>
            <Checkbox4 checked={checked4} onChange={() => handleCheckAll(!checked4)} />
            
            <Button enabled={isButtonEnabled} onClick={handleSubmit}>다음</Button>
            
            <FooterContainer>
              <Footer />
            </FooterContainer>
        </PageContainer> 
    );
}



export default Register1;