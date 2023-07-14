import React from "react";
import styled from "styled-components";

const SignUp = () => {
  const handleCheckValidate = () => {};

  const handleCheckDuplicate = () => {};

  return (
    <SignUpContainer>
      <SignUpTitle>회원 가입</SignUpTitle>
      <Divider />
      <FormContainer>
        <TokenText>
          | Troth Cam의 Mypage 화면의 Token을 작성해주세요.
          <InfoButton>
            <InfoIcon>i</InfoIcon>
          </InfoButton>
        </TokenText>
        <InputBox placeholder="Token" type="text" />
        <ValidationButton onClick={handleCheckValidate}>
          유효성 확인
        </ValidationButton>

        <TokenText>
          | 아이디 <span>*</span>{" "}
        </TokenText>
        <InputBox placeholder="id" type="text" />
        <DuplicationButton onClick={handleCheckValidate}>
          중복 확인
        </DuplicationButton>

        <TokenText>
          | 비밀번호 <span>*</span>
        </TokenText>
        <InputBox placeholder="Password" type="password" />

        <TokenText>
          | 비밀번호 확인 <span>*</span>
        </TokenText>
        <InputBox placeholder="Password" type="password" />

        <TokenText>
          | 이름 <span>*</span>
        </TokenText>
        <InputBox placeholder="Name" type="text" />

        <TokenText>| 전화번호</TokenText>
        <InputBox placeholder="010-0000-0000" type="text" />

        <TokenText>| 이메일</TokenText>
        <InputBox placeholder="email@example.com" type="email"></InputBox>
      </FormContainer>
      <SignUpButtonContainer>
        <SignUpButton>다음</SignUpButton>
      </SignUpButtonContainer>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  background-color: #f6f6f6;
`;
const SignUpTitle = styled.div`
  width: 205px;
  height: 71px;
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
const Divider = styled.div`
  width: 1250px;
  height: 3px;
  background-color: #000;
  box-sizing: border-box;
  margin-left: 25px;
  margin-bottom: 80px;
`;
const TokenText = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-left: 180px;
  padding-bottom: 10px;
  span {
    color: #ff0000;
    padding-left: 4px;
  }
`;
const InfoButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #b8b8b8;
  margin-left: 5px;
  border: none;
`;
const InfoIcon = styled.i`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InputBox = styled.input`
  width: 45rem;
  height: 4rem;
  border: 1px solid #000;
  border-radius: 5px;
  margin-left: 180px;
  background-color: #f6f6f6;
  padding-right: 8rem;

  &::placeholder {
    color: #a8a8a8;
    font-size: 1.7rem;
    padding: 1.2rem;
  }
`;
const ValidationButton = styled.button`
  color: #ffffff;
  font-size: 1.25rem;
  border-radius: 0.3125rem;
  border: none;
  background: #5980ef;
  width: 8rem;
  height: 3.6rem;
  position: absolute;
  right: 16%;
  top: 8.3%;
`;
const SignUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
const SignUpButton = styled.button`
  color: #fff;
  font-size: 1.75rem;
  width: 6.6rem;
  height: 3.5rem;
  border-radius: 1.125rem;
  border: none;
  background: #5980ef;
`;
const DuplicationButton = styled.button`
  color: #ffffff;
  font-size: 1.25rem;
  border-radius: 0.3125rem;
  border: none;
  background: #5980ef;
  width: 8rem;
  height: 3.6rem;
  position: absolute;
  right: 16%;
  top: 22.7%;
`;
