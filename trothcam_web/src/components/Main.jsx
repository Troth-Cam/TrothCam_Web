import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	// 추가
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import RankBoard from "./RankBoard"
import PhotoBoard from './PhotoBoard';
import FilterIcon from "./img/filter_icon.png";

SwiperCore.use([Navigation, Pagination, Autoplay])

const RecentDiv = styled.div`
    margin-top: 96px;
    font-weight: 600;
    font-size: 45px;
    color: #222222;  
    margin-left: 46px;
`;
// const AllButton = styled.button`
//     width: 65px;
//     height: 47px;
//     background-color: #222222;
//     color: #D9D9D9;
//     boarder: solid 1px #D9D9D9;
//     border-radius: 10px;
//     font-weight: 600;
//     font-size: 20px;
//     margin-left: 65px;
//     //왼쪽 아이콘 추가에 따라 바뀔듯
// `;
const FilterButton = styled.button`
    width: 65px;
    height: 47px;
    background-color: ${props => (props.clicked ? '#FFFFFFE5' : '#222222')};
    color: ${props => (props.clicked ? '#222222' : '#D9D9D9')};
    border: solid 1px;
    border-color:${props => (props.clicked ? '#9FA0A3' : '#D9D9D9')};
    border-radius: 10px;
    font-weight: 600;
    font-size: 20px;
    margin-left: 14px;
`;
const FilterButtonDiv = styled.div`
    margin-top: 76px;
    margin-left:48.38px;
    display: flex;
    align-items: center;
`;
const Select = styled.select`
    width: 140px;
    height:47px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    margin-left: 19px;
`;
const SelectIcon = styled.img`
    width: 20.87px;
    height: 22px;
    border: solid 1px green;
`;

const Option = styled.option`
    padding-left: 30px;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 20px 22px;
`;
const FilterImg = styled.img`
    width: 23.72px;
    height: 28.13px;
`;
const RankButtonDiv = styled.div`
    background-color: #E8EAEF;
    width: 335px;
    height: 67px;
    position: flex;
    border-radius: 10px;
    margin-left: 37px;
    align-items: center; 
    display: flex;
`;
const RankButton = styled.div`
    background-color: #FFFFFF;
    width: 168px;
    height: 59px;
    position: absolute;
    border-radius: 10px;
    transition: all 1s ease;
    transform: translateX(${props => (props.clicked ? "0%" : "100%")});
`;
const TopDiv = styled.div`
    display: inline-block;
    width: 163px;
    height: 32px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: ${props => (props.clicked ? '##222222' : '#22222296')};
`;
const LatestDiv = styled.div`
    display: inline-block;
    width: 163px;
    height: 32px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    color: ${props => (props.clicked ? '##222222' : '#22222296')};
`;
const TextDiv = styled.div`
    position: absolute;
`;
const ViewAllButton = styled.div`
    width: 168px;
    height: 65px;
    background-color: #E8EAEF;
    color: #222222;
    border-radius: 10px;
    font-weight: 600;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Main = () =>{
    const [isAllButtonClicked, setIsAllButtonClicked] = useState(false);
    const [isNewButtonClicked, setIsNewButtonClicked] = useState(true);
    const [isTopButtonClick, setIsTopButtonClicked] = useState(true);

    const rankList=[{"Name": "이름1", "price": "17000", "owner": "시니"},{"Name": "이름2", "price": "17000", "owner": "시니현"},
    {"Name": "이름3", "price": "17000", "owner": "시니현"},{"Name": "이름4", "price": "17000", "owner": "시니현"},
    {"Name": "이름5", "price": "17000", "owner": "시니"},
    {"Name": "이름6", "price": "17000", "owner": "시니"},
    {"Name": "이름7", "price": "17000", "owner": "시니현"},
    {"Name": "이름8", "price": "17000", "owner": "시니현"}]; // 서버에서 데이터 받아와서 버튼에 따라서 useState 쓰기!!!
    
    const photoList=[{"Name": "이름", "price": "17000", "owner": "시니"},{"Name": "이름2", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},{"Name": "이름4", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"},
    {"Name": "이름", "price": "17000", "owner": "시니현"}]; // 서버에서 데이터 받아와서 버튼에 따라서 useState 쓰기!!!
    
    const clickAllBtn = ()=>{
        setIsAllButtonClicked(!isAllButtonClicked);
        setIsNewButtonClicked(!isNewButtonClicked);
    }
    const clickNewBtn = ()=>{
        setIsNewButtonClicked(!isNewButtonClicked);
        setIsAllButtonClicked(!isAllButtonClicked);
    }
    const clickTopButton = () => {
        console.log(isTopButtonClick)
        setIsTopButtonClicked(!isTopButtonClick);
    }

    return(
        <div>
            <Swiper
                className="banner"
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                style={{height: "750px"}}
            >
            <SwiperSlide>Slide 1입니다</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <RankButtonDiv onClick={clickTopButton} >
                    <RankButton clicked={isTopButtonClick}/>
                    <TextDiv>
                            <TopDiv clicked={isTopButtonClick}>Top</TopDiv>
                            <LatestDiv clicked={!isTopButtonClick}>Latest</LatestDiv>
                    </TextDiv>
                </RankButtonDiv>
                <div>
                    <ViewAllButton>View all</ViewAllButton>
                </div>
            </div>
                <RankBoard rankList={rankList}/>
                <RecentDiv>최근 거래 목록</RecentDiv>
                <PhotoBoard photoList={photoList}/>
            <FilterButtonDiv>
                <FilterImg src={FilterIcon}/>
                <FilterButton clicked={isAllButtonClicked} onClick={clickAllBtn}>ALL</FilterButton>
                <FilterButton clicked={isNewButtonClicked} onClick={clickNewBtn}>New</FilterButton>
                <Select>
                    <Option icon={SelectIcon} value="price">가격</Option>
                </Select>
                <Select>
                    <option><SelectIcon/>색상</option>
                </Select>
                <Select>
                    <option><SelectIcon/>날짜</option>
                </Select>
            </FilterButtonDiv>

            <PhotoBoard photoList={photoList}/>
        </div>
    )
}
export default Main;
