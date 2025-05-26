//#!/usr/bin/env node
import readlineSync from "readline-sync";
import { userName, getRandomNumber } from "./index.js";

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const minRange = 0;
  const maxRange = 100;

  const isPrime = (number) => {
    const limit = Math.sqrt(number);
    if (number <= 1) {
      return false
    }
    for (let i = 2; i <= limit; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const generateRound = () => {
    const number = getRandomNumber(minRange, maxRange);
    const question = number.toString();
    const correctAnswer = isPrime(number) ? "yes" : "no";
    return [question, correctAnswer];
  };

  const calcGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
      const [question, correctAnswer] = generateRound();
      console.log(`Question: ${question}`);
      const myAnswer = readlineSync.question("Your answer: ");
      if (myAnswer == correctAnswer) {
        console.log("Correct!");
      } else {
        console.log(
          `"${myAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
        );
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  calcGame()
};
