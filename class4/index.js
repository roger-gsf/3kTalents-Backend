<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var nome = leitor.question("Qual eh o seu nome? ");
var idade = leitor.questionInt("Quantos anos voce tem? ");
var respostaCNH = leitor.question("Voce tem CNH? ");
function podeDirigir(meuNome, minhaIdade, respostaCNH) {
    if (minhaIdade >= 18 && respostaCNH.toLowerCase() == "sim") {
        console.log("".concat(meuNome, ", voce pode dirigir"));
    }
    else {
        console.log("".concat(meuNome, ", voce nao pode dirigir"));
    }
}
console.log(0.1 + 0.2);
podeDirigir(nome, idade, respostaCNH);
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var nome = leitor.question("Qual eh o seu nome? ");
var idade = leitor.questionInt("Quantos anos voce tem? ");
var respostaCNH = leitor.question("Voce tem CNH? ");
function podeDirigir(meuNome, minhaIdade, respostaCNH) {
    if (minhaIdade >= 18 && respostaCNH.toLowerCase() == "sim") {
        console.log("".concat(meuNome, ", voce pode dirigir"));
    }
    else {
        console.log("".concat(meuNome, ", voce nao pode dirigir"));
    }
}
console.log(0.1 + 0.2);
podeDirigir(nome, idade, respostaCNH);
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
