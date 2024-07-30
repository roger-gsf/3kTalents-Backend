import * as readlineSync from 'readline-sync';

function messageDay(day: WeekDay) {
    switch (day) {
        case WeekDay.Monday:
            return `Week beggining!`;
        case WeekDay.Friday:
            return `It's finally friday!`;
        case WeekDay.Saturday:
            return `it's rest day!`;
        default:
            return `One day more!`
    }
}

const dayInput: string = readlineSync.question(`Type a number 1 to 7 for day per week: `);
const dayNumber = Number(dayInput);

console.log(messageDay(dayNumber));
