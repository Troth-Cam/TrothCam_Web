import React from 'react';
import styled from "styled-components";
import PhotoItem from './PhotoItem';

const PhotoBoardDiv = styled.div`
  
`;
const PhotoBoard = (props) => {
  return (
    <PhotoBoardDiv>
          {props.photoList.map((item, index) => (
          <PhotoItem index={index} item={item} />
        ))}
    </PhotoBoardDiv>
  );
}

export default PhotoBoard;