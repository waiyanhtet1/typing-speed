import Cursor from "./Cursor";

type TypingProps = {
  userInput: string;
  className: string;
};

const UserTyping = ({ userInput, className }: TypingProps) => {
  const typedCharacter = userInput.split("");

  return (
    <div className={className}>
      {typedCharacter.map((char, index) => (
        <span key={`${char}_${index}`} className="text-primary-400">
          {char}
        </span>
      ))}
      <Cursor />
    </div>
  );
};

export default UserTyping;
