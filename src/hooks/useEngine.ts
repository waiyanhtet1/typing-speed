import { useState } from "react";
import useCountDown from "./useCountDown";
import useTyping from "./useTyping";
import useWords from "./useWords";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { timeLeft, startCountDown, resetCountDown } =
    useCountDown(COUNTDOWN_SECONDS);

  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTyping(
    state !== "finish"
  );

  return { state, words, timeLeft, typed };
};

export default useEngine;
