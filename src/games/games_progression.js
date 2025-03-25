#!/usr/bin/env node
import readlineSync from "readline-sync";
import { userName, getRandomNumber } from './index.js';


export const gamesProgression = () => {
    console.log("What number is missing in the progression?");

    const buildProgression = (length, start, step) => {
        const progression = [];
        for (let i = start; progression.length < length; i += step) {
          progression.push(i);
        }
        return progression;
      };
      
      const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

      const generateRound = () => {
        const length = getRandomNumber(10, 11);
        const start = getRandomNumber(1, 10);
        const step = getRandomNumber(2, 3);
        const progression = buildProgression(length, start, step);
        const indexHiddenNumber = getRandomIndex(progression);
        const correctAnswer = progression[indexHiddenNumber].toString();
        progression[indexHiddenNumber] = '..';
        const question = progression.join(' ');
        return [question, correctAnswer];
      };
      const calcGame = () => {
            for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
                 const [question, correctAnswer] = generateRound();
                  console.log(`Question: ${question}`);
                  const myAnswer = readlineSync.question("Your answer: " );
                      if (myAnswer == correctAnswer) {
                        console.log("Correct!");
                      } else {
                        console.log(`"${myAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
                        console.log(`Let's try again, ${userName}!`)
                        return;
                      }
                    }
                    console.log(`Congratulations, ${userName}!`);
              };
          calcGame();
};
