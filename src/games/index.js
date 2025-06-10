#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
let userName = readlineSync.question('May I have your name? ')
console.log('Hello, ' + userName + '!')
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const createGame = (gameDataGenerator, rounds = 2) => () => {
  for (let round = 1; round <= rounds; round++) {
    const [question, correctAnswer] = gameDataGenerator()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return false
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
  return true
}
export { userName, getRandomNumber, createGame }
