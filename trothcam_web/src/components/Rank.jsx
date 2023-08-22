import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "./header/SearchBox";
import Footer from "./Footer";
import rankImage from "./img/picture.png";
import axios from "axios";

const Rank = () => {
  const [topCostActive, setTopCostActive] = useState(false);
  const [latestPurchasedActive, setLatestPurchasedActive] = useState(false);
  const [rankData, setRankData] = useState([]);

  const handleTopCost = () => {
    //랭크 리스트 갱신, 전체 게시물 중 가장 높은 가격인 게시물 30개 불러오기
    axios
      .get("https://trothly.com/api/view-all/top")
      .then((response) => {
        const responseData = response.data;
        const topCostRankData = responseData.result;

        setRankData(topCostRankData);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
    setTopCostActive(true);
    setLatestPurchasedActive(false);
  };

  const handleLatestPurchased = () => {
    //랭크 리스트 갱신, 전체 게시물 중 가장 최근에 거래가 완료된 게시물 30개 불러오기
    axios
      .get("https://trothly.com/api/view-all/latest")
      .then((response) => {
        const responseData = response.data;
        const latestPurchasedRankData = responseData.result;

        setRankData(latestPurchasedRankData);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
    setTopCostActive(false);
    setLatestPurchasedActive(true);
  };

  useEffect(() => {
    handleTopCost();
  }, []);

  return (
    <>
      <SearchBar></SearchBar>
      <RankContainer>
        <TopCostButton active={topCostActive} onClick={handleTopCost}>
          Top Cost
        </TopCostButton>
        <LatestPurchasedButton
          active={latestPurchasedActive}
          onClick={handleLatestPurchased}>
          Latest Purchased{" "}
        </LatestPurchasedButton>
        <Divider />
        <RankListContainer>
          <RankListText marginRight="6%">순위</RankListText>
          <RankListText marginRight="24%">이름</RankListText>
          <RankListText marginRight="6%">태그</RankListText>
          <RankListText marginRight="8%">소유자</RankListText>
          <RankListText marginRight="12%">원작자</RankListText>
          <RankListText>가격</RankListText>
        </RankListContainer>
        <Divider />
        {rankData.map((post, index) => (
          <Post key={post.id} post={post} index={index + 1} />
        ))}
      </RankContainer>
      <Footer></Footer>
    </>
  );
};

const Post = ({ post, index }) => {
  const navigate = useNavigate();

  const truncateText = (text, maxLength) => {
    if (typeof text !== "string") {
      return "";
    }

    if (text.length >= maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    }
    return text;
  };

  const handleOwnerButtonClick = () => {
    console.log(post.ownerToken);
    navigate("/detail_others", { state: { userId: post.ownerToken } });
  };

  const handleAuthorButtonClick = () => {
    console.log(post.authorshipToken);
    navigate("/detail_others", { state: { userId: post.authorshipToken } });
  };

  return (
    <PostContainer>
      <PostInfoId>{index}</PostInfoId>
      <ImageWrapper>
        <PostImage src={rankImage} alt={post.imageUrl} />
      </ImageWrapper>
      <PostInfoName>{post.ownerName}</PostInfoName>
      <PostInfo>{post.tags}</PostInfo>
      <PostInfoPerson onClick={handleOwnerButtonClick}>
        {truncateText(post.ownerToken, 8)}
      </PostInfoPerson>
      <PostInfoPerson onClick={handleAuthorButtonClick}>
        {truncateText(post.authorshipToken, 8)}
      </PostInfoPerson>
      <PostInfo>{post.price}</PostInfo>
    </PostContainer>
  );
};

export default Rank;

const RankContainer = styled.div`
  margin-bottom: 10rem;
`;

const Button = styled.button`
  border-radius: 1rem;
  border: none;
  color: ${({ active }) => (active ? "#ffffff" : "#5980ef")};
  background-color: ${({ active }) => (active ? "#5980ef" : "#ffffff")};
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 400;
`;

const TopCostButton = styled(Button)`
  margin-left: 17%;
  width: 9rem;
  height: 3.3rem;
`;

const LatestPurchasedButton = styled(Button)`
  margin-left: 1rem;
  width: 15rem;
  height: 3.3rem;
`;

const Divider = styled.div`
  width: 65%;
  height: 0.1rem;
  background-color: #bcbdc1;
  margin-top: 0.8rem;
  margin-left: 18%;
`;

const RankListContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 19%;
  margin-right: 15%;
`;

const RankListText = styled.div`
  color: #bcbdc1;
  font-size: 1.7rem;
  font-weight: 500;
  margin-top: 2rem;
  &:not(:last-child) {
    margin-right: ${({ marginRight }) => marginRight || "4%"};
  }
`;

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-left: 15%;
  width: 65%;
`;

const PostInfoId = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.7rem;
  font-weight: 500;
  margin-left: 8%;
`;
const PostInfo = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 2rem;
  font-weight: 500;
  margin-left: 2%;
`;
const PostInfoPerson = styled.div`
  color: #5980ef;
  font-family: Inter;
  font-size: 1.7rem;
  font-weight: 500;
  margin-left: 3%;
`;
const PostInfoName = styled.div`
  width: 6.5rem;
  color: #000;
  font-family: Inter;
  font-size: 2rem;
  font-weight: 500;
  margin-left: 5%;
`;

const ImageWrapper = styled.div`
  width: 7.3rem;
  height: 7.6rem;
  margin-left: 2%;
  margin-right: -3rem;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
`;
