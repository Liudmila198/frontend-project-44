import readlineSync from "readline-sync";
import { userName, getRandomNumber } from './index.js';
export const gamesCalc = () => {
  console.log('What is the result of the expression?');
  
  const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomOperator = Math.floor(Math.random() * operators.length);
    const operator = operators[randomOperator];
    return operator;
  };
  const calculateOperations = (operator, num1, num2) => {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        return undefined;
    }
    return `${result}`;
  };

  const getQuestionAndAnswer = () => {
    const randomOperator = getRandomOperator();
    const num1 = getRandomNumber(6, 11);
    const num2 = getRandomNumber(0, 6);
    const question = `${num1} ${randomOperator} ${num2}`;
    const expectedAnswer = calculateOperations(randomOperator, num1, num2);
    return [question, expectedAnswer];
  };
  const calcGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
         const [question, expectedAnswer] = getQuestionAndAnswer();
          console.log(`"Question:" ${question}`);
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