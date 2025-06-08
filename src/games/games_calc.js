import readlineSync from 'readline-sync'
import { userName, getRandomNumber, createGame } from './index.js'

export const gamesCalc = () => {
  console.log('What is the result of the expression?')

  const getRandomOperator = () => {
    const operators = ['+', '-', '*']
    const randomOperator = Math.floor(Math.random() * operators.length)
    const operator = operators[randomOperator]
    return operator
  }
  const calculateOperations = (operator, num1, num2) => {
    let result
    switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '*':
        result = num1 * num2
        break
      default:
        return undefined
    }
    return `${result}`
  }

  const getQuestionAndAnswer = () => {
    const randomOperator = getRandomOperator()
    const num1 = getRandomNumber(0, 100)
    const num2 = getRandomNumber(0, 100)
    const question = `${num1} ${randomOperator} ${num2}`
    const expectedAnswer = calculateOperations(randomOperator, num1, num2)
    return [question, expectedAnswer]
  }
  const calcGame = createGame(getQuestionAndAnswer, 2)
  //calcGame ()
}
