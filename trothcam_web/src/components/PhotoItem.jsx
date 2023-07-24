import React from 'react';
import styled from "styled-components";
import HeartIcon from "./img/heart_icon.png";

const PhotoItemDiv = styled.div`
    width: 309px;
    display: inline-block;
    height: 392px;
    border: solid 3px #BDBDC1;
    margin-left: 34px;
    margin-top: 20px;
`;
const PhotoDiv =  styled.div`
    width: 271px;
    height: 278px;
    border: 1px solid red;
    margin-left: auto;
    margin-right: auto;
    margin-top: 19px;
`;
const TextDiv =  styled.div`
    width: 271px;
    border: 1px solid yellow;
    margin-left: auto;
    margin-right: auto;
    font-family: Inter;
`;
const NameDiv = styled.div`
    font-weight: 700;
    font-size: 20px;
    height: 27px;
    font-family: Inter;
    font-family: inter;
    color: #222222;
`
const IconImg = styled.img`
    width: 30px;
    height: 31.08px;
    float: right;
`
const LineDiv1 = styled.div`
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    font-family: Inter;
`
const LineDiv2 = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Inter;
`
const GrayDiv = styled.div`
    font-weight: 400px;
    font-size: 15px;
    color: #9FA0A3;
    font-family: Inter;
`
const PriceDiv = styled.div`
    font-weight: 400px;
    font-size: 15px;
    color: #22222;
    font-family: Inter;
`
const PhotoItem = (props) =>{
    return(<PhotoItemDiv>
        <PhotoDiv/>
        <TextDiv>
            <LineDiv1>
                <NameDiv>{props.item.Name}</NameDiv>
                <IconImg src={HeartIcon}/>
            </LineDiv1>
            <GrayDiv>{props.item.owner}</GrayDiv>
            <LineDiv2>
                <GrayDiv>20230605</GrayDiv>
                <PriceDiv>{props.item.price}KRW</PriceDiv>
            </LineDiv2>

        </TextDiv>
    </PhotoItemDiv>)
}
export default PhotoItem;