type ResultProps = {
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
};

const Result = ({
  errors,
  accuracyPercentage,
  total,
  className,
}: ResultProps) => {
  return (
    <ul
      className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
    >
      <li className="text-xl font-semibold">Results</li>
      <li>Accurancy {accuracyPercentage}</li>
      <li className="text-red-500">Errors: {errors}</li>
      <li>Typed: {total}</li>
    </ul>
  );
};

export default Result;
