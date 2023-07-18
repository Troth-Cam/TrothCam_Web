import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


// 페이지의 크기를 지정하는 스타일드 컴포넌트를 만듭니다.
const PageContainer = styled.div`
    position:relative;
    width: 1440px;
    height: 1288px;
    background-color: #ffffff;

`;

const FooterContainer = styled.footer`
    position: absolute;
    width: 1440px;
    height: 237px;
    bottom: 0; // 'top' 대신 'bottom'을 사용하여 컨테이너의 하단에 위치하도록 합니다.
    display: flex;
    align-items: center;
    background-color: #E8EAEF;
`;


const RegisterText = styled.h1`
    position: absolute;
    width: 295px;
    height: 97px;
    top: 174px;
    left: 571px;
    font-family: Inter;
    font-size: 80px;
    font-weight: 400;
    line-height: 97px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`;

const RegisterText1 = styled.h1`
    position: absolute;
    width: 1059px;
    height: 42px;
    top: 338px;
    left: 205px;
    font-family: Inter;
    font-size: 35px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;

    color: #000000;
`;

const RegisterText2 = styled.h1`
    position: absolute;
    width: 426px;
    height: 34px;
    top: 419px;
    left: 507px;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;


    color: #000000;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  width: 58px;
  height: 58px;
  top: 501px;
  left: 691px;
  border: 2px solid #000000;
  
`;

const Button = styled.button`
    position: absolute;
    width: 107px;
    height: 64px;
    top: 594px;
    left: 667px;
    border-radius: 18px;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    border: none; 
    
    color: ${props => (props.checked ? '#000000' : '#ffffff')};
    background-color: ${props => (props.checked ? '#5980EF': '#D9D9D9')};
    

`;

const Line = styled.hr`
  position: absolute;
  width: 1123.0111083984375px;
  top: 865px;
  left: 141px;
  border: 1px solid black;
  transform: rotate(0deg);
  border: 1px solid #9FA0A3;

`;

const Download = styled.h1`
    position: absolute;
    width: 662px;
    height: 34px;
    top: 915px;
    left: 372px;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    color:black;


`;






const Register=()=>{

    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };


    const handleButtonClick = () => {
        if(!checked) {
            alert("체크를 해주세요");
            return;
        }
        navigate('./Register1');
    };

    return(
        <PageContainer>
            
            <RegisterText>회원가입</RegisterText>
            <RegisterText1>Trothly는 iOS 어플리케이션 Troth Cam에 가입해야 가입이 가능합니다.</RegisterText1>
            <RegisterText2>Troth Cam 회원가입이 되어있나요?</RegisterText2>
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
            <Button  onClick={handleButtonClick}>다음</Button>
            <Line></Line>
            <Download>
                <span>Troth Cam이 설치되어 있지 않습니까?</span>
                <a href="https://your-download-url.com" target="_blank" rel="noopener noreferrer" style={{color:'#5980EF', textDecoration: 'none'}}> 지금 다운로드</a>
            </Download>
              <FooterContainer>
            <Footer />
            </FooterContainer>
        </PageContainer>
    );

};


export default Register;