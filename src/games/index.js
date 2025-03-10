#!/usr/bin/env node

import readlineSync from "readline-sync";
      console.log("Welcome to the Brain Games!");
      let userName = readlineSync.question("May I have your name? ");
      console.log("Hello, " + userName + "!");
      const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
export { userName, getRandomNumber};

  