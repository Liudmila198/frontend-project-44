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
  //let result;
    //console.log(444, operator, num1, num2);
    switch (operator) {
      case '+':
        return num1 + num2;
    //console.log(333, result) 
      case '-':
        return num1 - num2;
        //break;
      case '*':
        return num1 * num2;
        //break;
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
console.log(55555, expectedAnswer);
    return [anotherGameQuestion, expectedAnswer];
    
  };
  const calcGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
          const questionA = getQuestionAndAnswer()[0];
          const rightAnswer = getQuestionAndAnswer()[1];
          console.log(`"Question:" ${questionA}`);
          const myAnswer = readlineSync.question("Your answer: " );
              if (myAnswer === rightAnswer) {
                console.log("Correct!");
              } else {
                console.log(`${myAnswer} is wrong answer ; Correct answer was ${rightAnswer}`)
                break;};
            }
            console.log("Congratulation");
      };
  calcGame();
};
