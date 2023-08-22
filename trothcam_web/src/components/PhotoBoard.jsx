
import styled from "styled-components";
import PhotoItem from './PhotoItem';
import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';


const PhotoBoard = (props) => {
  const [ref, inView] = useInView();

  // 스크롤이 화면에 보이면 productFetch() 실행
  useEffect(() => {
    if (inView) {
      console.log(inView, '무한 스크롤 요청 🎃')
      props.productFetch();
    }
  }, [inView]);

  return (
    <div>
     {props.photoList && Object.values(props.photoList).map((item, index) => (
        <PhotoItem key={index} itemId={index} item={item} />
      ))}
      <text ref={ref}>sdsd </text>
    </div>
  );
};

export default PhotoBoard;