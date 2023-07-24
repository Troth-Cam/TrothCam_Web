import styled from "styled-components";
import SearchBox from "./header/SearchBox";
import React from "react";
import Lottie from "lottie-react";
import animationData from "./img/certification_loading.json";

const Loading = () => {
  return (
    <LoadingContainer>
      <SearchBox></SearchBox>
      <ImageContainer>
        <Lottie animationData={animationData} />
      </ImageContainer>
      <LoadingText>Trothly 인증서 확인 중...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LoadingText = styled.div`
  color: #222;
  text-align: center;
  font-family: Inter;
  font-weight: 400;
  font-size: 2.8rem;
`;
const ImageContainer = styled.div`
  width: 30rem;
  height: 15rem;
  margin: 15rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
