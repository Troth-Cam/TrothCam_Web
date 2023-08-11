import React, { useContext, useState } from 'react';
import styled from "styled-components";
import HeartIcon from "./img/heart_icon.png";
import EmptyHeartIcon from "./img/emptyHeart_icon.png";
import { isVisible } from '@testing-library/user-event/dist/utils';
import { VisibilityContext,VisibleElements } from "react-horizontal-scrolling-menu";
const PhotoItemDiv = styled.div`
    width: 187px;
    display: inline-block;
    height: 238px;
    border: solid 3px #BDBDC1;
    margin-left: 16px;
    margin-top: 20px;
`;
const PhotoDiv = styled.div`
    width: 164px;
    height: 169px;
    border: 1px solid red;
    margin-left: auto;
    margin-right: auto;
    margin-top: 11px;
`;
const TextDiv = styled.div`
    width: 164px;
    border: 1px solid yellow;
    margin-left: auto;
    margin-right: auto;
    font-family: Inter;
`;
const NameDiv = styled.div`
    font-weight: 700;
    font-size: 13px;
    height: 16px;
    font-family: Inter;
    color: #222222;
`
const IconImg = styled.img`
    width: 15px;
    height: 13.66px;
    float: right;
    cursor: pointer; // 커서를 포인터로 변경하여 클릭 가능한 상태로 보여줍니다.
`
const LineDiv1 = styled.div`
    margin-top: 7px;
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
    font-size: 9px;
    color: #9FA0A3;
    font-family: Inter;
`
const PriceDiv = styled.div`
    font-weight: 400;
    font-size: 9px;
    color: #22222;
    font-family: Inter;
`

const PhotoItem = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const visibility = React.useContext(VisibilityContext);

    const visible = visibility.isItemVisible(props.index);
  
console.log("Index:", props.index);
console.log("Is Visible:", isVisible);
    console.log(isVisible);
    const handleClick = () => {
        setIsLiked(!isLiked);
    };
    
    return (
        <PhotoItemDiv>
            <PhotoDiv />
            <TextDiv>
                <LineDiv1>
                    <NameDiv>{props.item.Name}</NameDiv>
                    <IconImg onClick={handleClick} src={isLiked ? HeartIcon : EmptyHeartIcon} alt="Heart Icon" />
                </LineDiv1>
                <GrayDiv>{props.item.owner}</GrayDiv>
                <LineDiv2>
                visible: {JSON.stringify(visible)}
                    <GrayDiv>20230605</GrayDiv>
                    <PriceDiv>{props.item.price}KRW</PriceDiv>
                </LineDiv2>
            </TextDiv>
        </PhotoItemDiv>
    );
}

export default PhotoItem;