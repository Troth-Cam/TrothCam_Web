import React from 'react';
import styled from "styled-components";

const ItemDiv = styled.div`
    border-bottom: solid 1px #BCBDC1;
    font-size: 25px;
    height: 104px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-color: "black";
    font-weight:500;
    width: 582px;
    font-family: Inter;
`; 
const ImgDiv = styled.div`
  margin-left: 10px;
  
`;
const NameText = styled.text`
  margin-left: 35px;

`;
const PriceText = styled.text`
  margin-left: 80px;
  
`;
const OwnerText = styled.text`
  margin-left: 30px;
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
          사진
        </ImgDiv>
        <div style={{width: "420px"}}>
          <NameText> {props.item.Name}</NameText>
          <PriceText>{props.item.price}KRW</PriceText>
          <OwnerText>{props.item.owner}</OwnerText>
        </div>
      </ItemDiv>
    );
  };
  export default RankItem;