const triangulo = require("./intermediario15");

test("Teste equilatero", () => {
  expect(triangulo.verificarTriangulo(1, 1, 1)).toBe("Equilátero");
});

test("Teste isósceles", () => {
  expect(triangulo.verificarTriangulo(1, 1, 2)).toBe("Isósceles");
});

test("Teste escaleno", () => {
  expect(triangulo.verificarTriangulo(1, 3, 2)).toBe("Escaleno");
});
