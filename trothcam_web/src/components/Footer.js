import React from 'react';
import styled from 'styled-components';
import TwitterIcon from './img/twitter.svg'; 
import InstaIcon from './img/icon_instagram.svg';
import EmailIcon from './img/icon_envelope.svg';
import PhoneIcon from './img/icon_phone.svg';


const FooterContainer=styled.footer`
    position:relative;
    width: 1440px;
    height: 237px;
    
    display: flex;
  
    align-items:center;
    background-color:#E8EAEF;

`;

const LineContainer = styled.div`
    
    justify-content: space-between; // 아이템 사이에 공간 분배
    width: 125px; 
    height:140px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
  
    color: #777777DD;


`;

const AboutTeam = styled.span`
    position:absolute;
    width: 125px;
    height: 15px;
   
    left: 68px;


`;

const Inquiry = styled.span`
    position:absolute;
    
    left: 440px;
`;

const Info = styled.span`
    position:absolute;

  
    left:711px;
`;

const Contact = styled.span`
    position:absolute;

    left:1035px;
`;

const CircleButton = styled.button`
    position:absolute;
 
    left:0px;
    width: 45px;
    height: 45px;
    top:11px;
    background: #BCBDC1;
    border-radius: 50%;
    border:none;
    

`;



const Paragraph = styled.p`
    position: absolute;
    /* 위치를 다르게 설정 */
   
    
    white-space: nowrap;
    color:black;
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

  
`;

const Footer = () => {
  const firstPart = "Trothly is a photo certification issuance";
  const secondPart = "certification confirmation service.";
 

  const blueText = {
  
    color: 'blue'
  }

  return (
    <FooterContainer>
      <LineContainer>
        <AboutTeam>
          ABOUT TEAM
          <Paragraph style={{top: '20px', left:'20px'}}><span style={blueText}>Trothly</span> is a photo certification issuance and</Paragraph>
          <Paragraph style={{top: '40px',left:'20px'}}>{secondPart.trim()}</Paragraph>
        </AboutTeam>

        <Inquiry> 
            INQUIRY
            <Paragraph style={{top: '20px', left:'0px'}}>FAQ</Paragraph>
            <Paragraph style={{top: '40px',left:'0px'}}>1:1 inquiry</Paragraph>
        </Inquiry>
        <Info>
            INFORMATION
            <Paragraph style={{top: '20px', left:'0px'}}>Privacy Policy</Paragraph>
            <Paragraph style={{top: '40px',left:'0px'}}>Terms of Service</Paragraph>
       
        </Info>
        <Contact>
            CONTACT WITH US
            <CircleButton style={{top: '30px', left:'0px'}}>
              <img src={TwitterIcon} style={{width: '23px', height: '20px'}} alt="Twitter" /> 
            </CircleButton>
            <CircleButton style={{top: '30px', left:'55px'}}>
              <img src={InstaIcon} style={{width: '32px', height: '32px'}} alt="Twitter" /> 
            </CircleButton>
            <CircleButton style={{top: '30px', left:'110px'}}>
             <img src={EmailIcon} style={{width: '23px', height: '20px'}} alt="Twitter" /> 
            </CircleButton>
            <CircleButton style={{top: '30px', left:'165px'}}>
              <img src={PhoneIcon} style={{width: '18px', height: '28px'}} alt="Twitter" /> 
            </CircleButton>
        </Contact>
      </LineContainer>
    </FooterContainer>
  );
};

export default Footer;