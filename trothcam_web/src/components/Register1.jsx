import React, { useState,useEffect } from 'react';

import styled from 'styled-components';
import Footer from './Footer';
import Header from './SearchBox';
import agreepic1 from './img/agreepic1.png'; 
import agreepic2 from './img/agreepic2.png'; 
import agreepic3 from './img/agreepic3.png'; 

// 페이지의 크기를 지정하는 스타일드 컴포넌트를 만듭니다.
const PageContainer = styled.div`
    position:relative;
    width: 1440px;
    height: 2243px;
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

const Title = styled.h1`
    position: absolute;
    width: 205px;
    height: 71px;
    top: 101px;
    left: 85px;
    font-family: Inter;
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;

`;

const Line = styled.div`
    position: absolute;
    width: 1250px;
    top: 192px;
    left: 85px;
    border: 3px;
    angle: -0 deg;
    border: 3px solid #000000;

`;

const Agree1 = styled.div`
    position: absolute;
    width: 252px;
    height: 34px;
    top: 240px;
    left: 139px;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;


`;


const Image1 = styled.img`
    position: absolute;
    width: 1112px;
    max-height: 304px;
    top: 290px;
    left: 144px;
    overflow-y: auto; // 세로 스크롤
    display: block; // 필요한 경우


`;

const Check1 = styled.div`
    position: absolute;
    width: 286px;
    height: 24px;
    top: 612px;
    left: 940px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    letter-spacing: 0em;
    text-align: left;


`;



const Checkbox1 = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    width: 29px;
    height: 29px;
    top: 609px;
    left: 1220px;
    border: 1px solid #000000;
`;





const Agree2 = styled.div`
    position: absolute;
    width: 489px;
    height: 34px;
    top: 717px;
    left: 141px;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;


`;


const Image2 = styled.img`
    position: absolute;
    width: 1107px;
    height: 304px;
    top: 772px;
    left: 149px;


`;

const Check2 = styled.div`
    position: absolute;
    width: 286px;
    height: 24px;
    top: 1112px;
    left: 940px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
    letter-spacing: 0em;
    text-align: left;


`;



const Checkbox2 = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    width: 29px;
    height: 29px;
    top: 1109px;
    left: 1220px;
    border: 1px solid #000000;
`;




const Agree3 = styled.div`
    position: absolute;
    width: 443px;
    height: 34px;
    top: 1196px;
    left: 141px;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;


`;


const Image3 = styled.img`
    position: absolute;
    width: 1112px;
    height: 320px;
    top: 1253px;
    left: 154px;


`;

const Check3 = styled.div`
    position: absolute;
    width: 286px;
    height: 24px;
    top: 1640px;
    left: 940px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;


`;



const Checkbox3 = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    width: 29px;
    height: 29px;
    top: 1637px;
    left: 1220px;
    border: 1px solid #000000;
`;

const Allagree = styled.div`
    position: absolute;
    width: 117px;
    height: 24px;
    top: 1708px;
    left: 1097px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: right;

`;



const Checkbox4 = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    width: 29px;
    height: 29px;
    top: 1705px;
    left: 1220px;
    border: 1px solid #000000;
`;

const Button = styled.button`
    position: absolute;
    width: 107px;
    height: 64px;
    top: 1792px;
    left: 680px;
    border-radius: 18px;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    border:none;

    background: #5980EF;

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
        // 체크1, 체크2 또는 체크1, 체크2, 체크3이 체크되었는지 확인합니다.
        if ((checked1 && checked2) || (checked1 && checked2 && checked3)) {
            setButtonEnabled(true); // 조건을 만족한다면 버튼을 활성화합니다.
        } else {
            setButtonEnabled(false); // 아니라면 버튼을 비활성화합니다.
        }
    }, [checked1, checked2, checked3]); // 이 배열 안의 변수들이 변할 때마다 useEffect 내부의 함수를 호출합니다.


    const handleSubmit = () => {
        if (!checked1 || !checked2) {
            alert('필수 항목을 체크해주세요!');
            return;
        }
        // 다음 페이지로 이동하는 로직
    }

    

    return (
        <PageContainer>
            <Header></Header>
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





