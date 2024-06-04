console.group('Задача 3. Конструктор рядків');

class StringBuilder{
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value = this.#value.padEnd(3, str);
    }

    padStart(str) {
        this.#value= this.#value.padStart(2, str);
    }

    padBoth(str) {
        this.#value = this.#value.padEnd(4, str);
        this.#value = this.#value.padStart(5, str); 
    }

}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


console.groupEnd();