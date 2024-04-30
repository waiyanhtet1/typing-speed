import CountDown from "./components/CountDown";
import GenerateWord from "./components/GenerateWord";
import ResetButton from "./components/ResetButton";
import Result from "./components/Result";
import UserTyping from "./components/UserTyping";
import WordContainer from "./components/WordContainer";
import useEngine from "./hooks/useEngine";

// const words = faker.lorem.words(10);

const App = () => {
  const { state, words, timeLeft, typed } = useEngine();

  return (
    <>
      <CountDown time={timeLeft} />
      <WordContainer>
        <GenerateWord words={words} />
        <UserTyping
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordContainer>
      <ResetButton
        onRestart={() => null}
        className="mx-auto mt-10 text-slate-500"
      />
      <Result
        errors={10}
        accuracyPercentage={100}
        total={200}
        className="mt-10"
      />
    </>
  );
};

export default App;
