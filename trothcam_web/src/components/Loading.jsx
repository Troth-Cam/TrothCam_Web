import styled from "styled-components";
import SearchBox from "./header/SearchBox";

const Loading = () => {
  return (
    <LoadingContainer>
      <SearchBox></SearchBox>
      <ImageContainer>
        <img src="https://s3-alpha-sig.figma.com/img/76cc/b2da/193a57dc3c13ac9a6b68a9800fecf03d?Expires=1690761600&Signature=UMnbJaQAkSTXFmmdKq3bDR-A35C0E5yhyyGGo3RwWPRzsGKGYGVZDe1T0Ttq7aLdlBOuFDBnkNud9jYcX-JAuwMAFVgRWHsQw7G9jv4iTeEFSXMjnhWSsEvPGZQ5NsEZWiYyIA1D-jXOy5uwUkVMJMIVnDzPhQTT43nbrquu2hdwtDIhlsrcWzZAeTZzyyYwoJOZa4EihSevf~B5IbGiHK9LqYH0EF3saEeYnTnyLL0rtaLLv3zDYKwd-ZvE1~lDbG-PM~orCXDH55r7u2wRZxDmrAWcSSJovVF1L7i4lIQ3NMsLhVo7idQg~f3xUGCVp0mRmfsdhFc2jiSmWKALfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
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
  margin-top: 6rem;
`;
const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  margin: 18rem 32rem 5rem 34rem;
`;
