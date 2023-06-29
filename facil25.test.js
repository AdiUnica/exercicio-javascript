const idade = require("./facil25");

test("Teste verifica se uma pessoa pode doar sangue", () => {
  expect(idade.verificarIdadeParaDoarSangue(18)).toBe("Pode doar");
});

test("Teste verifica se uma pessoa pode doar sangue", () => {
    expect(idade.verificarIdadeParaDoarSangue(68)).toBe("Não pode doar");
 });
  