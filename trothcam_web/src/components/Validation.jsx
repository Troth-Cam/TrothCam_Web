import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Checkbox } from "../components/img/icon _checkmark circle 2_.svg";

const Validation = () => {
  const navigate = useNavigate();

  const handleContinueButtonClick = () => {
    // 확인 버튼을 누르면 회원가입 페이지로 돌아감
    navigate("/signup");
  };

  return (
    <Container>
      <CheckboxIcon />
      <ValidationMessage>유효성 확인 완료!</ValidationMessage>
      <ContinueMessage>회원가입을 계속 진행해주세요</ContinueMessage>
      <ConfirmButton onClick={handleContinueButtonClick}>확인</ConfirmButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
`;

const CheckboxIcon = styled(Checkbox)`
  width: 7rem;
  height: 7rem;
  fill: #000;
`;

const ValidationMessage = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 5rem;
  font-weight: 700;
  margin-top: 2rem;
`;

const ContinueMessage = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 3rem;
  font-weight: 400;
  margin-top: 2rem;
`;

const ConfirmButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #5980ef;
  color: #fff;
  border: none;
  text-align: center;
  font-size: 4rem;
  cursor: pointer;
  width: 16.5rem;
  height: 8rem;
  margin-top: 6rem;
  margin-left: 75rem;
`;

export default Validation;
