import { faker } from "@faker-js/faker";
import CountDown from "./components/CountDown";
import GenerateWord from "./components/GenerateWord";
import ResetButton from "./components/ResetButton";
import Result from "./components/Result";
import UserTyping from "./components/UserTyping";
import WordContainer from "./components/WordContainer";

const words = faker.lorem.words(10);

const App = () => {
  return (
    <>
      <CountDown time={30} />
      <WordContainer>
        <GenerateWord words={words} />
        <UserTyping className="absolute inset-0" userInput="text" />
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
