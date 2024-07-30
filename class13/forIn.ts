let fiction = {
    'Fundacao': 'Isaa Asimov',
    'Duna': 'Frank Herbert'
};

for (let book in fiction) {
    console.log(`Autor of the book ${book}: ${fiction[book]}`);
}

console.log(Object.keys(fiction)[0]);
