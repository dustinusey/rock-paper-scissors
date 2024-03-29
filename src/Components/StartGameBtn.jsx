const StartGameBtn = (props) => {
  const { setStartGame } = props;
  return (
    <button
      onClick={() => {
        setStartGame(true);
      }}
    >
      Start
    </button>
  );
};
export default StartGameBtn;
