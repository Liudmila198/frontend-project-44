#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { getRandomNumber } from './utils.js'

const createGame = (gameDescription, gameDataGenerator, rounds = 3) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!\n${gameDescription}`)

  for (let round = 1; round <= rounds; round++) {
    const [question, correctAnswer] = gameDataGenerator()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}

export { getRandomNumber, createGame }
