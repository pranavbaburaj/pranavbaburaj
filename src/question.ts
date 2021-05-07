import { green, magenta } from 'chalk'
import open = require('open')

export const questions = [
    {
      type: "list",
      name: "action",
      message: "What you want to do?",
      choices: [
        {
          name: `Send me an ${green.bold("email")}?`,
          value: () => {
            open("mailto:diamonddevstuff@gmail.com");
            console.log("\nDone, see you soon.\n");
          }
        },
        {
            name : `Dm me on ${magenta("discord")}?`,
            value : () => {
                open("https://discord.com/users/763820556491161650")
            }
        },
        {
          name: "Just quit.",
          value: () => {
            console.log("Ok, bye.\n");
          }
        }
      ]
    }
  ];