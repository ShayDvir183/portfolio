import { useState } from "react";
import styles from "./about.module.css";
import Cv from "../../assets/other/ShayCv.pdf";
export default function About() {
  const [btnText, setBtnText] = useState("Download My Cv");
  const learenIcon = selfLearnerIcon();
  const loyaalIcon = loyalIcon();
  const teamPlayerIcon = getTeamPlayerIcon();
  function cvClickHandler() {
    setBtnText("Thank You");
    setTimeout(() => {
      setBtnText("Download My Cv");
    }, 1500);
  }
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.skillsContainer}>
        <span className={styles.skillBox}>
          {learenIcon}
          Self Learner
        </span>
        <span className={styles.skillBox}>
          {loyaalIcon}
          Loyal
        </span>
        <span className={styles.skillBox}>
          {teamPlayerIcon}
          Team Player
        </span>
      </div>
      <div className={styles.wrap}>
        <p className={styles.text}>
          Hello! I'm Shay Dvir, a junior Full Stack Developer. I have a strong
          enthusiasm for new technologies and innovations, and I'm open to
          exciting challenges in the field. As a junior developer, I bring a
          fresh perspective and a strong motivation to learn and grow. I have a
          solid foundation in both frontend and backend development and I'm
          eager to further develop my skills. I'm seeking a full-time position
          as a junior Full Stack Developer where I can contribute to projects
          while gaining valuable experience and mentorship. If you're looking
          for a dedicated and eager junior developer to join your team, I would
          love to discuss how I can contribute to your organization's success.
          Let's connect and explore the possibilities together!
        </p>
        <a
          style={{ width: "25%", height: "100%" }}
          href={Cv}
          download={"Shay_Dvir_Cv"}
        >
          <button
            onClick={cvClickHandler}
            className={`${styles.btn} ${styles.btn_style}`}
          >
            {btnText} <div className={styles.ss}></div>
          </button>
        </a>
      </div>
    </div>
  );
}

const selfLearnerIcon = () => {
  return (
    <svg
      height={"30px"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
      />
    </svg>
  );
};

const loyalIcon = () => {
  return (
    <svg
      height={"30px"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};

const getTeamPlayerIcon = () => {
  return (
    <svg
      height={"30px"}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="inherit"
      viewBox="0 0 16 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 20.492c1.532.956 3.342 1.508 5.28 1.508 1.934 0 3.741-.55 5.272-1.503l1.24 1.582c-1.876 1.215-4.112 1.921-6.512 1.921-2.403 0-4.642-.708-6.52-1.926l1.24-1.582zm5.497-.492h-.447c-.117 0-.23-.04-.308-.109l-.593-.391h2.25l-.594.391c-.077.069-.19.109-.308.109zm-10.814-.838h-1.403c0-1.104.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414h-1.403c-.196-.606-.755-.726-1.597-.726s-1.4.115-1.597.726zm11.737-.162h-2.279c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h2.279c.138 0 .25.112.25.25s-.112.25-.25.25zm6.263 0h-1.403c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414h-1.403c-.196-.606-.755-.726-1.597-.726s-1.4.115-1.597.726zm-7.586-.986h-1.414c-.013-2.57-1.403-2.878-1.403-4.647 0-1.695 1.327-2.852 3-2.852h.02c1.663.009 2.98 1.163 2.98 2.852 0 1.769-1.391 2.077-1.404 4.647h-1.414c0-2.735 1.318-3.614 1.318-4.651 0-.856-.694-1.333-1.5-1.348h-.019c-.798.022-1.481.499-1.481 1.348 0 1.037 1.317 1.916 1.317 4.651zm-8.817-5.852c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm18-.162c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm-5.13 2.386l1.349.612-.413.91-1.298-.588c.15-.3.275-.608.362-.934zm-7.739-.001c.087.332.208.631.36.935l-1.296.588-.414-.91 1.35-.613zm-5.131-.873c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9zm18-.162c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9zm-3.5.15h-1.501c.01-.335-.02-.673-.093-1h1.594v1zm-9.498 0h-1.502v-1h1.594c-.072.327-.102.663-.092.998v.002zm7.02-2.714l1.242-.882.579.816-1.252.888c-.146-.291-.335-.566-.569-.822zm-6.044-.001c-.23.252-.418.525-.569.823l-1.251-.888.578-.816 1.242.881zm4.435-1.046l.663-1.345.897.443-.664 1.345c-.278-.184-.58-.332-.896-.443zm-2.826-.001c-.315.11-.618.258-.897.442l-.663-1.343.897-.443.663 1.344zm-2.587-9.054v2.149c-2.938 1.285-5.141 3.942-5.798 7.158l-2.034-.003c.732-4.328 3.785-7.872 7.832-9.304zm8 0c4.047 1.432 7.1 4.976 7.832 9.304l-2.034.003c-.657-3.216-2.86-5.873-5.798-7.158v-2.149zm-3.5 8.847c-.334-.04-.654-.042-1-.002v-1.529h1v1.531zm-2.097-2.531h-1.403c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.883.586 1.414h-1.403c-.196-.606-.755-.726-1.597-.726s-1.4.115-1.597.726zm1.597-7c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0 1.35c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9z"
      />
    </svg>
  );
};
