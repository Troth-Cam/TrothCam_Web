import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	// 추가
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import RankBoard from "./RankBoard"
import PhotoBoard from './PhotoBoard';
SwiperCore.use([Navigation, Pagination, Autoplay])

const RecentDiv = styled.div`
    margin-top: 96px;
    font-weight: 600;
    font-size: 45px;
    color: #222222;  
    margin-left: 46px;
`;


const Main = () =>{
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
    return(
        <div>
            <Swiper
                className="banner"
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                style={{height: "750px"}}
            >
            <SwiperSlide>Slide 1입니다</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div>
                <button>Top</button>
                <button>Latest</button>
                </div>
                <div style={{ marginLeft: "auto" }}>
                    <button>View all</button>
                </div>
            </div>
            <RankBoard rankList={rankList}/>
            <RecentDiv>최근 거래 목록</RecentDiv>
            <PhotoBoard photoList={photoList}/>
            <div>
            
            <div>ALL</div>
            <dig>New</dig>
            <select>
                <option>가격</option>
            </select>
            <select>
                <option>색상</option>
            </select>
            <select>
                <option>날짜</option>
            </select>
            </div>
            <PhotoBoard photoList={photoList}/>
        </div>
    )
}
export default Main;
