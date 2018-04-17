#!/usr/bin/env node
import {getPlayerName} from '..'
var colors = require('colors');

console.log('Welcome,'.magenta + ' to the ' + 'Brain'.bold.black + ' Games!');
console.log('Hello, ' + `${getPlayerName()}`.bold.black + '!');
