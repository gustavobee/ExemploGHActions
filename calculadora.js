class Calculadora {
    #resultado;
    constructor(){
        this.#resultado = 0;
    }

    get resultado() {
        return this.#resultado;
    }

    soma(numero) {
        this.#resultado += numero;
    }

    sub(numero) {
        this.#resultado -= numero;
    }

    div(numero) {
        if (numero == 0) throw new Error("Divisão ilegal por 0");
        this.#resultado /= numero;
    }

    mult(numero) {
        this.#resultado *= numero;
    }

}
module.exports = Calculadora;