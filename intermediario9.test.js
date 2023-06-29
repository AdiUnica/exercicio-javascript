const ordem = require("./intermediario9");

test("Teste números em ordem decrescente ", () => {
  expect(ordem.ordernarDecrescente(3, 1, 2)).toBe("3, 2, 1");
});

test("Teste números em ordem decrescente ", () => {
    expect(ordem.ordernarDecrescente(10, 5, 8)).toBe("10, 8, 5");
  });

  test("Teste números em ordem decrescente ", () => {
    expect(ordem.ordernarDecrescente(7, 7, 7)).toBe("7, 7, 7");
  });





