import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ItemDiv = styled.div`
    border-bottom: solid 1px #BCBDC1;
    font-size: 15px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-color: #000000;
    font-weight:500;
    width: 379.9px;
    font-family: Inter;
`; 
const ImgDiv = styled.div`
  margin-left: 33px;
  width: 52px;
  background-color: red;
  height: 50px;
  border-radius: 10px;
`;
const NameText = styled.div`
  display:inline-block;
  font-size: 15px;
  margin-left: 14px;
  width: 52px;
  color: #222222;
  font-weight: 500;
  font-family: Inter;
`;
const PriceText = styled.div`
display:inline-block;
  font-size: 15px;
  padding-left: 24px;
  color: #222222;
  font-weight: 500;
  font-family: Inter;
`;
const OwnerText = styled.div`
display:inline-block;
  padding-left: 20px;
  font-size: 15px;
  width: 45px;
  font-weight: 500;
  font-family: Inter;
  color: #222222;
  text-overflow: ellipsis;
  margin-top:0xp;
  overflow:hidden;
`
const RankText = styled.div`
margin-left: 20px;
font-size: 15px;
font-weight: 500;
font-family: Inter;
color: #000000;
`;


const RankItem = (props) => {
  const navigate = useNavigate();
  const moveToDetailOthers = () =>{
    navigate("/detail_others", { state: { userId: props.item.ownerToken} });
  }    
  
   // console.log(props.item);
    //console.log(props.item.Name);
    //console.log(props.item.price);
   // console.log(props.index);
    return (
      <ItemDiv>
        <RankText>{props.index+ 1}</RankText>
        <ImgDiv>
        </ImgDiv>
        <div style={{width: "266px"}}>
          <NameText> {props.item.title}</NameText>
          <PriceText>{props.item.price}KRW</PriceText>
          <OwnerText onClick={moveToDetailOthers}>{props.item.ownerToken.slice(0,11)}</OwnerText>
        </div>
      </ItemDiv>
    );
  };
  export default RankItem;