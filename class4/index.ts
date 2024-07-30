<<<<<<< HEAD
import * as leitor from 'readline-sync';

let nome: string = leitor.question(`Qual eh o seu nome? `);
let idade: number = leitor.questionInt(`Quantos anos voce tem? `);
let respostaCNH: string = leitor.question(`Voce tem CNH? `);

function podeDirigir(meuNome: string, minhaIdade: number, respostaCNH: string): void {
    if (minhaIdade >= 18 && respostaCNH.toLowerCase() == `sim`) {
        console.log(`${meuNome}, voce pode dirigir`);
    } else {
        console.log(`${meuNome}, voce nao pode dirigir`);
    }
}


=======
import * as leitor from 'readline-sync';

let nome: string = leitor.question(`Qual eh o seu nome? `);
let idade: number = leitor.questionInt(`Quantos anos voce tem? `);
let respostaCNH: string = leitor.question(`Voce tem CNH? `);

function podeDirigir(meuNome: string, minhaIdade: number, respostaCNH: string): void {
    if (minhaIdade >= 18 && respostaCNH.toLowerCase() == `sim`) {
        console.log(`${meuNome}, voce pode dirigir`);
    } else {
        console.log(`${meuNome}, voce nao pode dirigir`);
    }
}


>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
podeDirigir(nome, idade, respostaCNH);