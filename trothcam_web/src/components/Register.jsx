import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Register1 from './Register1';
import SearchBar from "./header/SearchBox";
import { useNavigate } from 'react-router-dom';



// 페이지의 크기를 지정하는 스타일드 컴포넌트를 만듭니다.
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
 
    background-color: #ffffff;
   
`;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top:100px;
  
    height: 237px;
    align-items: center;
    background-color: #E8EAEF;
`;


const RegisterText = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
   

    font-family: Inter;
    font-size: 80px;
    font-weight: 400;
    line-height: 97px;
    letter-spacing: 0em;
    color: #000000;

    @media (max-width:1100px) {
        font-size: 40px;
        line-height: 48px;
      }
`;

const RegisterText1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
  
  
    font-family: Inter;
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    color: #000000;

    @media (max-width:1100px) {
        font-size: 17px;
        line-height: 21px;
      }

`;

const RegisterText2 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    color: #000000;

    @media (max-width:1100px) {
        font-size: 14px;
        line-height: 17px;
      }


`;

const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:35px;
    
`;


const Checkbox = styled.input.attrs({ type: 'checkbox' })`

    width: 58px;
    height: 58px;
    
    border: 2px solid #000000;

    @media (max-width:1100px) {
        width: 29px;
        height: 29px;
       
    }
  
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:35px;
 
`;

const Button = styled.button`
   
    width: 107px;
    height: 64px;
   
    border-radius: 18px;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    border: none; 
    
    color: ${props => (props.checked ? '#000000' : '#ffffff')};
    background-color: ${props => (props.checked ? '#5980EF': '#D9D9D9')};
    
    @media (max-width: 1100px) {
        width: 53px;
        height: 32px;
        font-size: 14px;
        line-height: 22px;
      }

`;

const Line = styled.hr`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1123.0111083984375px;
    margin-top:250px;
    
    transform: rotate(0deg);
    border: 1px solid #9FA0A3;

    @media (max-width: 1100px) {
        width: 90%;
        margin-top:150px;
    }

`;

const Download = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;

   
    margin-top: 30px;
   
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    color:black;

    @media (max-width: 1100px) {
        font-size: 14px;
        line-height: 1px;
      }


`;






const Register=()=>{

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    };

    const navigate = useNavigate();

    const handleButtonClick = () => {
        if(!checked) {
            alert("체크를 해주세요");
            return;
        }
        else{
            navigate('/Register1');
        }

    };

    return(
        <PageContainer>
            <SearchBar></SearchBar>
            <RegisterText>회원가입</RegisterText>
            <RegisterText1>Trothly는 iOS 어플리케이션 Troth Cam에 가입해야 가입이 가능합니다.</RegisterText1>
            <RegisterText2>Troth Cam 회원가입이 되어있나요?</RegisterText2>
            <CheckboxContainer>
                <Checkbox checked={checked} onChange={handleCheckboxChange} />
            </CheckboxContainer>
            <ButtonContainer>
                <Button checked={checked} onClick={handleButtonClick}>다음</Button>
            </ButtonContainer>
            

            <Line></Line>
            <Download>
                <span>Troth Cam이 설치되어 있지 않습니까?</span>
                <a href="https://your-download-url.com" target="_blank" rel="noopener noreferrer" style={{color:'#5980EF', textDecoration: 'none'}}>&nbsp;지금 다운로드</a>
            </Download>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </PageContainer>
    );

};


export default Register;