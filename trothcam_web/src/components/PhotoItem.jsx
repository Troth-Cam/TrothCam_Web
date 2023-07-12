import React from 'react';
import styled from "styled-components";

const PhotoItemDiv = styled.div`
    width: 309px;
    display: inline-block;
    height: 392px;
    border: solid 3px #BDBDC1;
    margin-left: 34px;
    margin-top: 20px;
`;
const PhotoItem = (props) =>{
    return(<PhotoItemDiv>
        {props.index + 1}
    </PhotoItemDiv>)
}
export default PhotoItem;