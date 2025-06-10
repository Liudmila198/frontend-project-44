#!/usr/bin/env node
import { getRandomNumber, createGame } from './index.js'

export const gamesProgression = () => {
  console.log('What number is missing in the progression?')

  const buildProgression = (length, start, step) => {
    const progression = []
    for (let i = start; progression.length < length; i += step) {
      progression.push(i)
    }
    return progression
  }

  const getRandomIndex = data => Math.floor(Math.random() * data.length)

  const generateRound = () => {
    const length = getRandomNumber(5, 10)
    const start = getRandomNumber(1, 100)
    const step = getRandomNumber(1, 10)
    const progression = buildProgression(length, start, step)
    const indexHiddenNumber = getRandomIndex(progression)
    const correctAnswer = progression[indexHiddenNumber].toString()
    progression[indexHiddenNumber] = '..'
    const question = progression.join(' ')
    return [question, correctAnswer]
  }
  const calcGame = createGame(generateRound, 3)
  calcGame ()
}
