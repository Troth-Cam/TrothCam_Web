import React from 'react';
import styled from "styled-components";

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
  margin-left: 10px;
  width: 52px;
  background-color: red;
  height: 50px;
  border-radius: 10px;
`;
const NameText = styled.div`
  display:inline-block;
  font-size: 15px;
  padding-left: 14px;
  width: 52px;
  font-weight: 500;
  color: #222222;
  font-weight: 500;
  font-family: Inter;
`;
const PriceText = styled.div`
display:inline-block;
  font-size: 15px;
  padding-left: 20px;
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
`

const RankItem = (props) => {
    
    console.log(props.item);
    console.log(props.item.Name);
    console.log(props.item.price);
    console.log(props.index);
    return (
      <ItemDiv>
        <div style={{marginLeft: "45px", width:"52px"}}>
          {props.index+ 1}
        </div>
        <ImgDiv>
        </ImgDiv>
        <div style={{width: "243px"}}>
          <NameText> {props.item.Name}</NameText>
          <PriceText>{props.item.price}KRW</PriceText>
          <OwnerText>{props.item.owner}</OwnerText>
        </div>
      </ItemDiv>
    );
  };
  export default RankItem;