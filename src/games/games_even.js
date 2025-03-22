import readlineSync from "readline-sync";
export const gamesEven = () => {
  console.log("Welcome to the Brain Games!");

  let userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rightAnswer = (randomNumber) => (randomNumber % 2 === 0 ? "yes" : "no");

  const evenGame = () => {
    for (let countAnswer = 0; countAnswer < 3; countAnswer += 1) {
      let randomNumber = getRandomNumber(1, 100);
      console.log("Question:" + " " + randomNumber);
      const answer = readlineSync.question("Your answer: ");
      let correctAnswer = rightAnswer(randomNumber);
      if (answer === correctAnswer) {
        console.log("Correct!");
      } else {
        console.log(
          `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`
        
        )
        break;};
    }
    console.log(`Congratulations, ${userName}`);
  };
  evenGame();
};
