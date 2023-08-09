import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import Select from "react-select";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import RankBoard from "./RankBoard";
import PhotoBoard from "./PhotoBoard";
import FilterIcon from "./img/filter_icon.png";
import Banner from "./img/banner.png";
import CoinIcon from "./img/coin_icon.png";
import ColorIcon from "./img/color_icon.png";
import CalendarIcon from "./img/calendar_icon.png";
import Footer from "./Footer";
import SearchBar from "./header/SearchBox";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const RecentDiv = styled.div`
  margin-top: 27px;
  font-weight: 600;
  font-size: 24px;
  color: #222222;  
  margin-left: 21.1%; //289;
  font-family: Inter;
`;

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

const FilterButtonDiv = styled.div`
  margin-top: 32px;
  margin-left: 21.1%;
  display: flex;
  align-items: center;
  color: ;
`;

const SelectContainer = styled.div`
  width: 140px;
  margin-left: 19px;
`;

const FilterImg = styled.img`
  width: 23.72px;
  height: 28.13px;
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

const RankButton = styled.div`
  background-color: #FFFFFF;
  width: 91px;
  height: 32px;
  position: absolute;
  border-radius: 10px;
  transition: all 1s ease;
  transform: translateX(${(props) => (props.clicked ? "0%" : "100%")});
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20.4%;
  padding-right: 20.4%; //280px
  margin-top: 50px;
  margin-bottom: 60px;
`;

const TopDiv = styled.div`
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

const LatestDiv = styled.div`
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
  height: 670px;
  width: 100%;
  position: flex;
  text-align: center;
  background-image: linear-gradient(to bottom, #88a0e5 10%, #ffffff00 53%);
`;

const BannerTextDiv = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #222222;
  padding-top: 182px;
  padding-bottom: 10px;
  display: block;
  font-family: Inter;
`;

const BannerTextDiv2 = styled.div`
  color: #000000;
  display: inline-block;
  font-size: 50px;
  font-weight: 400;
  font-family: Inter;
`;

const BannerTextDiv3 = styled.div`
  display: inline-block;
  font-weight: 400;
  font-size: 50px;
  color: #5980ef;
  margin-left: 20px;
  font-family: Inter;
`;

const BannerImg = styled.div`
  width: 1227px;
  height: 271.54px;
  margin-top: 64px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
`;

const OptionIconImg = styled.img`
  width: 14px;
  height: 13px;
  margin-right: 10px;
`;
const Container = styled.div`
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

width: 61%;
overflow-x: scroll;
white-space: nowrap;
margin-left: auto;
margin-right: auto;

/* 스크롤바 스타일 */
&::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

/* 스크롤바 thumb 스타일 */
&::-webkit-scrollbar-thumb {
  background-color: transparent;
}
`;
const DatePickerContainer = styled.div`
  display: inline-block;
  width: 140px;
  margin-left: 16px;
  position: relative;
`;

const PlaceholderIcon = styled.img`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
`;

const CustomDatePicker = styled(DatePicker)`
  height: 47px;
  font-size: 10px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  outline: none;
  font-family: Inter;
  padding-left: 30px; /* 추가한 스타일 */
`;


const Main = () => {
  const [isAllButtonClicked, setIsAllButtonClicked] = useState(false);
  const [isNewButtonClicked, setIsNewButtonClicked] = useState(true);
  const [isTopButtonClick, setIsTopButtonClicked] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  
  const rankList = [
    { Name: "이름1", price: "17000", owner: "시니" },
    { Name: "이름2", price: "17000", owner: "시니현" },
    { Name: "이름3", price: "17000", owner: "시니현" },
    { Name: "이름4", price: "17000", owner: "시니현" },
    { Name: "이름5", price: "17000", owner: "시니" },
    { Name: "이름6", price: "17000", owner: "시니" },
    { Name: "이름7", price: "17000", owner: "시니현" },
    { Name: "이름8", price: "17000", owner: "시니현" },
  ];

  const photoList = [
    { Name: "이름", price: "17000", owner: "시니" },
    { Name: "이름2", price: "17000", owner: "시니현" },
    { Name: "이름", price: "17000", owner: "시니현" },
    { Name: "이름4", price: "17000", owner: "시니현" },
    { Name: "이름", price: "17000", owner: "시니현" },
    { Name: "이름", price: "17000", owner: "시니현" },
    { Name: "이름", price: "17000", owner: "시니현" },
    { Name: "이름", price: "17000", owner: "시니현" },
  ];
  

  const clickAllBtn = () => {
    setIsAllButtonClicked(!true);
    setIsNewButtonClicked(!false);
  };

  const clickNewBtn = () => {
    setIsNewButtonClicked(!true);
    setIsAllButtonClicked(!false);
  };

  const clickTopButton = () => {
    setIsTopButtonClicked(!isTopButtonClick);
  };

  const handleRankClick = () => {
    navigate("/rank");
  };

  const SwiperContainer = styled(Swiper)`
    height: 750px;
    width: 100% & .swiper-pagination-bullet {
      background: #2b2b2b !important;
    }
  `;

  const customSelectStyles = {
    container: (provided) => ({
      ...provided,
      width: '85px',
      marginLeft: '16px',
      fontSize: '10px'
    }),
    control: (provided) => ({
      ...provided,
      height: '47px',
      fontSize: '10px',
      fontWeight: '600',
      borderRadius: '10px',
      backgroundColor: '#fff',
      border: '1px solid #d9d9d9',
      outline: 'none',
      fontFamily: 'Inter'
    }),
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      paddingLeft: "30px",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided) => ({
      ...provided,
      paddingRight: "2",
      color: "black",
      fontSize: '10px'
    })
  };

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
        <RankButtonDiv onClick={clickTopButton}>
          <RankButton clicked={isTopButtonClick} />
          <TextDiv>
            <TopDiv clicked={isTopButtonClick}>Top</TopDiv>
            <LatestDiv clicked={!isTopButtonClick}>Latest</LatestDiv>
          </TextDiv>
        </RankButtonDiv>
        <div>
          <ViewAllButton onClick={handleRankClick}>View all</ViewAllButton>
        </div>
      </ButtonContainer>
    
      <RankBoard rankList={rankList} />
      <RecentDiv>최근 거래 목록</RecentDiv>
      <Container>
        <PhotoBoard photoList={photoList} />
      </Container>

      <FilterButtonDiv>
        <FilterImg src={FilterIcon} />
        <FilterButton clicked={isAllButtonClicked} onClick={clickAllBtn}>
          ALL
        </FilterButton>
        <FilterButton clicked={isNewButtonClicked} onClick={clickNewBtn}>
          New
        </FilterButton>
        <SelectContainer>
          <Select
            styles={customSelectStyles}
            options={[
              {
                value: "price",
                label: (
                  <>
                    <OptionIconImg src={CoinIcon} alt="Coin Icon" />
                    가격
                  </>
                ),
              },
            ]}
            defaultValue={{
              value: "price",
              label: (
                <>
                  <OptionIconImg src={CoinIcon} alt="Coin Icon" />
                  가격
                </>
              ),
            }}
          />
        </SelectContainer>
        <SelectContainer>
          <Select
            styles={customSelectStyles}
            options={[
              {
                value: "color",
                label: (
                  <>
                    <OptionIconImg src={ColorIcon} alt="Color Icon" />
                    색상
                  </>
                ),
              },
            ]}
            defaultValue={{
              value: "color",
              label: (
                <>
                  <OptionIconImg src={ColorIcon} alt="Color Icon" />
                  색상
                </>
              ),
            }}
          />
        </SelectContainer>
        <SelectContainer>
          <DatePickerContainer>
            <PlaceholderIcon src={CalendarIcon} alt="Calendar Icon" />
            <CustomDatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="날짜"
            />
          </DatePickerContainer>
        </SelectContainer>
      </FilterButtonDiv>
    
      <Container>
        <PhotoBoard photoList={photoList} />
      </Container>
      <div style={{marginTop:"94px"}}/>
      <Footer/>
    </div>
  );
};

export default Main;
