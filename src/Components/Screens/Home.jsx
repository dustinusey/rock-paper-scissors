import StartGameBtn from "../StartGameBtn";

const Home = (props) => {
  const { setStartGame } = props;
  return (
    <div className="home">
      <StartGameBtn setStartGame={setStartGame} />
    </div>
  );
};
export default Home;
