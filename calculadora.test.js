const Calculadora = require("./calculadora");

describe("Calculadora", () => {
    test('Nova calculadora não deve expor resultado para escrita', ()=> {
        let calc = new Calculadora();
        calc.resultado = 5;
        expect(calc.resultado).toEqual(0);
    });

    it("Nova calc deve ter resultado = 0", () => {
        let calc = new Calculadora();
        expect(calc.resultado).toEqual(0);
    })

    it("Soma de 5 + resultado = 5", () => {
        let calc = new Calculadora();
        calc.soma(5);
        expect(calc.resultado).toEqual(5);
    })

    it("Subtração de 5 - resultado = -5", () => {
        let calc = new Calculadora();
        calc.sub(5);
        expect(calc.resultado).toEqual(-5);
    })

    it("Divisão de 10 por 2", () => {
        let calc = new Calculadora();
        calc.soma(10);
        calc.div(0);
        expect(calc.resultado).toEqual(5);
    })

    it("Multiplicação de 5 por 2", () => {
        let calc = new Calculadora();
        calc.soma(5);
        calc.mult(2);
        expect(calc.resultado).toEqual(10);
    })
})