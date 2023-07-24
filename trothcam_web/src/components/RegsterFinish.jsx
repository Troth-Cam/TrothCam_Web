import styled from "styled-components";
import SearchBox from "./header/SearchBox";
import { useNavigate } from "react-router-dom";

const RegisterFinish = () => {
  const navigate = useNavigate();
  const handleKeepClick = () => {
    navigate("/");
  };

  return (
    <RegisterFinishContainer>
      <SearchBox></SearchBox>
      <ImageContainer>
        <img src="https://s3-alpha-sig.figma.com/img/cf52/438d/01e8f5716afb2e2d65648d6e8f77cf8c?Expires=1690761600&Signature=F3QYlvfDHlqwyaAiYluaCY6PM567jifAtti4s8XvzgsziuBqAxxvY2sf5jNoHr9LxCPFr0z3aDR1rfquhkPCyqb4Z9HRYj08638Oa~GnCqutUoY0aBqY5P~RfQ-H67jy1NZmb0bynXGjZ7jX~coFprvsc4PZPSQ4GoCyzvGk9LwRUXbBqPcNm-FDkF~3l1BBVP0t5MDFZ3u4AsztBNuo2KvHfQQYDMEcx45O87ZKZ854WrgEWmPy48LZ65Q7VT0BMrBFQJ2UsTTXbFvNgsxorObV6tnESvAGAMwTjS2Utp9PpuiMp8b8rDiIuF0d4QWDOxJVCZH1U5Vwu~MRNYJe0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
      </ImageContainer>
      <RegisterFinishText>Trothly 인증 확인 완료!</RegisterFinishText>
      <EnjoypictureText>
        지금 바로 다양한 사진을{"\n"}무제한으로 감상하세요.
      </EnjoypictureText>
      <KeepButtonContainer>
        <KeepButton onClick={handleKeepClick}>계속하기</KeepButton>
      </KeepButtonContainer>
    </RegisterFinishContainer>
  );
};

export default RegisterFinish;

const RegisterFinishContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RegisterFinishText = styled.div`
  color: #222;
  text-align: center;
  font-family: Inter;
  font-size: 3.75rem;
  font-weight: 700;
  margin-top: 6rem;
`;
const EnjoypictureText = styled.div`
  color: #222;
  text-align: center;
  font-family: Inter;
  font-size: 2.5rem;
  margin-top: 4rem;
  white-space: pre-wrap;
`;
const KeepButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
const KeepButton = styled.div`
  color: #fff;
  font-size: 1.75rem;
  width: 9.5rem;
  height: 4rem;
  border-radius: 1.2rem;
  border: none;
  background: #5980ef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
`;
const ImageContainer = styled.div`
  width: 30rem;
  height: 30rem;
  margin: 21rem 25rem 6rem 29rem;
`;
