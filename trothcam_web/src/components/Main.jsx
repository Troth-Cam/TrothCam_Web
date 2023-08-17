import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import RankBoard from "./RankBoard";
import PhotoBoard from "./PhotoBoard";
import Banner from "./img/banner.png";
import Footer from "./Footer";
import SearchBar from "./header/SearchBox";
import axios from "axios";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


SwiperCore.use([Navigation, Pagination, Autoplay]);


const FilterButton = styled.button`
  width: 43px;
  height: 29px;
  background-color: ${props => (props.clicked ? '#FFFFFFE5' : '#222222')};
  color: ${props => (props.clicked ? '#222222' : '#FFFFFF')};
  border: solid 1px;
  border-color: ${(props) => (props.clicked ? "#9FA0A3" : "#D9D9D9")};
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  margin-left: 16px;
  font-family: Inter;
`;

const RankButtonDiv = styled.div`
  background-color: #E8EAEF;
  width: 181px;
  height: 36px;
  position: flex;
  border-radius: 10px;
  align-items: center;
  display: flex;
  
`;

const WhiteButton = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 91px;
  height: 32px;
  position: absolute;
  border-radius: 10px;
  transition: all 1s ease;
  transform: translateX(${props => (props.clicked ? "0%" : "100%")});
  pointer-events:none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20.4%;
  padding-right: 20.4%; //280px
  margin-top: 50px;
  margin-bottom: 60px;
`;

const TopDiv = styled.text`
  display: inline-block;
  width: 90px;
  height: 32px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  color: ${props => (props.clicked ? '##222222' : '#22222296')};
`;

const LatestDiv = styled.text`
  display: inline-block;
  width: 90px;
  height: 32px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
  font-family: Inter;
  color: ${(props) => (props.clicked ? "##222222" : "#22222296")};
`;

const TextDiv = styled.div`
  position: absolute;
`;

const ViewAllButton = styled.div`
  width: 93px;
  height: 36px;
  background-color: #E8EAEF;
  font-family: Inter;
  color: #222222;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerBgDiv = styled.div`
  height: 667px;
  width: 100%;
  position: flex;
  text-align: center;
  background-image: linear-gradient(to bottom, #88a0e5 10%, #ffffff00 53%);
`;

const BannerTextDiv = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: #222222;
  padding-top: 190px;
  padding-bottom: 10px;
  display: block;
  font-family: Inter;
`;

const BannerTextDiv2 = styled.div`
  color: #000000;
  display: inline-block;
  font-size: 40px;
  font-weight: 400;
  font-family: Inter;
`;

const BannerTextDiv3 = styled.div`
  display: inline-block;
  font-weight: 400;
  font-size: 40px;
  color: #5980ef;
  margin-left: 20px;
  font-family: Inter;
`;

const BannerImg = styled.div`
  width: 806px;
  height: 178px;
  margin-top: 151px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px #000000;
  border-radius: 15px;
`;

const Container = styled.div`

overflow: scroll;
overflow: auto;
white-space: nowrap;
margin-left: auto;
margin-right: auto;

/* 스크롤바 스타일 */
&::-webkit-scrollbar {
  display none;
  overflow:hidden;
}
width: 61%;
`;
const SwiperContainer = styled(Swiper)`
height: 750px;
width: 100%
& .swiper-pagination-bullet {
    background: #2B2B2B !important;
}
`;

const Main = () => {
  const navigate = useNavigate();

const handleRankClick = () => {
  
  navigate("/rank");
};
  const [isTopButtonClick1, setIsTopButtonClicked1] = useState(true);
  const [isLatestButtonClick1, setIsLatestButtonClicked1] = useState(false);
  const [isTopButtonClick2, setIsTopButtonClicked2] = useState(true);
  const [isLatestButtonClick2, setIsLatestButtonClicked2] = useState(false);
  const rankList = [
    { Name: "이름1", price: "17,000", owner: "dsdsddsdsadsads" },
    { Name: "이름2", price: "17000", owner: "dsdsddsdsadsads" },
    { Name: "이름3", price: "17000", owner: "dsdsddsdsadsads" },
    { Name: "이름4", price: "17000", owner: "dsdsddsdsadsads" },
    { Name: "이름5", price: "17000", owner: "dsdsddsdsadsads" },
    { Name: "이름6", price: "17000", owner: "dsdsddsdsadsads" },
    { Name: "이름7", price: "17000", owner: "dsdsddsdsadsads" },
    { Name: "이름8", price: "17000", owner: "dsdsddsdsadsads" },
  ];

  const photoList = [
    {"Name": "이름", "price": "17000", "owner": "sdsdsds"},
    {"Name": "이름2", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},
    {"Name": "이름4", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},
  ];
  

  const clickTopButton1 = () => {
    if(!isTopButtonClick1){
      setIsTopButtonClicked1(!isTopButtonClick1);
      setIsLatestButtonClicked1(!isLatestButtonClick1);
      //axios.post("/") top버튼이 눌렀으면
    }
  };

  const clickLatestButton1 = () =>{
    if(!isLatestButtonClick1){
      setIsTopButtonClicked1(!isTopButtonClick1);
      setIsLatestButtonClicked1(!isLatestButtonClick1);

      //axios.post("/") rank버튼이 눌렀으면
    }
  }
  const clickTopButton2 = () => {
    if(!isTopButtonClick2){
      setIsTopButtonClicked2(!isTopButtonClick2);
      setIsLatestButtonClicked2(!isLatestButtonClick2);
      console.log("clickTop");
            
      //axios.post("/") top버튼이 눌렀으면
    }
  };

  const clickLatestButton2 = () =>{
    if(!isLatestButtonClick2){
      setIsTopButtonClicked2(!isTopButtonClick2);
      setIsLatestButtonClicked2(!isLatestButtonClick2);
      
      //axios.post("/") rank버튼이 눌렀으면
    }
  }
  return (
    <div>
      <SearchBar />
      <SwiperContainer
        className="banner"
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}>
        <SwiperSlide>
          <BannerBgDiv>
            <BannerTextDiv>간단하게 찍고, 간단하게 판매하세요.</BannerTextDiv>
            <BannerTextDiv2>신뢰와 함께, </BannerTextDiv2>
            <BannerTextDiv3>Trothy</BannerTextDiv3>
            <BannerImg />
          </BannerBgDiv>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </SwiperContainer>

      <ButtonContainer>
        <RankButtonDiv>
        </RankButtonDiv>
        <WhiteButton clicked={isTopButtonClick1} />
        <TextDiv>
            <TopDiv clicked={isTopButtonClick1} onClick={clickTopButton1}>Top</TopDiv>
            <LatestDiv clicked={isLatestButtonClick1} onClick={clickLatestButton1}>Latest</LatestDiv>
          </TextDiv>
        <div>
          <ViewAllButton onClick={handleRankClick}>View all</ViewAllButton>
        </div>
      </ButtonContainer>
    
      <RankBoard rankList={rankList} />

      <ButtonContainer style={{marginBottom:'0px'}}>
      <RankButtonDiv>
        </RankButtonDiv>
        <WhiteButton clicked={isTopButtonClick2} />
        <TextDiv>
            <TopDiv clicked={isTopButtonClick2} onClick={clickTopButton2}>Top</TopDiv>
            <LatestDiv clicked={isLatestButtonClick2} onClick={clickLatestButton2}>Latest</LatestDiv>
          </TextDiv>      
      </ButtonContainer>

      <Container>
        <ScrollMenu onWheel={onWheel}>
          <PhotoBoard photoList={photoList} />
        </ScrollMenu>
      </Container>
      <div style={{marginTop:"378px"}}/>
      <Footer/>
    </div>
  );
};

export default Main;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
