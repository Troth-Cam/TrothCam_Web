import styled from "styled-components";
import SearchBox from "./header/SearchBox";

const RegisterFinish = () => {
  return (
    <RegisterFinishContainer>
      <SearchBox></SearchBox>
      <img></img>
      <RegisterFinishText>Trothly 인증 확인 완료!</RegisterFinishText>
      <EnjoypictureText>
        지금 바로 다양한 사진을{"\n"}무제한으로 감상하세요.
      </EnjoypictureText>
      <KeepButtonContainer>
        <KeepButton>계속하기</KeepButton>
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
