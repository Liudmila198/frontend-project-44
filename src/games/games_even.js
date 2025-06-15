import { getRandomNumber } from '../utils.js'
import { createGame } from '../index.js'
gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [number, correctAnswer]
}

export default () => createGame(gameDescription, generateRound)
