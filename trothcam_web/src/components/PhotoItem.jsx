import React, { useContext, useState } from "react";
import styled from "styled-components";
import HeartIcon from "./img/heart_icon.png";
import EmptyHeartIcon from "./img/emptyHeart_icon.png";
import api from "../apis/axios";
import ProductDetail from "./ProductDetail";
import CardPhoto from "./img/CardPhoto.png";

//import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useNavigate } from "react-router-dom";
const PhotoItemDiv = styled.div`
  width: 187px;
  display: inline-block;
  height: 238px;
  border: solid 3px #bdbdc1;
  margin-left: 16px;
  margin-top: 20px;
`;
const PhotoDiv = styled.div`
  width: 164px;
  height: 169px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 11px;
  background-image: url(${(props) => props.src});
`;
const TextDiv = styled.div`
  width: 164px;
  // border: 1px solid yellow;
  margin-left: auto;
  margin-right: auto;
  font-family: Inter;
`;
const NameDiv = styled.div`
  font-weight: 700;
  font-size: 13px;
  height: 16px;
  font-family: Inter;
  color: #222222;
`;
const IconImg = styled.img`
  width: 15px;
  height: 13.66px;
  float: right;
  cursor: pointer; // 커서를 포인터로 변경하여 클릭 가능한 상태로 보여줍니다.
`;
const LineDiv1 = styled.div`
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  font-family: Inter;
`;
const LineDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Inter;
`;
const GrayDiv1 = styled.div`
  font-size: 9px;
  color: #9fa0a3;
  font-family: Inter;
  text-overflow: ellipsis;
  margin-top: 0xp;
  overflow: hidden;
  width: 33px;
`;
const GrayDiv2 = styled.div`
  font-size: 9px;
  color: #9fa0a3;
  font-family: Inter;
`;
const PriceDiv = styled.div`
  font-weight: 400;
  font-size: 9px;
  color: #22222;
  font-family: Inter;
`;
const PhotoItem = (props) => {
  const [isLiked, setIsLiked] = useState(props.item.liked);
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");

  const clickProduct = () => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/productdetail", { state: { id: props.item.productId } });
    } else {
      //로그인 했으면
      console.log("=================================");
      console.log(props.productState);

      if (props.productState == "public") {
        navigate("/unvalidCertification", {
          state: { id: props.item.productId },
        });
      } else if (props.productState == "private") {
        navigate("/validCertification", {
          state: { id: props.item.productId },
        });
      } else {
        navigate("/Certification", { state: { id: props.item.productId } });
      }
    }
    // const location = useLocation();
    // const stateData = location.state.productId;
    // console.log(stateData);
  };
  /*    const handleClick = (e) => {
        e.stopPropagation(); // 이벤트 버블링 차단
        if(!isLiked){
            console.log(props.item.productId);
            axios.post(`/api/like-product/${props.item.productId}` , {}, {
              headers: {
                  "Authorization": `Bearer ${accessToken}`
                }
              })
              .then((response) => {
                console.log(response.data.message);
              })
              .catch((err)=>{
                console.log(err);
              });
        }
        else{
            axios.delete(`/api/like-product/${props.item.productId}`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                  }
                })
                .then((response) => {
                  console.log(response);
                })
                .catch((err)=>{
                  console.log(err);
                });
        }
        setIsLiked(!isLiked);
    };
    */
  return (
    <PhotoItemDiv onClick={clickProduct}>
      <PhotoDiv src={CardPhoto} />
      <TextDiv>
        <LineDiv1>
          <NameDiv>{props.item.title}</NameDiv>
          <IconImg
            src={isLiked ? HeartIcon : EmptyHeartIcon}
            alt="Heart Icon"
          />
        </LineDiv1>
        <GrayDiv1>{props.item.ownerToken.slice(0, 11)}</GrayDiv1>
        <LineDiv2>
          <GrayDiv2>{props.item.soldAt.slice(0, 10)}</GrayDiv2>
          <PriceDiv>{props.item.price}KRW</PriceDiv>
        </LineDiv2>
      </TextDiv>
    </PhotoItemDiv>
  );
};

export default PhotoItem;
