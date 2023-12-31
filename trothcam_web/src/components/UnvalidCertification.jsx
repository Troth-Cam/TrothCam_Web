import styled from "styled-components";
import React, { useState, useEffect  } from 'react';
import SearchBox from "./header/SearchBox";
import Footer from './Footer';
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
import infoImg from './img/infoIcon.png';
import { useNavigate,useLocation } from "react-router-dom";

import axios from 'axios';

const UnvalidCertification = () => {
   
    const location = useLocation();
    const stateData = location.state.id;
    const productId=stateData;
    console.log(stateData);

    const accessToken = localStorage.getItem("accessToken");

    const navigate = useNavigate();

    // 버튼 [ 누르면 비공개, 페이지 이동]
    //const [serverResponse, setServerResponse] = useState(null);

    // const handleButtonClick = () => {
    //     axios.patch(`api/products/${productId}/convert-to-private`, {
    //         headers: {
    //             "Authorization": `Bearer ${accessToken}`
    //         }
    //     })
    //     .then(response => {
    //         console.log('Response:', response.data);
    //         //navigate("/ValidCertification", { state: { productId: productId } });
    //         alert("비공개로 전환하였습니다");
    //     })
    //     .catch(error => {
    //         console.error('Error sending PATCH request:', error);
    //     });
    //   };

    // 버튼 [ 누르면 비공개, 페이지 이동]
    const url = `/api/products/${productId}/convert-to-private`
    //const [serverResponse, setServerResponse] = useState(null);

    const handleButtonClick = () => {
        axios.patch(url, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => {
            console.log('Response:', response.data);
    
            // Store the response data in the state
            //setServerResponse(response.data); // json객체 저장
    
            //navigate("/ValidCertification", { state: { productId: productId } });
            navigate("/Detail_me");
        })
        .catch(error => {
            console.error('Error sending PATCH request:', error);
        });
    };




    //시간 계산 - 최근 거래 일자 계산
    const now = new Date(); //현재시각
    //const updatedAt = new Date(productDetail.result.updatedAt); //최근 거래 일자
    //const diffMilliseconds = now - updatedAt; //차이 계산
    //const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

     // 현재 시각 표현
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0에서 시작하므로 1을 더해야 합니다.
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    //const [product, setProduct] = useState({});
    const formattedDate = `${year}년 ${month}월 ${date}일 ${hours}:${minutes}:${seconds} 기준`;


    // 토큰 15자 이상
    function truncateText(text, length) {
        return text.length > length
            ? text.substring(0, length) + '...'
            : text;
    }

  

    //모달 관련 함수들
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

    // useEffect(()=>{
    //     // const stateData = location.state.id;
    //     // console.log(stateData);
    //     // const productId = location.state.id;
    //     console.log(localStorage.getItem("accessToken"));

      
    //     axios.get(`/api/products/public/${productId}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }})
    //         .then((response) =>{
    //             if(response.data){
    //                 setProduct(response.data.result);
    //                 //console.log(response);
    //             }
                
    //         })
    //         .catch((err) => {

    //         });
    // },[]);
   
    const [detail, setProductDetail] = useState({
        productInfo: {
          productId: "",
          title: "",
          tags: "",
          views: "",
          likeCount: "",
          liked: "",
        },
        imageInfo: {
          imageId: "",
          url: "",
          ownerWebToken: "",
          authorshipWebToken: "",
          description: "",
          lens: "",
          location: "",
          resolution: "",
          size: "",
        },
        historyInfoList: [
          {
            historyId: "",
            sellerWebToken: "",
            buyerWebToken: "",
            price: "",
            soldAt: "",
          },
        ],
      });
    
    useEffect(() => {
      
        const fetchProductDetail = async () => {
            
            try {
                const response = await axios.get(`/api/products/public/${productId}`, 
                
                {headers: {"Authorization" : `Bearer ${accessToken}`}});
                //console.log(accessToken);
    
                if (response.data) {
                    setProductDetail(response.data.result);
                    console.log(response.data);
                } else {
                    console.error('Failed to fetch product details.');
                }
            } catch (error) {
                //console.error('Error fetching product details:', error);
            }
        };
    
        fetchProductDetail();
    }, []);



    return (
        <Container>
            <div>
                <SearchBox></SearchBox>
            </div>
            <Col>
                <Product>Product Detail</Product>
                <TextContainer>
                        <Title1>{detail.productInfo.title}</Title1>
                        <Title2>#{detail.productInfo.tags}</Title2>
                            <HeartImg src={blackheartIcon} alt="heartIcon" />
                            
                </TextContainer>

                <InfoContainer>
                        <EyeImg src={eyeIcon} alt="eyeIcon"/>
                        <Info2>  {detail.productInfo.views} views</Info2>
                        <BlackheartImg src={blackheartIcon} alt="blackheartIcon"/>
                        <Info3>  {detail.productInfo.likeCount} likes</Info3>
                            
                </InfoContainer>
            </Col>
            

            <SubContainer>
                    
                <Col1>
                    <ImgDiv>
                        <StyledImage src={smileImg} alt="smileImg" onClick={openModal}  />
                        {showModal && <Modal image={smileImg} onClose={closeModal} />}
                        <InfoContainer1>
                            <Text1>소유자 </Text1>
                            <Text1token> {truncateText(detail.imageInfo.ownerWebToken, 15)}</Text1token>
                        </InfoContainer1>
                        <InfoContainer1>
                            <Text2>원작자 </Text2>
                            <Text2token> {truncateText(detail.imageInfo.authorshipWebToken, 15)}</Text2token>
                        </InfoContainer1>
                    </ImgDiv>
                   
                    <Detail1>
                        <Pd1 src={pd1} alt="pd1" />
                        <Pd1Text>상세정보</Pd1Text>
                        <Pd2 src={pd2} alt="pd2" />
                        <Pd2Text1>사진 설명</Pd2Text1>
                        <Pd2Text2>{detail.imageInfo.description}</Pd2Text2>
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
                    <Container1>
                        
                        <Day>최근 거래 3일전</Day>
                        <PayContainer>
                            <Pay1>판매가</Pay1>
                            <Pay2> KRW</Pay2>
                        </PayContainer>
                        <BuyButton onClick={handleButtonClick}>비공개하기 (판매 취소하기)</BuyButton>

                    </Container1>
                    </Detail2>

                    <Detail3>
                        <ChertImage src={chertImg} alt="chertImg"/>
                        <BuyChert>거래내역</BuyChert>
                        {
                        detail.histories && detail.histories.length > 0 ? (
                            <LastBuy>
                            마지막으로 <span style={{color: '#5980EF'}}> {detail.historyInfoList[0].price}KRW</span>에 거래되었어요.
                            </LastBuy>
                        ) : (
                            <LastBuy>
                            데이터 로딩 중...
                            </LastBuy>
                        )
                        }
                        {
                        detail.historyInfoList && detail.historyInfoList.length > 0 ? (
                            <LastBuyDate>
                            {detail.historyInfoList[0].soldAt}
                            </LastBuyDate>
                        ) : (
                            <LastBuyDate>
                            날짜 로딩 중...
                            </LastBuyDate>
                        )
                        }
                        <BuydetailContainer>
                            <BuyDetail>판매자</BuyDetail>
                            <BuyDetail>구매자</BuyDetail>
                            <BuyDetail>가격</BuyDetail>
                            <BuyDetail marginLeft="80px">시간</BuyDetail>
                        </BuydetailContainer>
                        <Line />
                        <BuydetailContainer>
                            {/* <BuyerDetail1>{truncateText(productDetail.result.ownerToken,8)}</BuyerDetail1>
                            <BuyerDetail1>{truncateText(productDetail.result.authorshipToken, 8)}</BuyerDetail1>
                            <BuyerDetail2 marginLeft="0px">{productDetail.result.histories[0].price}</BuyerDetail2>
                            <BuyerDetail2 marginLeft="0px">23.8.5</BuyerDetail2> */}
                        </BuydetailContainer>
                       
                        <BuydetailContainer>
                            {/* <BuyerDetail1>{truncateText(productDetail.result.ownerToken,8)}</BuyerDetail1>
                            <BuyerDetail1>{truncateText(productDetail.result.authorshipToken, 8)}</BuyerDetail1>
                            <BuyerDetail2 marginLeft="0px">{productDetail.result.histories[1].price}</BuyerDetail2>
                            <BuyerDetail2 marginLeft="0px">23.8.5</BuyerDetail2> */}
                        </BuydetailContainer>
                        
                        <BuydetailContainer>
                            {/* <BuyerDetail1>{truncateText(productDetail.result.ownerToken,8)}</BuyerDetail1>
                            <BuyerDetail1>{truncateText(productDetail.result.authorshipToken, 8)}</BuyerDetail1>
                            <BuyerDetail2 marginLeft="0px">{productDetail.result.histories[2].price}</BuyerDetail2>
                            <BuyerDetail2 marginLeft="0px">23.8.5</BuyerDetail2> */}
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
  
export default UnvalidCertification;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

const Col = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  align-items:center;
  margin-left:-3%;
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
    width: 61.35px;
    height:60px;
    margin-left: 290%;

    @media (max-width: 1400px) {
        margin-left:250%;
       
      }

    @media (max-width: 980px) {
        margin-left:50%;
       
      }
`;



const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;  
    margin-left:-30%;
    @media (max-width: 980px) {
        margin-left:-30%;
       
      }

`;


const EyeImg= styled.img`
    width:30px;
    height:28px;
    margin-left:0px;
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
    height:28px;
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
  align-items:center;
  //margin-left:-4%;

  @media (max-width: 1400px) {
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
  
  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
    margin-top:0px;
    margin-left:0%;
  }

`;

const Col2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top:40px;


    @media (max-width:780px) {
    justify-content: center;
    align-items: center;
    margin-top:2%;
    margin-right:6%
    
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


const InfoContainer1 = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;  
   // margin-left:-30%;
    @media (max-width: 980px) {
        //margin-left:-30%;
       
      }

`;
const Text1 = styled.div`
    width: 56px;
    height: 24px;
    margin-top:20px;
    margin-left:20px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`;

const Text1token = styled.div`
  
    margin-top:20px;
    margin-left:20px;
    font-family: Inter;
    font-size: 23px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #5980EF;
`;

const Text2 = styled.div`
    width: 56px;
    height: 24px;
    margin-top:11px;
    margin-left:20px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;

`;

const Text2token = styled.div`
  
    margin-top:20px;
    margin-left:20px;
    font-family: Inter;
    font-size: 23px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #5980EF;
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


    @media (max-width:680px) {
        //justify-content: center;
        //align-items: center;
       

    
`;




const Container1 = styled.div`
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



const Detail3 = styled.div`
    width: 379px;
    height: 593px;
    margin-top:15px;
    margin-left:10%;
    border-radius: 10px;
    border: 1px;
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: 1px solid #9FA0A3;

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
    margin-left:43px;
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

const BuyerDetail1=styled.div`
    margin-top:20px;
    margin-left: ${(props) => props.marginLeft || '16px'};
    padding-left:16px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color:#5980EF;

`;


const BuyerDetail2=styled.div`
    width:78px;
    margin-top:20px;
    margin-left: ${(props) => props.marginLeft || '16px'};
    padding-left:16px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

`;