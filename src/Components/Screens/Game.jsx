import { useEffect, useRef, useState } from "react";
import loader from "../../assets/loader.png";
import paper from "../../assets/paper.png";
import rock from "../../assets/rock.png";
import scissors from "../../assets/scissors.png";
import OptionBtns from "../OptionBtns";

const options = [
  { option: "Rock", img: rock },
  { option: "Paper", img: paper },
  { option: "Scissors", img: scissors },
];

const Game = (props) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [globalActiveBtn, setGlobalActiveBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const computerChoices = ["rock", "paper", "sccisors"];
  const computerChoice = useRef(
    computerChoices[Math.floor(Math.random() * computerChoices.length)]
  );
  const userChoice = useRef();

  const { hasWon, setHasWon, hasLost, setHasLost, hasDraw, setHasDraw } = props;

  useEffect(() => {
    if (animationIndex < 2) {
      const interval = setInterval(() => {
        setAnimationIndex((animationIndex + 1) % options.length);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        setLoading(true);
      }, 3000);
      setTimeout(() => {
        checkAnswers();
      }, 5000);
    }
  });

  function checkAnswers() {
    setLoading(false);
    setGameOver(true);
    const user = userChoice.current;
    const comp = computerChoice.current;
    if (user === comp) {
      setHasDraw(true);
    } else if (user === "rock" && comp === "scissors") {
      setHasWon(true);
      console.log(`${user} beats ${comp}`);
    } else if (user === "paper" && comp === "rock") {
      setHasWon(true);
      console.log(`${user} beats ${comp}`);
    } else if (user === "scissors" && comp === "paper") {
      setHasWon(true);
      console.log(`${user} beats ${comp}`);
    } else {
      setHasLost(true);

      console.log(`${user} loses to ${comp}`);
    }
  }

  function resetGame() {
    setLoading(false);
    setGameOver(false);
    setGlobalActiveBtn(false);
    setAnimationIndex(0);
    setHasWon(false);
    setHasLost(false);
    setHasDraw(false);
  }

  return (
    <div className="game">
      <div className="animation">
        {loading ? (
          <p>. . . </p>
        ) : !gameOver ? (
          <p>{`${options[animationIndex].option}...`}</p>
        ) : (
          <>
            {hasWon && (
              <>
                <p>YOU WIN!</p>
                <p>
                  The computer chose <span>{computerChoice.current}</span>
                </p>
              </>
            )}
            {hasLost && (
              <>
                <p>YOU LOSE!</p>
                <p>
                  The computer chose <span>{computerChoice.current}</span>
                </p>
              </>
            )}
            {hasDraw && (
              <>
                <p>It&apos;s a DRAW</p>
                <p>
                  The computer chose <span>{computerChoice.current}</span>
                </p>
              </>
            )}
          </>
        )}

        <img
          className={
            (loading ? "loading" : null) || (gameOver ? "gameover" : null)
          }
          src={
            (loading && loader) ||
            (gameOver &&
              options[
                computerChoices.indexOf(computerChoice.current.toLowerCase())
              ].img) ||
            options[animationIndex].img
          }
          alt=""
        />

        {gameOver && (
          <p>
            and you chose <span>{userChoice.current}</span>
          </p>
        )}
      </div>
      {!gameOver ? (
        <div className="btn-group">
          {options.map((option, i) => (
            <OptionBtns
              key={i}
              globalActiveBtn={globalActiveBtn}
              setGlobalActiveBtn={setGlobalActiveBtn}
              title={option.option}
              img={option.img}
              userChoice={userChoice}
              computerChoices={computerChoices}
              computerChoice={computerChoice}
            />
          ))}
        </div>
      ) : (
        <button onClick={() => resetGame()}>Play Again?</button>
      )}
    </div>
  );
};
export default Game;
