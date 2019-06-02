const colorValues = {
  blue: "blue",
  green: "green",
  yellow: "yellow",
  red: "red",
  black: "black",
  white: "white",
  purple: "purple",
  grey: "grey"
};

export const createGame = (
  lengthOfCombination,
  numberOfColors,
  numberOfGuesses
) => ({
  guesses: [],
  nextGuess: Array.from({ length: lengthOfCombination }).map(() => null),
  numberOfGuesses,
  colors: Object.keys(colorValues).slice(0, numberOfColors),
  combination: Array.from({ length: lengthOfCombination }).map(
    () => Object.keys(colorValues)[Math.floor(Math.random() * numberOfColors)]
  ),
  hasStartedPlaying: false,
  isFinished: false,
  selectedColor: null,
  validCombinations: Array.from({ length: lengthOfCombination }).reduce(acc => {
    if (acc.length === 0) {
      return Object.keys(colorValues)
        .slice(0, numberOfColors)
        .map(color => [color]);
    }
    return acc.reduce(
      (acc, combination) => [
        ...acc,
        ...Object.keys(colorValues)
          .slice(0, numberOfColors)
          .map(color => [...combination, color])
      ],
      []
    );
  }, [])
});
