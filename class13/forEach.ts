// Example 1:
let tolkienBooks = ['Senhor dos Aneis', 'O Hobbit', 'Contos Inacabados'];

tolkienBooks.forEach(book => {
    console.log(`I've already read ${book}`);
});

// Example 2:
let booksTolkien = ['Senhor dos Aneis', 'O Hobbit', 'Contos Inacabados'];

booksTolkien.forEach(function (book) {
    console.log(`I've already read ${book}`);
});

// Example 3:
const arr = ['Car', 'Motorcycle', 'Bicycle'];

arr.forEach((element, index, array) => {
    console.log(`Element ${element} in the index ${index}`);
    console.log(`Original(full) array: ${array}`);
});