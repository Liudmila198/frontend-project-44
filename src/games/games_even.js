import readlineSync from "readline-sync";
export const gamesEven = () => {
  console.log("Welcome to the Brain Games!");

  let userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (number) => number % 2 === 0;

  const generateRound = () => {
    const number = getRandomNumber(1, 100);
    const question = number.toString();
    const correctAnswer = isEven(number) ? "yes" : "no";
    return [question, correctAnswer];
  };

  const evenGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
      const [question, correctAnswer] = generateRound();
      console.log(`Question: ${question}`);
      const answer = readlineSync.question("Your answer: ");
      //let correctAnswer = rightAnswer(question);
      if (answer === correctAnswer) {
        console.log("Correct!");
      } else {
        console.log(
          `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
        );
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  evenGame();
};
