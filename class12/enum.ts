enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(WeekDay.Monday);

enum Directions {
    North,
    South,
    East,
    West
}

for (let direction in Directions) {
    console.log(direction);
}
