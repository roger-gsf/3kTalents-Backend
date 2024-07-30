import { Father } from "./Father";
import { Child } from "./Child";
import { Grandchild } from "./Grandchild";

const father: Father = new Father('Joseph', 'white');
const child: Child = new Child('Robert', 'brown', 1.62);
const grandChild: Grandchild = new Grandchild('Junior', 'brown', 1.59, 60);

father.walk();
grandChild.walk();
console.log(`Father's name: ${father._name}.`);
console.log(`Child's name: ${child._name}.`);
console.log(`Grandchild's name: ${grandChild._name}.`);
console.log(`Grandchild's height: ${grandChild.height}.`);
grandChild.study();
grandChild.walk();
