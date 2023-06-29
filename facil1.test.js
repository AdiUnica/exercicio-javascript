const resultado = require("./facil1");

test("Teste verificar se o número1 é maior que o número2", () => {
  expect(resultado.verificarMaiorNumero(5, 3)).toBe("5 é maior que 3");
});

test("Teste verificar se o número2 é maior que o número1", () => {
    expect(resultado.verificarMaiorNumero(2, 7)).toBe("7 é maior que 2");
  });
  