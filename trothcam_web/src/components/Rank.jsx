import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./header/SearchBox";
import Footer from "./Footer";
import rankImage from "./img/picture.png";

const Rank = () => {
  const [topCostActive, setTopCostActive] = useState(false);
  const [latestPurchasedActive, setLatestPurchasedActive] = useState(false);

  const handleTopCost = () => {
    //랭크 리스트 갱신, 전체 게시물 중 가장 높은 가격인 게시물  30개 불러오기
    setTopCostActive(true);
    setLatestPurchasedActive(false);
  };

  const handleLatestPurchased = () => {
    //랭크 리스트 갱신, 전체 게시물 중 가장 최근에 거래가 완료된 게시물 30개 불러오기
    setTopCostActive(false);
    setLatestPurchasedActive(true);
  };

  const rankData = [
    {
      id: 1,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2ww",
      author: "sdjkj33ww",
      price: "30000KRW",
    },
    {
      id: 2,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2ww",
      author: "sdjkj33ww",
      price: "30000KRW",
    },
    {
      id: 3,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2ww",
      author: "sdjkj33dd",
      price: "30000KRW",
    },
    {
      id: 4,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2tt",
      author: "sdjkj33ef",
      price: "30000KRW",
    },
    {
      id: 5,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2we",
      author: "sdjkj33fe",
      price: "30000KRW",
    },
    {
      id: 6,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2ae",
      author: "sdjkj33fe",
      price: "30000KRW",
    },
    {
      id: 7,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2r",
      author: "sdjkj33e",
      price: "30000KRW",
    },
    {
      id: 8,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2e",
      author: "sdjkj33e",
      price: "30000KRW",
    },
    {
      id: 9,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2e",
      author: "sdjkj33e",
      price: "30000KRW",
    },
    {
      id: 10,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2qq",
      author: "sdjkj33qq",
      price: "30000KRW",
    },
    {
      id: 11,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2t",
      author: "sdjkj33t",
      price: "30000KRW",
    },
    {
      id: 12,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2rr",
      author: "sdjkj33rr",
      price: "30000KRW",
    },
    {
      id: 13,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2q",
      author: "sdjkj33q",
      price: "30000KRW",
    },
    {
      id: 14,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2w",
      author: "sdjkj33w",
      price: "30000KRW",
    },
    {
      id: 15,
      image: rankImage,
      name: "Ipsum",
      tags: "#2234",
      owner: "aljk1j2rr",
      author: "sdjkj33ww",
      price: "30000KRW",
    },
  ];

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
          <RankListText marginRight="5rem">순위</RankListText>
          <RankListText marginRight="19rem">이름</RankListText>
          <RankListText marginRight="8.8rem">태그</RankListText>
          <RankListText marginRight="7rem">소유자</RankListText>
          <RankListText marginRight="11rem">원작자</RankListText>
          <RankListText>가격</RankListText>
        </RankListContainer>
        <Divider />
        {rankData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </RankContainer>
      <Footer></Footer>
    </>
  );
};

const Post = ({ post }) => {
  const truncateText = (text, maxLength) => {
    if (text.length >= maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    }
    return text;
  };

  return (
    <PostContainer>
      <PostInfoId>{post.id}</PostInfoId>
      <ImageWrapper>
        <PostImage src={rankImage} alt={post.name} />
      </ImageWrapper>
      <PostInfo>{post.name}</PostInfo>
      <PostInfo>{post.tags}</PostInfo>
      <PostInfoPerson>{truncateText(post.owner, 8)}</PostInfoPerson>
      <PostInfoPerson>{truncateText(post.author, 8)}</PostInfoPerson>
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
  margin-left: 13rem;
  width: 9.7rem;
  height: 3.3rem;
`;

const LatestPurchasedButton = styled(Button)`
  margin-left: 1rem;
  width: 16rem;
  height: 3.3rem;
`;

const Divider = styled.div`
  width: 79.7rem;
  height: 0.1rem;
  background-color: #bcbdc1;
  margin-top: 0.8rem;
  margin-left: 12.5rem;
`;

const RankListContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 14.5rem;
`;

const RankListText = styled.div`
  color: #bcbdc1;
  font-size: 1.7rem;
  font-weight: 500;
  margin-top: 2rem;
  &:not(:last-child) {
    margin-right: ${({ marginRight }) => marginRight || "4rem"};
  }
`;

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-left: 10rem;
  width: 80rem;
`;

const PostInfoId = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.7rem;
  font-weight: 500;
  margin-left: 5.5rem;
  margin-right: 1rem;
`;
const PostInfo = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 2rem;
  font-weight: 500;
`;
const PostInfoPerson = styled.div`
  color: #5980ef;
  font-family: Inter;
  font-size: 1.7rem;
  font-weight: 500;
`;

const ImageWrapper = styled.div`
  width: 7.3rem;
  height: 7.6rem;
  margin-left: -4rem;
  margin-right: -5rem;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
`;