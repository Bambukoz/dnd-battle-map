'use strict';

import {DiceRoller} from 'rpg-dice-roller';

const dices = document.querySelector('.dices');

const text = document.querySelector('#log')
const container = document.querySelector('.log')
let rollLog = []

const setText = () => {
  text.textContent = rollLog.join('\u000A')
  container.scrollTop = container.scrollHeight;
}

window.onload = () => {
  rollLog = JSON.parse(localStorage.getItem("Log")).concat(rollLog)
  setText()
}

const rollThisDiceNow = (dice, text) => {
  const roller = new DiceRoller();
  roller.roll(dice)
  console.log(roller.log);
  if (rollLog.length < 50) {
    rollLog.push(`${text}: ${roller.total}`);
  } else {
    rollLog.splice(0, 10);
    rollLog.push(`${text}: ${roller.total}`);
  }
  localStorage.setItem(`Log`, JSON.stringify(rollLog));
  setText()
};

const listenToMyDice = (evt) => {
  switch (evt.target.id) {
    case 'd4':
      rollThisDiceNow('1d4', 'd4')
      break;
    case 'd6':
      rollThisDiceNow('1d6', 'd6')
      break;
    case 'd8':
      rollThisDiceNow('1d8', 'd8')
      break;
    case 'd10':
      rollThisDiceNow('1d10', 'd10')
      break;
    case 'd12':
      rollThisDiceNow('1d12', 'd12')
      break;
    case 'd20':
      rollThisDiceNow('1d20', 'd20')
      break;
    case 'd100':
      rollThisDiceNow('1d100', 'd100')
      break;
  }
}

document.addEventListener('click', listenToMyDice);
