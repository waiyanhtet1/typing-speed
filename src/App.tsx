import CountDown from "./components/CountDown";
import GenerateWord from "./components/GenerateWord";
import ResetButton from "./components/ResetButton";
import Result from "./components/Result";
import UserTyping from "./components/UserTyping";
import WordContainer from "./components/WordContainer";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

// const words = faker.lorem.words(10);

const App = () => {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();

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
        onRestart={restart}
        className="mx-auto mt-10 text-slate-500"
      />
      <Result
        state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
};

export default App;
