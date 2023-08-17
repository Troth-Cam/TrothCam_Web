import React from 'react';
import styled from 'styled-components';
import TwitterIcon from './img/twitter.svg'; 
import InstaIcon from './img/icon_instagram.svg';
import EmailIcon from './img/icon_envelope.svg';
import PhoneIcon from './img/icon_phone.svg';



const FooterContainer=styled.footer`
   

    width: 100%;
    height: 237px;
    
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    

    background-color:#E8EAEF;


`;

const LineContainer = styled.div` 
    position:relative;
    display: flex;
    justify-content: space-around;
    align-items:center;
    
    width: 100%;

    height:140px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
  
    color: #777777DD;

    
`;

const StyledComponent = styled.span`
    margin: 0 vw;
    font-size: 15px;

    @media (max-width: 768px) {
        font-size: 7px;
  
        
    }

    @media (max-width: 576px) {
        font-size: 5px;

    }
`;


const AboutTeam = styled(StyledComponent)`
 
`;

const Inquiry = styled(StyledComponent)`
 
`;

const Info = styled(StyledComponent)`

 
`;

const Contact = styled(StyledComponent)`
  
`;

const CircleButton = styled.button`
 
    margin-top:12px;
    margin-left:4px;
    width: 45px;
    height: 45px;
    
    background: #BCBDC1;
    border-radius: 50%;
    border:none;

    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
   }

    @media (max-width: 576px) {
      width: 18px;
      height: 18px;

    }

`;

const ResponsiveImage = styled.img`
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 576px) {
    margin-left:-2px;
    width: 10px;
    height: 10px;
  }
`;



const Paragraph = styled.p`
    //position: absolute;
    
   

    white-space: nowrap;
    color:black;
    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 7px;
      
      
  }

  @media (max-width: 576px) {
      font-size: 5px;
    
  }
 
    
`;


const Address = styled.span`
    
  
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #777777DD;

    

`;

const Footer = () => {
  const firstPart = "Trothly is a photo certification issuance";
  const secondPart = "certification confirmation service.";
 

  const blueText = {
    color: '#5980EF'
  }

  return (
    <FooterContainer>
      <LineContainer>
        <AboutTeam>
          ABOUT TEAM
          <Paragraph style={{top: '20px', left:'0px'}}><span style={blueText}>Trothly</span> is a photo certification issuance and</Paragraph>
          <Paragraph style={{top: '40px',left:'0px'}}>{secondPart.trim()}</Paragraph>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>

            <CircleButton  onClick={() => window.location.href='https://twitter.com'}>
                <ResponsiveImage src={TwitterIcon}  alt="Twitter" /> 
            </CircleButton>
            <CircleButton  onClick={() => window.location.href='https://instagram.com'}>
                <ResponsiveImage src={InstaIcon} alt="Instagram" /> 
            </CircleButton>
            <CircleButton  onClick={() => window.location.href='mailto:info@yourwebsite.com'}>
                <ResponsiveImage src={EmailIcon} alt="Email" /> 
            </CircleButton>
            <CircleButton  onClick={() => window.location.href='tel:+1234567890'}>
                <ResponsiveImage src={PhoneIcon}  alt="Phone" /> 
            </CircleButton>
          </div>
        </Contact>

      </LineContainer>

      <LineContainer>
        <Address>ADDRESS</Address>
      </LineContainer>
      
    </FooterContainer>
  );
};

export default Footer;