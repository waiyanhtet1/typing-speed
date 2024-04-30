import Character from "./Character";
import Cursor from "./Cursor";

type TypingProps = {
  userInput: string;
  className: string;
  words: string;
};

const UserTyping = ({ userInput, className, words }: TypingProps) => {
  const typedCharacter = userInput.split("");

  return (
    <div className={className}>
      {typedCharacter.map((char, index) => (
        <Character
          key={`${char}_${index}`}
          actual={char}
          expected={words[index]}
        />
      ))}
      <Cursor />
    </div>
  );
};

export default UserTyping;
