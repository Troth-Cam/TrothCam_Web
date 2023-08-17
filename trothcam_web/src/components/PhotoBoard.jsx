import React from 'react';
import styled from "styled-components";
import PhotoItem from './PhotoItem';

const PhotoBoardDiv = styled.div`
  
`;
const PhotoBoard = (props) => {
  return (
    <>
          {props.photoList.map((item, index) => (
          <PhotoItem itemId={index} item={item}/>
        ))}
    </>
  );
}

export default PhotoBoard;