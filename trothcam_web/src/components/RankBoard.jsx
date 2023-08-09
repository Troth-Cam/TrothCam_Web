import React from 'react';
import RankItem from "./RankItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
`;

const BoardDiv = styled.div`
`;
const RankText = styled.text`
    font-size: 15px;
    color: #777777;
    font-weight: 500;
    margin-left: 30.88px;
`
const OwnerText = styled.text`
    font-size: 15px;
    color: #777777;
    font-weight: 500;
    margin-left: 36px;
`
const PriceText = styled.text`
    font-size: 15px;
    color: #777777;
    font-weight: 500;
    margin-left: 196px;
`
const RankBoard = (props) => {
  const limitedRankList1 = props.rankList.slice(0, 5); // 처음 5개의 요소만 잘라내기
  const limitedRankList2 = props.rankList.slice(5, 10);

  return (
    <Container>
      <BoardDiv>
        <div style={ {borderBottom: "solid 1px #BCBDC1", width: "379.9px", paddingBottom:"17px"}}><RankText>Rank</RankText><PriceText>Price</PriceText><OwnerText>Owner</OwnerText></div>
        {limitedRankList1.map((item, index) => (
          <RankItem item={item} index={index} />
        ))}
      </BoardDiv>
      <BoardDiv style={{marginLeft:"82px"}}>
      <div style={ {borderBottom: "solid 1px #BCBDC1", width: "379.9px", paddingBottom:"17px"}}> <RankText>Rank</RankText><PriceText>Price</PriceText><OwnerText>Owner</OwnerText></div>
        {limitedRankList2.map((item, index) => (
          <RankItem item={item} index={index +5} />
        ))}
      </BoardDiv>
    </Container>
  );
};

export default RankBoard;