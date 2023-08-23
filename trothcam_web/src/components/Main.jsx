import React, { useEffect, useState } from "react";
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
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import api from "../apis/axios";



SwiperCore.use([Navigation, Pagination, Autoplay]);



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
  const [totalTopPage, setTotalTopPage] = useState(0);
  const [totalLatestPage, setTotalLatestPage] = useState(0);
  const navigate = useNavigate();

const handleRankClick = () => {
  
  navigate("/rank");
};

  const accessToken = localStorage.getItem("accessToken");
  
  const [isTopButtonClick1, setIsTopButtonClicked1] = useState(false);
  const [isLatestButtonClick1, setIsLatestButtonClicked1] = useState(true);
  const [isTopButtonClick2, setIsTopButtonClicked2] = useState(true);
  const [isLatestButtonClick2, setIsLatestButtonClicked2] = useState(false);
  const [rankList, setRankList] = useState([]);
  const [photoList, setPhotoList] = useState([]);

  const [pageTop, setPageTop] = useState(0);
  const [pageLatest, setPageLatest] = useState(0);

const productFetch = () =>{
  setTimeout(() => {
    if (isTopButtonClick2) {
      console.log("clickTop");
      callTopPagingApi();
    } else {
      console.log("clickLatest");
      callLatestPagingApi();
    }

    const scrollContainer = document.getElementById("scroll-container");
    console.log(`페이지 수 ${pageLatest} 토탈 페이지 ${totalLatestPage}`)
    if (scrollContainer ) {
      scrollContainer.scrollLeft = 0;
    }

  }, 1000); 
};

const callTopPagingApi = () =>{
  console.log("topAPi")
  console.log(`${totalTopPage} - 1 > ${pageTop}`);

  //페이지가 0이고(1로 안넘어가서 해줌, 한페이지 이상일 떄)
  if(pageTop == totalTopPage){
    setPageTop(0);
  }
  else if(pageTop == totalTopPage - 1){
    setPageTop(0);
  }
  else if(pageTop == 0 && totalTopPage != 1){
    if(accessToken){
      axios.get(`/api/${localStorage.getItem("id")}/product-ranking/top/1`, {
        headers: { "Authorization": `Bearer ${accessToken}` }
      })
      .then((response) => {
        setPhotoList(response.data.result.getProductRankResDto);
        console.log("latest버튼 로그인 했을 때 ");
        console.log(response.data.result);
        setPageTop(pageTop => pageTop + 1);
        console.log(`페이지 ${pageTop}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    else{
      axios.get(`/api/product-ranking/top/1`, {
        headers: { "Authorization": `Bearer ${accessToken}` }
      })
      .then((response) => {
        setPhotoList(response.data.result.getProductRankResDto);
        console.log("latest버튼 로그인 했을 때 ");
        console.log(response.data.result);
        setPageTop(pageTop => pageTop + 1);
        console.log(`페이지 ${pageTop}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  else{ //페이지가 0 이상이고 

      if(totalTopPage - 1 > pageTop){
        if(accessToken){ //회원일떄
          axios.get(`/api/${localStorage.getItem("id")}/product-ranking/top/${pageTop}`, {
            headers: { "Authorization": `Bearer ${accessToken}` }
          })
          .then((response) => {
            setPhotoList(response.data.result.getProductRankResDto);
            console.log("latest버튼 로그인 했을 때 ");
            console.log(response.data.result);
            setPageTop(pageTop => pageTop + 1);
            console.log(`페이지 ${pageTop}`);
          })
          .catch((err) => {
            console.log(err);
          });
        }
        else{ //로그인 아닐 떄 
          axios.get(`/api/product-ranking/latest/${pageTop}`, {
            headers: { "Authorization": `Bearer ${accessToken}` }
          })
          .then((response) => {
            setPhotoList(response.data.result.getProductRankResDto);
            console.log("latest버튼 로그인 했을 때 ");
            console.log(response.data.result);
            setPageTop(pageTop => pageTop + 1);
            console.log(`페이지 ${pageTop}`);
          })
          .catch((err) => {
            console.log(err);
          });
        }
    }
  }
}


const callLatestPagingApi = () => {
  console.log("LatestAPi")
  

  //페이지가 0이고(1로 안넘어가서 해줌, 한페이지 이상일 떄)
  if(pageLatest == totalLatestPage ){
    console.log(`pageLatest 같음${pageLatest}`)
    setPageLatest(0);
  }
  else if(pageLatest == totalLatestPage - 1){
    console.log(`pageLatest  하나 작음${pageLatest}`)
    setPageLatest(0);
  }
  else if(pageLatest == 0 && totalLatestPage != 1){
    if(accessToken){
      axios.get(`/api/${localStorage.getItem("id")}/product-ranking/latest/1`, {
        headers: { "Authorization": `Bearer ${accessToken}` }
      })
      .then((response) => {
        setPhotoList(response.data.result.getProductRankResDto);
        console.log("latest버튼 로그인 했을 때 ");
        console.log(response.data.result);
        setPageLatest(pageLatest => pageLatest + 1);
        console.log(`페이지 ${pageLatest}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    else{
      axios.get(`/api/product-ranking/latest/1`, {
        headers: { "Authorization": `Bearer ${accessToken}` }
      })
      .then((response) => {
        setPhotoList(response.data.result.getProductRankResDto);
        console.log("latest버튼 로그인 했을 때 ");
        console.log(response.data.result);
        setPageLatest(pageLatest => pageLatest + 1);
        console.log(`로그인 안됨 페이지 ${pageLatest}`);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  else{ //페이지가 0 이상이고 

      if(totalLatestPage - 1 > pageLatest){
        if(accessToken){ //회원일떄
          axios.get(`/api/${localStorage.getItem("id")}/product-ranking/latest/${pageLatest}`, {
            headers: { "Authorization": `Bearer ${accessToken}` }
          })
          .then((response) => {
            setPhotoList(response.data.result.getProductRankResDto);
            console.log("latest버튼 로그인 했을 때 ");
            console.log(response.data.result);
            setPageLatest(pageLatest => pageLatest + 1);
            console.log(`페이지 ${pageLatest}`);
          })
          .catch((err) => {
            console.log(err);
          });
        }
        else{ //로그인 아닐 떄 
          axios.get(`/api/product-ranking/latest/${pageLatest}`, {
            headers: { "Authorization": `Bearer ${accessToken}` }
          })
          .then((response) => {
            setPhotoList(response.data.result.getProductRankResDto);
            console.log("latest버튼 로그인 했을 때 ");
            console.log(response.data.result);
            setPageLatest(pageLatest => pageLatest + 1);
            console.log(`페이지 ${pageLatest}`);
          })
          .catch((err) => {
            console.log(err);
          });
        }
    }
  }
}


useEffect(() => {
  const accessToken = localStorage.getItem("accessToken");
  const url = `https://trothly.com/api/${localStorage.getItem("id")}/product-ranking/top/0`
  api.get('/api/product-ranking/top')
    .then((response)=>{
      setRankList(response.data.result);
      // console.log(`top data ${response.data.result}`);
    })
    .catch((err) =>{
      // console.log(e);
    });

    //로그인했으면
    if(localStorage.getItem("accessToken")){

      axios.get(`/api/${localStorage.getItem("id")}/product-ranking/top/0`,{headers: {
        "Authorization": `Bearer ${accessToken}`}
      })
      .then((response)=>{
        console.log("top 로그임했을때-초기값");
        console.log(response.data.result);
        setPhotoList(response.data.result.getProductRankResDto);
      })
      .catch((err) =>{
        console.log(accessToken)
        console.log("로그인 했을 떄 불러오기 실패");
        console.log(err);
      });
    }
    else{
      api.get('/api/product-ranking/top/0')
      .then((response)=>{
        console.log(",top 로그임 안!!!!!!!! 했을때-초기값");
        setPhotoList(response.data.result.getProductRankResDto);

        // setPageTop((pageTop=>pageTop + 1))
      })
      .catch((err) =>{
        console.log(err);
      });
  }
}, []);

  

  const clickTopButton1 = () => {
    if(!isTopButtonClick1){
      setIsTopButtonClicked1(!isTopButtonClick1);
      setIsLatestButtonClicked1(!isLatestButtonClick1);
      api.get('/api/product-ranking/top')
      .then((response)=>{
        console.log(response.data);
        setRankList(response.data.result);
        console.log(`top data ${response.data.result}`);
      })
      .catch((err) =>{
        console.log(err);
      });
      
    }
  };

  const clickLatestButton1 = () =>{
    if(!isLatestButtonClick1){
      setIsTopButtonClicked1(!isTopButtonClick1);
      setIsLatestButtonClicked1(!isLatestButtonClick1);

      api.get('/api/product-ranking/latest')
      .then((response)=>{
        console.log(response.data);
        setRankList(response.data.result);
        console.log(`latest data ${response.data.result}`);
      })
      .catch((err) =>{
        console.log(err);
      });
    }
  }

  const clickTopButton2 = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(isTopButtonClick2)
    if(!isTopButtonClick2){
      setIsTopButtonClicked2(!isTopButtonClick2);
      setIsLatestButtonClicked2(!isLatestButtonClick2);

      if(accessToken){
        console.log(`click 2 함수 ${pageTop}`)
        axios.get(`/api/${localStorage.getItem("id")}/product-ranking/top/${pageTop}`,{headers: {
          "Authorization": `Bearer ${accessToken}`}
        })
        .then((response)=>{
         setPhotoList(response.data.result.getProductRankResDto);
         console.log("top버튼 로그인 했을 때")
          console.log(response.data.result);
          setTotalTopPage(response.data.result.totalPages);
          })
        .catch((err) =>{
          console.log(err);
        });
      }
      else{
      api.get(`/api/product-ranking/top/${pageTop}`)
        .then((response)=>{
         setPhotoList(response.data.result.getProductRankResDto);
         console.log("top버튼 로그인 안!!!!!!!! 했을 때")
        console.log(response.data.result);
        setTotalTopPage(response.data.result.totalPages);
        })
      .catch((err) =>{
        console.log(err);
      });
    }

    }
  };
  const clickLatestButton2 = () =>{
    //latest버튼 눌렀을 때 

    if(!isLatestButtonClick2){
      setIsTopButtonClicked2(!isTopButtonClick2);
      setIsLatestButtonClicked2(!isLatestButtonClick2);
      //로그인했을 때 
      if(accessToken){
        axios.get(`/api/${localStorage.getItem("id")}/product-ranking/latest/${pageLatest}`, {headers: {
          "Authorization": `Bearer ${accessToken}`}
        })
        .then((response)=>{
          setPhotoList(response.data.result.getProductRankResDto);
          console.log("latest버튼 로그인 했을 떄 ");
          console.log(response.data.result);
          setTotalLatestPage(response.data.result.totalPages);
        })
        .catch((err) =>{
          console.log(err);
        });
      }
    
      else{
        api.get(`/api/product-ranking/latest/${pageLatest}`)
        .then((response)=>{
          setPhotoList(response.data.result.getProductRankResDto);
          console.log("latest버튼 로그인 안했을 때 ");
          console.log(response.data.result);
          setTotalLatestPage(response.data.result.totalPages);
        })
        .catch((err) =>{
          console.log(err);
        });
      }
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
    
         <RankBoard rankList={rankList}/>

      <ButtonContainer style={{marginBottom:'0px'}}>
      <RankButtonDiv>
        </RankButtonDiv>
        <WhiteButton clicked={isTopButtonClick2} />
        <TextDiv>
            <TopDiv clicked={isTopButtonClick2} onClick={clickTopButton2}>Top</TopDiv>
            <LatestDiv clicked={isLatestButtonClick2} onClick={clickLatestButton2}>Latest</LatestDiv>
          </TextDiv>      
      </ButtonContainer>

      <Container id="scroll-container">
        <ScrollMenu>
          <PhotoBoard photoList={photoList} productFetch={productFetch} productState={"default"} />
        </ScrollMenu>
      </Container>
      <div style={{marginTop:"378px"}}/>
      <Footer/>
    </div>
  );
};

export default Main;

