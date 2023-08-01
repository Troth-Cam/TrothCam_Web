import styled from "styled-components";
import SearchBox from "./header/SearchBox";
import Footer from './Footer';
import smileImg from './img/smileImg.svg';
import chertImg from './img/chert.png';
import pd1 from './img/pd1.png';
import pd2 from './img/pd2.png';
import pd3 from './img/pd3.png';
import pd4 from './img/pd4.png';
import pd5 from './img/pd5.png';
import pd6 from './img/pd6.png';


const ProductDetail = () => {

    
    return (
        <Container>
            <SearchBox></SearchBox>
            <SubContainer>
                <Col1>
                    <ImgDiv>
                        <StyledImage src={smileImg} alt="smileImg" />
                        <Text1>현재 소유자</Text1>
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





                <Col1>
                    <Product>Product Detail</Product>
                    <TextContainer>
                        <Title1>Smile</Title1>
                        <Title2>#12345</Title2>
                    </TextContainer>
                    <InfoContainer>
                     <Info>downloads</Info>
                    </InfoContainer>
                  
                    <Detail2>
                        <Day>최근 거래 3일전</Day>
                        <PayContainer>
                            <Pay1>판매가</Pay1>
                            <Pay2>  30,000KRW</Pay2>
                        </PayContainer>
                        <BuyButton>구매하기</BuyButton>
                    </Detail2>

                    <Detail3>
                        <ChertImage src={chertImg} alt="chertImg"/>
                        <BuyChert>거래내역</BuyChert>
                        <LastBuy>마지막으로 30,000KRW에 거래되었어요.</LastBuy>
                        <LastBuyDate>2023년 07월 27일 01:10:33 기준</LastBuyDate>



                    </Detail3>
                </Col1>
            </SubContainer>

            <FooterContainer>
                <Footer />
            </FooterContainer>
        
        </Container>
     
    );
  };
  
export default ProductDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:flex-start;
  
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
`;

const ImgDiv = styled.div`
  position:relative;
  width: 552px;
  height: 700px;
  margin-top:10%;


  linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    
    border-radius: 10px;
    border: 1px solid #222222;
`;

const StyledImage = styled.img`

  width:100%;
  height: 587px;
  object-fit: cover; 

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
  width: 552px;
  height: 837px;
  margin-top:15%;
 
  border-radius: 10px;
  linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  border: 1px solid #222222;
`;


const Pd1 = styled.img`
    width: 30px;
    height: 30px;
    margin-top:3%;
    margin-left:5%;

`;

const Pd1Text = styled.div`
    width: 171px;
    height: 44px;
    margin-top:-5%;
    margin-left:12%;
    font-family: Inter;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd2 = styled.img`
    width: 25px;
    height: 25px;
    margin-top:3%;
    margin-left:5%;
`;

const Pd2Text1 = styled.div`
    width: 171px;
    height: 44px;
    margin-top:-5%;
    margin-left:12%;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd2Text2 = styled.div`
    width: 482px;
    height: 144px;
    margin-top:0%;
    margin-left:5%;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd3 = styled.img`
    width: 30px;
    height: 30px;
    margin-top:20%;
    margin-left:5%;
`;

const Pd3Text1 = styled.div`
    width: 171px;
    height: 44px;
    margin-top:-6%;
    margin-left:12%;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd3Text2 = styled.div`
    width: 171px;
    height: 44px;
    margin-top:0%;
    margin-left:5%;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
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
    width: 171px;
    height: 44px;
    margin-top:-6%;
    margin-left:12%;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd4Text2 = styled.div`
    width: 187px;
    height: 38px;
    margin-top:0%;
    margin-left:5%;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;
const Pd5 = styled.img`
    width: 28px;
    height: 28px;
    margin-top:5%;
    margin-left:5%;
`;

const Pd5Text = styled.div`
    width: 171px;
    height: 44px;
    margin-top:-5%;
    margin-left:12%;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Pd6 = styled.img`
    width: 30px;
    height: 30px;
    margin-top:5%;
    margin-left:5%;
`;

const Pd6Text = styled.div`
    width: 171px;
    height: 44px;
    margin-top:-5%;
    margin-left:12%;
    font-family: Inter;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;






const Product = styled.div`
  
    width: 234px;
    height: 40px;
    margin-top:10%;
    margin-left:10%;
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

    width: 189px;
    height: 95px;
    margin-top:5%;
    margin-left:10%;
  

`;
const Title1 = styled.div`
  
    width: 189px;
    height: 95px;
    margin-top:0%;
    margin-left:0%;
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

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
   

`;

const Info = styled.div`
    margin-top:0px;
    margin-left:70px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;

`;



const Detail2 = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 701px;
    height: 325px;
    margin-top:5%;
    margin-left:10%;
   
    border-radius: 10px;
    border: 1px;

    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: 1px solid #222222;
    
`;

const Day = styled.div`
    width: 370px;
    height: 29px;
    margin-top:5%;
    margin-left:6%;
    font-family: Inter;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000

`;
const PayContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Pay1 = styled.div`
    width: 263px;
    height: 29px;
    margin-top:15%;
    margin-left:6%;
    font-family: Inter;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000

`;

const Pay2 = styled.div`
    width: 321px;
    height: 69px;
    margin-top:12%;
    margin-left:5%;
    font-family: Inter;
    font-size: 55px;
    font-weight: 400;
    line-height: 66px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000

`;

const BuyButton = styled.button`
    width: 618px;
    height: 68px;
    margin-top:3%;
    margin-left:6%;
    border-radius: 10px;
    background: #5980EF;
    font-family: Inter;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    color:#ffffff;
    

`;


const Detail3 = styled.div`
    width: 701px;
    height: 1020px;
    margin-top:5%;
    margin-left:10%;
    border-radius: 10px;
    border: 1px;
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: 1px solid #222222;

`;

const ChertImage= styled.img`
    width: 43px;
    height: 50px;
    margin-top:5%;
    margin-left:5%;
    
`;


const BuyChert=styled.div`
    width: 212px;
    height: 55px;
    margin-top:-7%;
    margin-left:14%;
    font-family: Inter;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;


`;

const LastBuy=styled.div`
    width: 621px;
    height: 43px;
    margin-top:5%;
    margin-left:10%;
    font-family: Inter;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;

`;

const LastBuyDate=styled.div`
    width: 621px;
    height: 43px;
    margin-top:0%;
    margin-left:10%;
    font-family: Inter;
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
`;
