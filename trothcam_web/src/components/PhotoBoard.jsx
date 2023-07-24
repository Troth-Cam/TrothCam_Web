import React from 'react';
import styled from "styled-components";
import PhotoItem from './PhotoItem';

const PhotoBoard = (props) => {
  return (
    <>
          {props.photoList.map((item, index) => (
          <PhotoItem index={index} item={item} />
        ))}
    </>
  );
}

export default PhotoBoard;