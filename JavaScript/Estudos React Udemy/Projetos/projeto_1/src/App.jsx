//CSS
import "./App.css";

//Components
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import StartScreen from "./components/StartScreen";

//Data
import listaPalavras from "./data/words";

//React
import { useCallback, useEffect, useState } from "react";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [palavras] = useState(listaPalavras);

  //Word
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(palavras);
    const category = categories[Math.floor(Math.random() * categories.length)];

    //pick a random word
    const word =
      palavras[category][Math.floor(Math.random() * palavras[category].length)];

    return { word, category };
  }, [palavras]);

  //Start the game
  const startGame = useCallback(() => {
    //Clear all letters
    clearLetterStates();

    const { word, category } = pickWordAndCategory();

    //Create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    //Fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    //Start the game
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //Process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //push guessedd letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actual) => [...actual, normalizedLetter]);
    } else {
      setWrongLetters((actual) => [...actual, normalizedLetter]);
      setGuesses((actual) => actual - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      //Reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    //win condition
    if (guessedLetters.length === uniqueLetters.length) {
      //Add score
      setScore((actual) => actual + 100);
      //Restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  //Restarts the game
  const retry = () => {
    //Reset score and guesses
    setScore(0);
    setGuesses(3);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
