import {createPromptModule} from 'inquirer';
import {output} from './output';
import {questions} from './question';

// create inquirer prompt
const prompt = createPromptModule();

console.log(output);
prompt(questions).then((answer) => answer.action());
