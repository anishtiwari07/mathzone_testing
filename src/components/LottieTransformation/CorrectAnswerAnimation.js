import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import cloneDeep from "lodash.clonedeep";
import animationData from "../../assets/LottieAnimation/correctAnswerLottie.json";
import styles from "./LottieMathZone.module.css"
const removeWhiteSpace=(container)=>{

}
export default function CorrectAnswerAnimation() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: "false",
      autoplay: "false",
      animationData: cloneDeep(animationData),
    });
removeWhiteSpace(container)
  }, []);
  return (
    <div>
      <div className={`sampleoneanimation ${styles.correctAnswerAnimation}`} ref={container}></div>
    </div>
  );
}
