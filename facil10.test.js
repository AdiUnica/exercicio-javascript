const turno = require("./facil10");

test("Teste qual turno M", () => {     
  expect(turno.verificarTurno("M")).toBe("Bom dia!");
});

test("Teste qual turno V", () => {
    expect(turno.verificarTurno("V")).toBe("Boa tarde!");
  });

  test("Teste qual turno N", () => {
    expect(turno.verificarTurno("N")).toBe("Boa noite!");
  });

  test("Teste exibir para qualquer outro turno Valor inválido!", () => {
    expect(turno.verificarTurno("Valor inválido!")).toBe("Valor inválido!");
  });
  
  