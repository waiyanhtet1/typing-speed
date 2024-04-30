import { useCallback, useEffect, useState } from "react";
import { countErrors } from "../utils/helpers";
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

  const [errors, setErrors] = useState(0);

  // const isStarting = state === "start" && cursor > 0;

  const sumErros = useCallback(() => {
    const wordReached = words.substring(0, cursor);
    setErrors((prev) => prev + countErrors(typed, wordReached));
  }, [words, typed, cursor]);

  // as soon as user typing , we start
  useEffect(() => {
    if (state === "start" && cursor > 0) {
      setState("run");
      startCountDown();
    }
  }, [startCountDown, cursor, state]);

  // when time up ,finish
  useEffect(() => {
    if (!timeLeft) {
      console.log("time up");
      setState("finish");
      sumErros();
    }
  }, [timeLeft, sumErros]);

  // when finsh typing all char, generate new set of words
  useEffect(() => {
    if (cursor === words.length) {
      console.log("words finished");
      sumErros();
      updateWords();
      clearTyped();
    }
  }, [cursor, words, clearTyped, typed, updateWords, sumErros]);

  const restart = useCallback(() => {
    console.log("Restarting");
    resetCountDown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountDown, resetTotalTyped]);

  return { state, words, timeLeft, typed, errors, totalTyped, restart };
};

export default useEngine;
