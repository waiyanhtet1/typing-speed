import { faker } from "@faker-js/faker";
import CountDown from "./components/CountDown";
import GenerateWord from "./components/GenerateWord";

const words = faker.lorem.words(10);

const App = () => {
  return (
    <>
      <CountDown time={30} />
      <GenerateWord words={words} />
    </>
  );
};

export default App;
