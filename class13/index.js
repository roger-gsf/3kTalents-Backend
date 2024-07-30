var fiction = {
    'Fundacao': 'Isaa Asimov',
    'Duna': 'Frank Herbert'
};
for (var book in fiction) {
    console.log("Autor of the book ".concat(book, ": ").concat(fiction[book]));
}
