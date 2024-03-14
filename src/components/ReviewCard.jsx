import { star } from "@/assets";
import Image from "next/image";
import React from "react";

function ReviewCard() {
  return (
    <div className="ReviewCard">
      <div className="ReviewCard__top">
        <div className="ReviewCard__top__left">
          <h1>&#x201C;</h1>
          <h2>Sally Radley</h2>
          <p>WebGFi - CEO</p>
        </div>
        <div className="ReviewCard__top__right">
          <div className="ReviewCard__top__right__img" />
        </div>
      </div>
      <div className="ReviewCard__bottom">
        <div className="ReviewCard__bottom__starts">
      <Image src={star}  alt="star" height={28} width={28}/>
      <Image src={star}  alt="star" height={28} width={28}/>

      <Image src={star}  alt="star" height={28} width={28}/>
      <Image src={star}  alt="star" height={28} width={28}/>
      <Image src={star}  alt="star" height={28} width={28}/>

        </div>

        <p>
          “It felt like the auditing team was available within a short
          timeframe, which was excellent. The auditing process looked thorough,
          and I really appreciate the fact that you took time to investigate GAS
          optimizations.”
        </p>
        <h1>&#x201D;</h1>

      </div>

    </div>
  );
}

export default ReviewCard;
