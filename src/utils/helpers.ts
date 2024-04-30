export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + "%";
};

export const countErrors = (actual: string, expected: string) => {
  const expectedCharacter = expected.split("");

  return expectedCharacter.reduce((erros, expectedChar, i) => {
    if (actual[i] !== expectedChar) erros++;
    return erros;
  }, 0);
};

export const calculateAccuracyPercentage = (erros: number, total: number) => {
  if (total > 0) {
    const corrects = total - erros;
    return (corrects / total) * 100;
  }
  return 0;
};
