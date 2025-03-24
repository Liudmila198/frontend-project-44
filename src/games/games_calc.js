import readlineSync from "readline-sync";
import { userName, getRandomNumber } from './index.js';
export const gamesCalc = () => {
  console.log('What is the result of the expression?');
  
  const operators = ['+', '-', '*'];   

  const calculateOperations = (operator, num1, num2) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return undefined
      // default:
      //   return NaN;
    }    
  };
  const getQuestionAndAnswer = () => {
    const randomOperator = operators[getRandomNumber(0, 3)];
    const num1 = getRandomNumber(6, 11);
    const num2 = getRandomNumber(0, 6);
    const anotherGameQuestion = `${num1} ${randomOperator} ${num2}`;
    const expectedAnswer = calculateOperations(randomOperator, num1, num2);
    return [anotherGameQuestion, expectedAnswer];
  };
  const calcGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
         const [anotherGameQuestion, expectedAnswer] = getQuestionAndAnswer();
          console.log(`"Question:" ${anotherGameQuestion}`);
          const myAnswer = readlineSync.question("Your answer: " );
              if (myAnswer == expectedAnswer) {
                console.log("Correct!");
              } else {
                console.log(`${myAnswer} is wrong answer ; Correct answer was ${expectedAnswer}.\nLet's try again, ${userName}!`)
                  return;
              };
            }
            console.log(`Congratulation, ${userName}!`);
      };
  calcGame();


};