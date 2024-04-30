const CountDown = ({ time }: { time: number }) => {
  return (
    <div className="text-primary-400 text-2xl font-medium mb-5">
      Time: {time}
    </div>
  );
};

export default CountDown;
