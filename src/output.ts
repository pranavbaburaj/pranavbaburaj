import boxen from 'boxen';
import {data} from './constants';
import {italic} from 'chalk';

export const output = boxen(
  [
    `${data.name} ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelDiscord} ${data.discord}`,
    ``,
    ``,
    `${italic('         I like to code all the time')}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'green',
  }
);
