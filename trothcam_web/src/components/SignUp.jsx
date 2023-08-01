import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBox from "./header/SearchBox";
import Validation from "./Validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [token, setToken] = useState("");
  const [tokenConfirmed, setTokenConfirmed] = useState(false);
  const [tokenError, setTokenError] = useState("");
  const [id, setId] = useState("");
  const [idConfirmed, setIdConfirmed] = useState(false);
  const [idError, setIdError] = useState("");
  const [password, setPassword] = useState("");
  const [isMasked, setIsMasked] = useState(true);
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);
  const [passwordCheckConfirmed, setPasswordCheckConfirmed] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckValidate = async (token) => {
    //유효성 확인 로직
    if (token.length >= 1) {
      navigate("/validation");
      //   const url = "/auth/validate-token";

      //   const requestBody = {
      //     webToken: token,
      //   };

      //   try {
      //     const response = await axios.post(url, requestBody);
      //     const responseData = response.data;
      //     if (responseData.isSuccess) {
      //       setTokenConfirmed(true);
      //       setTokenError("");
      //       console.log("이메일: ", responseData.result.email);
      //       navigate("/validation");
      //     } else {
      //       setTokenConfirmed(false);
      //       setTokenError("유효하지 않은 token입니다.");
      //     }
      //   } catch (error) {
      //     console.log("요청에 실패하였습니다.", error);
      //   }
    }
  };

  // 아이디가 영문으로 총 30자 이내이고, 특수문자 및 띄어쓰기를 사용하지 않았는지 확인하는 함수
  const isValidId = (id) => {
    const idRegex = /^[a-zA-Z0-9]{1,30}$/;
    return idRegex.test(id);
  };

  const handleCheckDuplicate = () => {
    //중복 확인 로직
    if (id.length >= 1) {
      //아이디 규격 확인
      if (!isValidId(id)) {
        setIdConfirmed(false);
        setIdError("아이디는 영문으로만 30자 이내로 작성되어야 합니다.");
        return;
      }

      const url = "/auth/check-id";
      const requestBody = { id };

      axios
        .post(url, requestBody)
        .then((response) => {
          const responseData = response.data;
          if (responseData.isSuccess && responseData.result.duplicated) {
            // 중복된 아이디인 경우
            setIdConfirmed(false);
            setIdError("중복된 아이디입니다.");
          } else {
            // 중복되지 않은 아이디인 경우
            setIdConfirmed(true);
            setIdError("");
          }
        })
        .catch((error) => {
          // 요청 실패
          console.log("요청에 실패하였습니다.", error);
        });
    }
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
    setTokenConfirmed(false);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
    setIdConfirmed(false);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 유효성 검사
    if (isValidPassword(newPassword)) {
      setPasswordConfirmed(true);
      setPasswordError("");
    } else {
      setPasswordConfirmed(false);
      setPasswordError(
        "비밀번호는 영문자, 숫자, 특수문자 조합을 입력해야 합니다."
      );
    }
  };

  // 비밀번호 유효성 확인 함수
  const isValidPassword = (password) => {
    // 영문자, 숫자, 특수문자 조합 정규표현식
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordConfirmChange = (e) => {
    const confirmPassword = e.target.value;

    if (password === confirmPassword) {
      setPasswordCheckConfirmed(true);
      setPasswordCheckError("");
    } else {
      setPasswordCheckConfirmed(false);
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNextButtonClick = () => {
    //각 필드 검사
    if (!tokenConfirmed) {
      setTokenError("토큰 유효성을 확인해주세요.");
    } else {
      setTokenError("");
    }

    if (!idConfirmed) {
      setIdError("아이디 중복확인을 완료해주세요.");
    } else {
      setIdError("");
    }

    if (!isValidPassword(password)) {
      setPasswordError("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPasswordError("");
    }

    if (!passwordConfirmed) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }

    if (!name) {
      setNameError("이름을 입력해주세요.");
    } else {
      setNameError("");
    }

    if (
      tokenConfirmed &&
      idConfirmed &&
      isValidPassword(password) &&
      passwordConfirmed &&
      name
    ) {
      setLoading(true);

      const url = "/auth/signup";
      const requestBody = {
        webToken: token,
        webId: id,
        webPassword: password,
        name,
        phone,
        email,
      };

      axios
        .post(url, requestBody)
        .then((response) => {
          setLoading(false);
          const responseData = response.data;
          if (responseData.isSuccess) {
            // 회원 가입 성공 시 registerfinish 페이지로 이동
            navigate("/registerfinish");
          } else {
            // 요청은 성공하였지만, 서버 측에서 에러 메시지를 전달한 경우
            alert(responseData.message);
          }
        })
        .catch((error) => {
          setLoading(false);
          alert("서버와 통신 중 오류가 발생했습니다.");
        });
    }
  };
  useEffect(() => {
    if (loading) {
      navigate("/loading");
    }
  }, [loading, navigate]);

  return (
    <SignUpContainer>
      <SearchBox />
      <SignUpTitle>회원 가입</SignUpTitle>
      <Divider />
      <FormContainer>
        <TokenText>
          | Troth Cam의 Mypage 화면의 Token을 작성해주세요.
          <InfoButton>
            <InfoIcon>i</InfoIcon>
          </InfoButton>
        </TokenText>
        <InputContainer>
          <InputBox
            placeholder="Token"
            type="text"
            value={token}
            onChange={handleTokenChange}
            disabled={tokenConfirmed}
            tokenConfirmed={tokenConfirmed}
            tokenError={!!tokenError} // 에러 메시지가 있을 때만 true로 설정
          />
          <ValidationButton
            onClick={handleCheckValidate}
            disabled={tokenConfirmed} // tokenConfirmed 값에 따라 버튼 비활성화 설정
            tokenConfirmed={tokenConfirmed} // tokenConfirmed 값을 prop으로 전달
          >
            {tokenConfirmed ? "확인 완료" : "유효성 확인"}
          </ValidationButton>
        </InputContainer>
        <ErrorMessage>{tokenError}</ErrorMessage>

        <TokenText>
          | 아이디 <span>*</span>{" "}
        </TokenText>
        <InputContainer>
          <InputBox
            placeholder="id"
            type="text"
            value={id}
            onChange={handleIdChange}
            disabled={idConfirmed}
            idConfirmed={idConfirmed}
            idError={idError}
          />
          <DuplicationButton
            onClick={handleCheckDuplicate}
            disabled={idConfirmed} // idConfirmed 값에 따라 버튼 비활성화 설정
            idConfirmed={idConfirmed}>
            중복 확인
          </DuplicationButton>
        </InputContainer>
        {idError && <ErrorMessage>{idError}</ErrorMessage>}

        <TokenText>
          | 비밀번호 <span>*</span>
        </TokenText>
        <InputContainer>
          <InputBox
            placeholder="Password"
            type={isMasked ? "password" : "text"}
            value={password}
            onChange={handlePasswordChange}
            passwordError={!!passwordError}
            passwordConfirmed={passwordConfirmed}
          />
        </InputContainer>
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

        <TokenText>
          | 비밀번호 확인 <span>*</span>
        </TokenText>
        <InputBox
          placeholder="Password"
          type="password"
          onChange={handlePasswordConfirmChange}
          passwordCheckError={!!passwordCheckError}
          passwordCheckConfirmed={passwordCheckConfirmed}
        />
        {passwordCheckError && (
          <ErrorMessage>{passwordCheckError}</ErrorMessage>
        )}

        <TokenText>
          | 이름 <span>*</span>
        </TokenText>
        <InputBox
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          nameError={!!nameError}
        />
        {nameError && <ErrorMessage>{nameError}</ErrorMessage>}

        <TokenText>| 전화번호</TokenText>
        <InputBox
          placeholder="010-0000-0000"
          type="text"
          value={phone}
          onChange={handlePhoneChange}
        />

        <TokenText>| 이메일</TokenText>
        <InputBox
          placeholder="email@example.com"
          type="email"
          value={email}
          onChange={handleEmailChange}></InputBox>
      </FormContainer>
      <SignUpButtonContainer>
        <SignUpButton onClick={handleNextButtonClick}>다음</SignUpButton>
      </SignUpButtonContainer>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const SignUpTitle = styled.div`
  width: 12.8125rem;
  height: 4.4375rem;
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: 3rem;
`;
const Divider = styled.div`
  width: 80rem;
  height: 0.18rem;
  background-color: #000;
  box-sizing: border-box;
  margin-left: 3rem;
  margin-bottom: 80px;
`;
const TokenText = styled.div`
  color: #222;
  font-family: Inter;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding-top: 4rem;
  padding-left: 15rem;
  padding-bottom: 1rem;
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
  position: relative;
`;
const InputBox = styled.input`
  width: 55rem;
  height: 4rem;
  border-radius: 0.3125rem;
  border: ${({
    tokenError,
    tokenConfirmed,
    idError,
    idConfirmed,
    passwordError,
    passwordCheckError,
    nameError,
  }) =>
    tokenError || idError || passwordError || passwordCheckError || nameError
      ? "1px solid #E86056"
      : tokenConfirmed || idConfirmed
      ? "1px solid #A8A8A8"
      : "1px solid #d2d7e1"};
  background-color: #ffffff;
  margin-left: 15rem;
  text-indent: 1.2rem;
  font-size: 1.7rem;
  color: ${({ tokenConfirmed, idConfirmed }) =>
    tokenConfirmed || idConfirmed ? "#A8A8A8" : "#000000"};
  &::placeholder {
    color: #a8a8a8;
    font-size: 1.7rem;
  }
  /* 비밀번호가 작성 중일 때 */
  &::focus {
    /* 비밀번호가 작성 중이므로 평문으로 보여줌 */
    color: #000000;
  }
`;
const ValidationButton = styled.button`
  color: ${({ tokenConfirmed }) => (tokenConfirmed ? "#A8A8A8" : "#FFFFFF")};
  font-size: 1.25rem;
  border-radius: 0.3125rem;
  border: ${({ tokenConfirmed }) =>
    tokenConfirmed ? "1px solid #A8A8A8" : "none"};
  background: ${({ tokenConfirmed }) =>
    tokenConfirmed ? "#FFFFFF" : "#5980ef"};
  width: 8rem;
  height: 3.6rem;
  position: absolute;
  right: 1rem;
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
  color: ${({ idConfirmed }) => (idConfirmed ? "#A8A8A8" : "#FFFFFF")};
  font-size: 1.25rem;
  border-radius: 0.3125rem;
  border: ${({ idConfirmed }) => (idConfirmed ? "1px solid #A8A8A8" : "none")};
  background: ${({ idConfirmed }) => (idConfirmed ? "#FFFFFF" : "#5980ef")};
  width: 8rem;
  height: 3.6rem;
  position: absolute;
  right: 1rem;
`;
const ErrorMessage = styled.span`
  color: #e86056;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-left: 15rem;
`;
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 70rem;
`;
