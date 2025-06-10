#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { userName, getRandomNumber, createGame } from './index.js'

export const gamesGcd = () => {
  console.log('Find the greatest common divisor of given numbers.')

  const gcd = (num1, num2) => {
    const smaller = Math.min(num1, num2)
    let divisor = smaller
    for (divisor; divisor > 0; divisor -= 1) {
      if (num1 % divisor === 0 && num2 % divisor === 0) {
        return divisor
      }
    }
    return divisor
  }
  const getQuestionAndAnswer = () => {
    const num1 = getRandomNumber(1, 5)
    const num2 = getRandomNumber(6, 10)
    const anotherGameQuestion = `${num1} ${num2}`
    const expectedAnswer = gcd(num1, num2).toString()
    return [anotherGameQuestion, expectedAnswer]
  }
  const calcGame = createGame(getQuestionAndAnswer, 3)
  calcGame ()
}
