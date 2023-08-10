import styled from "styled-components";
import React, { useState } from 'react';
import SearchBox from "./header/SearchBox";
import Footer from './Footer';
import Valid from './Valid';
import Unvalid from './Unvalid';
import smileImg from './img/smileImg.svg';
import heartIcon from './img/icon_heart.png';
import PersonIcon from './img/person_icon.png';
import DownloadIcon from './img/download_icon.png';
import blackheartIcon from './img/blackheart_icon.png';
import eyeIcon from './img/eye_icon.png';
import chertImg from './img/chert.png';
import pd1 from './img/pd1.png';
import pd2 from './img/pd2.png';
import pd3 from './img/pd3.png';
import pd4 from './img/pd4.png';
import pd5 from './img/pd5.png';
import pd6 from './img/pd6.png';



const Certification = () => {

    
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const Modal = ({ image, onClose }) => (
        <ModalBackdrop onClick={onClose}>
          <ModalContent src={image} onClick={(e) => e.stopPropagation()} />
        </ModalBackdrop>
      );

    const [showValid, setShowValid] = useState(true);

    const handleButtonClick = () => {
        setShowValid(!showValid);
    };


    return (
        <Container>
            <SearchBox></SearchBox>
            <Col>
                <Product>Product Detail</Product>
                <TextContainer>
                        <Title1>Smile</Title1>
                        <Title2>#12345</Title2>
                            <HeartImg src={heartIcon} alt="heartIcon" />
                            
                </TextContainer>

                <InfoContainer>
                            <DownloadImg src={DownloadIcon} alt="DownloadIcon"/>
                            <Info1> 13 downloads</Info1>
                            <EyeImg src={eyeIcon} alt="eyeIcon"/>
                            <Info2> 39 views</Info2>
                            <BlackheartImg src={blackheartIcon} alt="blackheartIcon"/>
                            <Info3> 5 likes</Info3>
                            
                </InfoContainer>
            </Col>
            <SubContainer>
                    
                <Col1>
                    <ImgDiv>
                        <StyledImage src={smileImg} alt="smileImg" onClick={openModal}  />
                        {showModal && <Modal image={smileImg} onClose={closeModal} />}
                        <Text1>소유자</Text1>
                        <Text2>원작자</Text2>
                    </ImgDiv>
                   
                    <Detail1>
                        <Pd1 src={pd1} alt="pd1" />
                        <Pd1Text>상세정보</Pd1Text>
                        <Pd2 src={pd2} alt="pd2" />
                        <Pd2Text1>사진 설명</Pd2Text1>
                        <Pd2Text2>ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsumipsum ipsum ipsum ipsumipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsumipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum </Pd2Text2>
                        <Pd3 src={pd3} alt="pd3" />
                        <Pd3Text1>촬영 렌즈</Pd3Text1>
                        <Pd3Text2>렌즈 정보 없음</Pd3Text2>
                        <Pd4 src={pd4} alt="pd4" />
                        <Pd4Text1>촬영 위치</Pd4Text1>
                        <Pd4Text2>위치 정보 없음</Pd4Text2>
                        <Pd5 src={pd5} alt="pd5" />
                        <Pd5Text>해상도</Pd5Text>
                        <Pd6 src={pd6} alt="pd6" />
                        <Pd6Text>용량</Pd6Text>
                    </Detail1>
                </Col1>





                <Col2>
                    
                    <Detail2>
                        {showValid ? <Valid onButtonClick={handleButtonClick} /> : <Unvalid />}
       
                    </Detail2>

                    <Detail3>
                        <ChertImage src={chertImg} alt="chertImg"/>
                        <BuyChert>거래내역</BuyChert>
                        <LastBuy>마지막으로 <span style={{color: '#5980EF'}}>30,000KRW</span>에 거래되었어요.</LastBuy>
                        <LastBuyDate>2023년 07월 27일 01:10:33 기준</LastBuyDate>
                        <BuydetailContainer>
                            <BuyDetail>판매자</BuyDetail>
                            <BuyDetail>구매자</BuyDetail>
                            <BuyDetail>가격</BuyDetail>
                            <BuyDetail marginLeft="80px">시간</BuyDetail>
                        </BuydetailContainer>
                        <Line />
                        <BuydetailContainer>
                            <BuyerDetail>온브</BuyerDetail>
                            <BuyerDetail>블루</BuyerDetail>
                            <BuyerDetail marginLeft="0px">30,000KRW</BuyerDetail>
                            <BuyerDetail marginLeft="0px">2시간전</BuyerDetail>
                        </BuydetailContainer>
                       
                        <BuydetailContainer>
                            <BuyerDetail>온브</BuyerDetail>
                            <BuyerDetail>블루</BuyerDetail>
                            <BuyerDetail marginLeft="0px">30,000KRW</BuyerDetail>
                            <BuyerDetail marginLeft="0px">10시간전</BuyerDetail>
                        </BuydetailContainer>
                        
                        <BuydetailContainer>
                            <BuyerDetail>온브</BuyerDetail>
                            <BuyerDetail>블루</BuyerDetail>
                            <BuyerDetail marginLeft="0px">30,000KRW</BuyerDetail>
                            <BuyerDetail marginLeft="0px">1일전</BuyerDetail>
                        </BuydetailContainer>


                    </Detail3>
                </Col2>
            </SubContainer>

            <FooterContainer>
                <Footer />
            </FooterContainer>
        
        </Container>
     
    );
  };
  
export default Certification;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
`;

const Col = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items:center;
    //margin-left:-50%;
    text-align: left;   
  
`;


const Product = styled.div`
    width: 234px;
    height: 40px;
    margin-top:20px;
    margin-left:-32%;
    font-family: Inria Sans;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #5980EF;

`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;  
    width: 189px;
    height: 95px;
    margin-top:10px;
    margin-left:-27%;
    @media (max-width: 980px) {
        margin-left:-22%;
    
    }

`;
const Title1 = styled.div`
  
    width: 189px;
    height: 95px;
    margin-top:0%;
    margin-left:-32%;
    font-family: Inter;
    font-size: 60px;
    font-weight: 700;
    line-height: 73px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;

`;

const Title2 = styled.div`
  
    width: 177px;
    height: 41px;
    margin-top:8%;
    margin-left:10%;
    font-family: Inter;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;

    color: #222222;

`;

const HeartImg = styled.img`
    width: 41.63045120239258px;
    height: 49.58951950073242px;
    margin-left: 230%;

    @media (max-width: 980px) {
        margin-left:60%;
    
    }
`;



const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;  
    margin-left:-22%;
    @media (max-width: 980px) {
        margin-left:-10%;
    
    }

`;
const DownloadImg= styled.img`
    width:30px;
    height:30px;
    margin-left:70px;
`;

const Info1= styled.div`
    margin-top:0px;
    margin-left:10px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;
`;

const EyeImg= styled.img`
    width:30px;
    height:28px;
    margin-left:45px;
`;

const Info2= styled.div`
    margin-top:0px;
    margin-left:10px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;
`;

const BlackheartImg= styled.img`
    width:30px;
    height:30px;
    margin-left:45px;
`;

const Info3= styled.div`
    margin-top:0px;
    margin-left:10px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;
`;



const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    }

`;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top:100px;
    width:100%;
    height: 237px;
    align-items: center;
    background-color: #E8EAEF;
`;


const Col1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left:-9%
    @media (max-width: 680px) {
    justify-content: center;
    align-items: center;
    margin-top:340px;
    margin-left:-5%;
    }

`;

const Col2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top:35px;

    margin-left:-25px;

    @media (max-width:750px) {
    justify-content: center;
    align-items: center;
    margin-top:280px;
    margin-left:-6%;
    }
    @media (max-width:700px) {
    justify-content: center;
    align-items: center;
    margin-top:280px;
    margin-left:-15%;
    }
`;

const ImgDiv = styled.div`
  position:relative;
  width: 382px;
  height: 520px;
  margin-top:10%;


   
    border-radius: 10px;
    border: 1px solid #9fa0a3;
   
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));


`;

const StyledImage = styled.img`

  width:100%;
  height: 393px;
  object-fit: cover; 

`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ModalContent = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const Text1 = styled.div`
    width: 123px;
    height: 30px;
    margin-top:20px;
    margin-left:20px;
    font-family: Inter;
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`;

const Text2 = styled.div`
    width: 69px;
    height: 30px;
    margin-top:11px;
    margin-left:20px;
    font-family: Inter;
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
    

`;



const Detail1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 382px;
    height: 616px;
    margin-top:5%;

    border-radius: 10px;
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: 1px solid #9FA0A3;
`;


const Pd1 = styled.img`
    width: 40px;
    height: 40px;
    margin-top:5%;
    margin-left:5%;

`;

const Pd1Text = styled.div`
    width: 150px;
    height: 24px;
    margin-top:-9%;
    margin-left:16%;
    font-family: Inter;
    font-size: 25px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd2 = styled.img`
    width: 35px;
    height: 35px;
    margin-top:5%;
    margin-left:6%;
`;

const Pd2Text1 = styled.div`
    width: 84px;
    height: 25px;
    margin-top:-9%;
    margin-left:17%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd2Text2 = styled.div`
    width: 307px;
    height: 102px;
    margin-top:2%;
    margin-left:7%;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`;

const Pd3 = styled.img`
    width: 37px;
    height: 30px;
    margin-top:10%;
    margin-left:5%;
`;

const Pd3Text1 = styled.div`
    width: 132px;
    height: 30px;
    margin-top:-7%;
    margin-left:15%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd3Text2 = styled.div`
    width: 187px;
    height: 38px;
    margin-top:0%;
    margin-left:6%;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd4 = styled.img`
    width: 24px;
    height: 29px;
    margin-top:5%;
    margin-left:5%;
`;

const Pd4Text1 = styled.div`
    width: 132px;
    height: 30px;
    margin-top:-6%;
    margin-left:14%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd4Text2 = styled.div`
    width: 187px;
    height: 38px;
    margin-top:0%;
    margin-left:6%;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;
const Pd5 = styled.img`
    width: 24px;
    height: 23px;
    margin-top:5%;
    margin-left:5%;
`;

const Pd5Text = styled.div`
    width: 132px;
    height: 30px;
    margin-top:-6%;
    margin-left:13%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd6 = styled.img`
    width: 25px;
    height: 25px;
    margin-top:5%;
    margin-left:5%;
`;

const Pd6Text = styled.div`
    width: 132px;
    height: 30px;
    margin-top:-5%;
    margin-left:13%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;


const Detail2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:50px;

    @media (max-width:680px) {
        justify-content: center;
        align-items: center;
        margin-top:10px;
        margin-left:10%;
    
`;



const Detail3 = styled.div`
    width: 379px;
    height: 593px;
    margin-top:10px;
    
    margin-left:10%;
    border-radius: 10px;
    border: 1px;
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: 1px solid #9FA0A3;

    @media (max-width:680px) {
        justify-content: center;
        align-items: center;
        margin-top:20px;
        margin-left:25%;
      

`;

const ChertImage= styled.img`
    width: 27px;
    height: 30px;
    margin-top:7%;
    margin-left:5%;
    
`;


const BuyChert=styled.div`
    width: 212px;
    height: 33px;
    margin-top:-8%;
    margin-left:16%;
    font-family: Inter;
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;


`;

const LastBuy=styled.div`
    width: 250px;
    height: 43px;
    margin-top:2%;
    margin-left:6%;
    font-family: Inter;
    font-size: 23px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

`;

const LastBuyDate=styled.div`
    width: 426px;
    height: 17px;
    margin-top:10%;
    margin-left:6%;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #9F9F9F;

`;

const BuydetailContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-text:center;
   
`;

const BuyDetail=styled.div`
    margin-top:20px;
    margin-left:40px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    color: #777777;
`;

const Line = styled.hr`
    width: 317px;
    display: flex;
    justify-content: center;
    align-items: center;
    angle: -0.05 deg;
    margin-top:10px;
    border: 1px solid #BCBDC1;

`;

const BuyerDetail=styled.div`
    margin-top:20px;
    margin-left: ${(props) => props.marginLeft || '20px'};
    padding-left:30px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

`;
