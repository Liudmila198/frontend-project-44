import { getRandomNumber, createGame } from '../index.js'

export const gamesCalc = () => {
  const gameDescription = 'What is the result of the expression?'

  const getRandomOperator = () => {
    const operators = ['+', '-', '*']
    const randomOperator = Math.floor(Math.random() * operators.length)
    const operator = operators[randomOperator]
    return operator
  }
  const calculateOperations = (operator, num1, num2) => {
    switch (operator) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      default:
        return undefined
    }
  }
  const getQuestionAndAnswer = () => {
    const randomOperator = getRandomOperator()
    const num1 = getRandomNumber(10, 5)
    const num2 = getRandomNumber(5, 0)
    const question = `${num1} ${randomOperator} ${num2}`
    const expectedAnswer = calculateOperations(randomOperator, num1, num2)
    return [question, expectedAnswer]
  }

  createGame(gameDescription, getQuestionAndAnswer)
}
