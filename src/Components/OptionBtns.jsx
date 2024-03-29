import { useState } from "react";

const OptionBtns = (props) => {
  const {
    globalActiveBtn,
    setGlobalActiveBtn,
    title,
    img,
    userChoice,
    computerChoices,
    computerChoice,
  } = props;

  const [activeBtn, setActiveBtn] = useState(false);

  return (
    <button
      onClick={(e) => {
        setGlobalActiveBtn(true);
        setActiveBtn(true);
        userChoice.current = e.target.textContent.toLowerCase();
        computerChoice.current =
          computerChoices[Math.floor(Math.random() * computerChoices.length)];
      }}
      className={`${activeBtn && "active"} ${globalActiveBtn && "disabled"}`}
    >
      <img src={img} alt="" />
      <p>{title}</p>
    </button>
  );
};
export default OptionBtns;
