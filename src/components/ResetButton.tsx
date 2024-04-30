import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

type Props = {
  onRestart: () => void;
  className: string;
};

const ResetButton = ({ onRestart: handleRestart, className }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      ref={buttonRef}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
      onClick={handleClick}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
};

export default ResetButton;
