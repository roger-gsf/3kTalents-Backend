import { Person } from "./Person";

class Father extends Person {
    public speak(): void {
        this.howManyChildren;
    }
}

const father: Father = new Father(4);
// father.howManyChildren(); error, because it's protected
