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
  const calculateOperations = (operator, num1, num2) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return NaN;
    }    
  };
  const getQuestionAndAnswer = () => {
    const randomOperator = operators[randomNumber(0, 3)];
    const num1 = randomNumber(6, 11);
    const num2 = randomNumber(0, 6);
    const anotherGameQuestion = `${num1} ${randomOperator} ${num2}`;
    const expectedAnswer = calculateOperations(randomOperator, num1, num2);
    return [anotherGameQuestion, expectedAnswer];
  };
  const calcGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
         const [anotherGameQuestion, expectedAnswer] = getQuestionAndAnswer();
         //console.log(111111, anotherGameQuestion, expectedAnswer)
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