import React from 'react';
import styled from "styled-components";
import PhotoItem from './PhotoItem';

const Container = styled.div`

width: 100%;
overflow-x: scroll;
white-space: nowrap;
margin-left: auto;
margin-right: auto;

/* 스크롤바 스타일 */
&::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

/* 스크롤바 thumb 스타일 */
&::-webkit-scrollbar-thumb {
  background-color: transparent;
}
`;

const PhotoBoard = (props) => {
  return (
    <Container>
          {props.photoList.map((item, index) => (
          <PhotoItem index={index} item={item} />
        ))}
    </Container>
  );
}

export default PhotoBoard;