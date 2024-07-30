// the interface creates a contract that defines the rules for any class that implements it.
export interface Car {
    model: string;
    year: number;

    startEngine(): void; // You DON'T put any logic in a method within a interface!!
}