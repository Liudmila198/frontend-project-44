import readlineSync from "readline-sync";
export const gamesCalc = () => {
  console.log("Welcome to the Brain Games!");

  let userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  console.log('What is the result of the expression?');

  const operators = ['+', '-', '*'];
  
const calculateOperations = (operators, num1, num2) => {
  let result;
  switch (operators) {
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
  const calcGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
          //let randomNumber = getRandomNumber(1, 100);
          console.log(`"Question:" ${getQuestionAndAnswer()}`);
          const answer = readlineSync.question("Your answer: ");
          //let correctAnswer = calculateOperations(randomOperator, num1, num2);
          if (answer === getQuestionAndAnswer()) {
            console.log("Correct!");
          } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${getQuestionAndAnswer()}`               //${correctAnswer}`
            )
            break;};
        }
        console.log("Congratulation");
      };
  calcGame();
};
