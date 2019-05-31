export const compareCombination = (originalGuess, originalExpected) => {
  let guess = [...originalGuess];
  let expected = [...originalExpected];
  const result = [];

  // Find matching positions
  const positionMatch = (g, index) => g === expected[index];
  while (guess.some(positionMatch)) {
    const index = guess.findIndex(positionMatch);
    guess.splice(index, 1);
    expected.splice(index, 1);
    result.push("black");
  }

  // Find color matches
  const colorMatch = g => expected.some(e => e === g);
  while (guess.some(colorMatch)) {
    const guessIndex = guess.findIndex(colorMatch);
    const expectedIndex = expected.findIndex(e => e === guess[guessIndex]);
    guess.splice(guessIndex, 1);
    expected.splice(expectedIndex, 1);
    result.push("white");
  }

  return [
    ...result,
    ...Array.from({ length: originalExpected.length - result.length }).map(
      () => null
    )
  ];
};
