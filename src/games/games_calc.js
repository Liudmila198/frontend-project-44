import readlineSync from "readline-sync";
export const gamesCalc = () => {
  console.log("Welcome to the Brain Games!");

  let userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");

  const randomNumber = (min, max) => {
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
const getQuestionAndAnswer = () => {
  const randomOperator = operators[randomNumber(0, 3)];
  const num1 = randomNumber(0, 11);
  const num2 = randomNumber(0, 11);
  console.log(111111, num1, num2)
  const anotherGameQuestion = `${num1} ${randomOperator} ${num2}`;
  const expectedAnswer = calculateOperations(randomOperator, num1, num2);
  return [anotherGameQuestion, expectedAnswer];
};
  const calcGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
          //let randomNumber = getRandomNumber(1, 100);
          console.log(`"Question:" ${}`);
          const answer = readlineSync.question("Your answer: ");
          //let correctAnswer = calculateOperations(randomOperator, num1, num2);
          if (answer === getQuestionAndAnswer()) {
            console.log("Correct!");
          } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${calculateOperations(operators, num1, num2)}`               //${correctAnswer}`
            )
            break;};
        }
        console.log("Congratulation");
      };
  calcGame();
};
