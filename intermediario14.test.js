const c = require("./intermediario14");

test("Teste media notas iguais", () => {
  expect(c.calcularMedia(1, 1)).toBe(1);
});

test("Teste media notas diferentes", () => {
  expect(c.calcularMedia(2, 4)).toBe(3);
});

test("Teste resultado conceito A", () => {
  expect(c.calcularResultado("A")).toBe("APROVADO");
});
test("Teste resultado conceito B", () => {
  expect(c.calcularResultado("B")).toBe("APROVADO");
});

test("Teste resultado conceito C", () => {
  expect(c.calcularResultado("C")).toBe("APROVADO");
});

test("Teste resultado conceito D", () => {
  expect(c.calcularResultado("D")).toBe("REPROVADO");
});

test("Teste resultado media >= 9.0 && media <= 10.0", () => {
  expect(c.calcularConceito("9.5")).toBe("A");
});

test("Teste resultado media >= 7.5 && media < 9.0", () => {
  expect(c.calcularConceito("8.0")).toBe("B");
});

test("Teste resultado media >= 6.0 && media < 7.5", () => {
  expect(c.calcularConceito("6.5")).toBe("C");
});

test("Teste resultado media >= 4.0 && media < 6.0", () => {
  expect(c.calcularConceito("4.5")).toBe("D");
});

test("Teste resultado média abaixo de 4.0", () => {
  expect(c.calcularConceito("2.5")).toBe("E");
});


