import { faker } from "@faker-js/faker";
import CountDown from "./components/CountDown";
import GenerateWord from "./components/GenerateWord";
import ResetButton from "./components/ResetButton";

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
    </>
  );
};

export default App;
