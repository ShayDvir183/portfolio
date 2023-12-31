import styles from "./contact.module.css";
import { useRef, Fragment } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const formm = useRef<HTMLFormElement>(null);
  const user_name = useRef(null);
  const modalRef = useRef(null);
  const sendEmail = (e: any) => {
    if (!formm) return;
    e.preventDefault();
    // @ts-ignore
    modalRef.current.style.display = "block";
    emailjs
      .sendForm(
        "service_mi89wxd",
        "template_5ifx28s",
        // @ts-ignore
        formm.current,
        "R5aVQ4dedYYHqKVoc"
      )
      .then(
        (result) => {
          console.log(result);
          // @ts-ignore
          modalRef.current.style.display = "none";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={`${styles.container} container-fluid`} id="contact">
      <div className={styles.header}>
        <h1 className={styles.title}>Get in touch</h1>
        <h2 className={styles.secondTitle}>
          Developer at Your Service: Let's Chat!
        </h2>
      </div>
      <div className="row d.flex justify-content-center">
        <div className={`${styles.leftWrap} col-md-5  `}>
          {contacts.map((c: IContact, index: number) => {
            return createContactDiv(c);
          })}
        </div>
        <div className={`${styles.rightWrap} col-md-5  `}>
          <form
            className={`${styles.formWrap} mt-5`}
            onSubmit={sendEmail}
            ref={formm}
          >
            <label className={styles.label}>Name</label>
            <input
              className={styles.textInput}
              required
              onInvalid={(e) => {
                // @ts-ignore
                user_name.current.style.border = "3px solid red";
                e.preventDefault();
                setTimeout(() => {
                  // @ts-ignore
                  user_name.current.style.border = "1px solid black";
                }, 3000);
              }}
              type="text"
              name="user_name"
              ref={user_name}
              data-toggle="popover"
              title="Popover title"
              data-content="And here's some amazing content. It's very engaging. Right?"
            />
            <label className={styles.label}>Email</label>
            <input
              required
              className={styles.textInput}
              type="email"
              name="user_email"
              onInvalid={(e) => {
                e.preventDefault();
              }}
            />
            <label className={styles.label}>Message</label>
            <textarea
              required
              className={styles.textAreaInput}
              name="message"
              onInvalid={(e) => {
                e.preventDefault();
              }}
            />
            <input className="btn btn-primary" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div ref={modalRef} id="myModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <div className="modal-header">
            <h2>Thank You</h2>
          </div>
          <div className="modal-body">
            <p>Thank you for contacting me</p>
            <p>Will reach you soon</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                // @ts-ignore
                modalRef.current.style.display = "none";
              }}
              className={styles.btn}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const getWhatsappIcon = () => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
      fill="#BFC8D0"
    />
    <path
      d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
      fill="url(#paint0_linear_87_7264)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
      fill="white"
    />
    <path
      d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_87_7264"
        x1="26.5"
        y1="7"
        x2="4"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5BD066" />
        <stop offset="1" stopColor="#27B43E" />
      </linearGradient>
    </defs>
  </svg>
);
const getCallIcon = () => (
  <svg
    width="10px"
    height="10px"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z"
      stroke="#1C274C"
      strokeWidth="1.5"
    />
    <path
      opacity="0.5"
      d="M14.1007 16.0272L13.5569 15.5107L14.1007 16.0272ZM14.5562 15.5477L15.1 16.0642H15.1L14.5562 15.5477ZM16.9728 15.2123L16.5987 15.8623H16.5987L16.9728 15.2123ZM18.8833 16.312L18.5092 16.962L18.8833 16.312ZM19.4217 19.7584L19.9655 20.2749L19.4217 19.7584ZM18.0011 21.254L17.4573 20.7375L18.0011 21.254ZM16.6763 21.9631L16.7499 22.7095L16.6763 21.9631ZM6.81536 17.4752L7.35915 16.9587L6.81536 17.4752ZM2.00289 7.96594L1.25397 8.00613L1.25397 8.00613L2.00289 7.96594ZM8.47752 9.50311L9.02131 10.0196H9.02131L8.47752 9.50311ZM8.63424 6.6931L9.24664 6.26012L8.63424 6.6931ZM7.37326 4.90961L6.76086 5.3426V5.3426L7.37326 4.90961ZM4.26145 4.60864L4.80524 5.12516L4.26145 4.60864ZM2.69185 6.26114L2.14806 5.74462L2.14806 5.74462L2.69185 6.26114ZM10.0631 14.0559L10.6069 13.5394L10.0631 14.0559ZM14.6445 16.5437L15.1 16.0642L14.0124 15.0312L13.5569 15.5107L14.6445 16.5437ZM16.5987 15.8623L18.5092 16.962L19.2575 15.662L17.347 14.5623L16.5987 15.8623ZM18.8779 19.2419L17.4573 20.7375L18.5449 21.7705L19.9655 20.2749L18.8779 19.2419ZM16.6026 21.2167C15.1676 21.3584 11.4233 21.2375 7.35915 16.9587L6.27157 17.9917C10.7009 22.655 14.9261 22.8895 16.7499 22.7095L16.6026 21.2167ZM7.35915 16.9587C3.48303 12.8778 2.83285 9.43556 2.75181 7.92574L1.25397 8.00613C1.35322 9.85536 2.1384 13.6403 6.27157 17.9917L7.35915 16.9587ZM8.7345 10.3216L9.02131 10.0196L7.93372 8.9866L7.64691 9.28856L8.7345 10.3216ZM9.24664 6.26012L7.98565 4.47663L6.76086 5.3426L8.02185 7.12608L9.24664 6.26012ZM3.71766 4.09213L2.14806 5.74462L3.23564 6.77765L4.80524 5.12516L3.71766 4.09213ZM8.1907 9.80507C7.64691 9.28856 7.64622 9.28929 7.64552 9.29002C7.64528 9.29028 7.64458 9.29102 7.64411 9.29152C7.64316 9.29254 7.64219 9.29357 7.64121 9.29463C7.63924 9.29675 7.6372 9.29896 7.6351 9.30127C7.63091 9.30588 7.62646 9.31087 7.62178 9.31625C7.61243 9.32701 7.60215 9.33931 7.59116 9.3532C7.56918 9.38098 7.54431 9.41512 7.51822 9.45588C7.46591 9.53764 7.40917 9.64531 7.36112 9.78033C7.26342 10.0549 7.21018 10.4185 7.27671 10.8726C7.40742 11.7647 7.99198 12.9644 9.51933 14.5724L10.6069 13.5394C9.17926 12.0363 8.82761 11.1106 8.76086 10.6551C8.72866 10.4354 8.76138 10.3196 8.77432 10.2832C8.78159 10.2628 8.78635 10.2571 8.78169 10.2644C8.77944 10.2679 8.77494 10.2745 8.76738 10.2841C8.76359 10.2888 8.75904 10.2944 8.7536 10.3006C8.75088 10.3038 8.74793 10.3071 8.74476 10.3106C8.74317 10.3123 8.74152 10.3141 8.73981 10.3159C8.73896 10.3169 8.73809 10.3178 8.7372 10.3187C8.73676 10.3192 8.73608 10.3199 8.73586 10.3202C8.73518 10.3209 8.7345 10.3216 8.1907 9.80507ZM9.51933 14.5724C11.0422 16.1757 12.1923 16.806 13.0698 16.9485C13.5201 17.0216 13.8846 16.9632 14.1606 16.8544C14.2955 16.8012 14.4022 16.7387 14.4823 16.6819C14.5223 16.6535 14.5556 16.6266 14.5824 16.6031C14.5959 16.5913 14.6077 16.5803 14.618 16.5703C14.6232 16.5654 14.628 16.5606 14.6324 16.5562C14.6346 16.554 14.6367 16.5518 14.6387 16.5497C14.6397 16.5487 14.6407 16.5477 14.6417 16.5467C14.6422 16.5462 14.6429 16.5454 14.6431 16.5452C14.6438 16.5444 14.6445 16.5437 14.1007 16.0272C13.5569 15.5107 13.5576 15.51 13.5583 15.5093C13.5585 15.509 13.5592 15.5083 13.5596 15.5078C13.5605 15.5069 13.5614 15.506 13.5623 15.5051C13.5641 15.5033 13.5658 15.5015 13.5674 15.4998C13.5708 15.4965 13.574 15.4933 13.577 15.4904C13.583 15.4846 13.5885 15.4796 13.5933 15.4754C13.6028 15.467 13.6099 15.4616 13.6145 15.4584C13.6239 15.4517 13.6229 15.454 13.6102 15.459C13.5909 15.4666 13.5 15.4987 13.3103 15.4679C12.9077 15.4025 12.0391 15.0472 10.6069 13.5394L9.51933 14.5724ZM7.98565 4.47663C6.97206 3.04305 4.94384 2.80119 3.71766 4.09213L4.80524 5.12516C5.32808 4.57471 6.24851 4.61795 6.76086 5.3426L7.98565 4.47663ZM2.75181 7.92574C2.73038 7.52644 2.90425 7.12654 3.23564 6.77765L2.14806 5.74462C1.61221 6.30877 1.20493 7.09246 1.25397 8.00613L2.75181 7.92574ZM17.4573 20.7375C17.1783 21.0313 16.8864 21.1887 16.6026 21.2167L16.7499 22.7095C17.497 22.6357 18.1016 22.2373 18.5449 21.7705L17.4573 20.7375ZM9.02131 10.0196C9.98889 9.00095 10.0574 7.40678 9.24664 6.26012L8.02185 7.12608C8.44399 7.72315 8.37926 8.51753 7.93372 8.9866L9.02131 10.0196ZM18.5092 16.962C19.33 17.4345 19.4907 18.5968 18.8779 19.2419L19.9655 20.2749C21.2704 18.901 20.8904 16.6019 19.2575 15.662L18.5092 16.962ZM15.1 16.0642C15.4854 15.6584 16.086 15.5672 16.5987 15.8623L17.347 14.5623C16.2485 13.93 14.8861 14.1113 14.0124 15.0312L15.1 16.0642Z"
      fill="#1C274C"
    />
  </svg>
);
const getEmailICon = () => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25h2.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
      fill="#080341"
    />
  </svg>
);
const contacts: Array<IContact> = [
  {
    icon: getEmailICon(),
    data: "shaydvir12312@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shaydvir12312@gmail.com",
    iconText: "Email",
    text: "Email me",
  },
  {
    icon: getWhatsappIcon(),
    data: "+972-54-883-0701",
    href: "https://api.whatsapp.com/send?phone=972548830701&text=Hi,%20Nice%20to%20meet%20you",
    iconText: "Whatsapp",
    text: "Let's Talk",
  },
  {
    icon: getCallIcon(),
    data: "+972-54-883-0701",
    href: "tel:+972548830701",
    iconText: "Call me",
    text: "Call",
  },
];
const createContactDiv = (contact: IContact) => {
  return (
    <div className={`${styles.contactWrap} col-md-6`} key={contact.href}>
      <h2>
        {contact.iconText}
        <i>{contact.icon}</i>
      </h2>
      <h4>{contact.data}</h4>
      <a
        href={contact.href}
        target="_blank"
        rel="noreferrer"
        className={
          contact.text === "Call"
            ? `${styles.call} btn btn-primary`
            : "btn btn-primary"
        }
      >
        {contact.text === "Call" ? (
          <Fragment>
            <i>{contact.icon}</i>
            {contact.text}
          </Fragment>
        ) : (
          contact.text
        )}
      </a>
    </div>
  );
};
interface IContact {
  icon: JSX.Element;
  iconText: string;
  href: string;
  text: string;
  data: string;
}
