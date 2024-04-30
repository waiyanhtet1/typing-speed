import { faker } from "@faker-js/faker";
import CountDown from "./components/CountDown";
import GenerateWord from "./components/GenerateWord";
import ResetButton from "./components/ResetButton";
import Result from "./components/Result";

const words = faker.lorem.words(10);

const App = () => {
  return (
    <>
      <CountDown time={30} />
      <GenerateWord words={words} />
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
