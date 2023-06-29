const dia = require("./facil13");


test("Teste dia da semana 1 ", () => {
  expect(dia.mostrarDiaDaSemana(1)).toBe("Hoje é domingo!");
});

test("Teste dia da semana 2 ", () => {
  expect(dia.mostrarDiaDaSemana(2)).toBe("Hoje é segunda!");
});

test("Teste dia da semana 3 ", () => {
  expect(dia.mostrarDiaDaSemana(3)).toBe("Hoje é terça!");
});

test("Teste dia da semana 4 ", () => {
  expect(dia.mostrarDiaDaSemana(4)).toBe("Hoje é quarta!");
});

test("Teste dia da semana 5 ", () => {
  expect(dia.mostrarDiaDaSemana(5)).toBe("Hoje é quinta!");
});

test("Teste dia da semana 6 ", () => {
  expect(dia.mostrarDiaDaSemana(6)).toBe("Hoje é sexta!");
});

test("Teste dia da semana 7 ", () => {
  expect(dia.mostrarDiaDaSemana(7)).toBe("Hoje é sábado!");
});

test("Teste dia da semana 8 ", () => {
  expect(dia.mostrarDiaDaSemana(8)).toBe("Valor inválido!");
});
