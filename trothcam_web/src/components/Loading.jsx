import styled from "styled-components";
import SearchBox from "./header/SearchBox";

const Loading = () => {
  return (
    <LoadingContainer>
      <SearchBox></SearchBox>
      <img></img>
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
  margin-top: 6rem;
`;
