const soma = require("./dificil4");

test("Teste calcular soma 1", () => {

    expect(soma.calcularSoma(1)).toBe("1.00"); 
  });

  test("Teste calcular soma 4", () => {
    expect(soma.calcularSoma(4)).toBe("2.08"); 
  });
 