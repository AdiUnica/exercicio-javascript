const tabuada = require("./dificil1");

test("Teste mostrar tabuada", () => {
  expect(tabuada.calcularTabuada(5)).toBe("5 X 1 = 5\n" +
    
   
  "5 X 2 = 10\n" +
      
     
  "5 X 3 = 15\n" +
      
     
  "5 X 4 = 20\n" +
      
     
  "5 X 5 = 25\n" +
      
     
  "5 X 6 = 30\n" +
      
     
  "5 X 7 = 35\n" +
      
     
  "5 X 8 = 40\n" +
      
     
  "5 X 9 = 45\n" +
      
     
  "5 X 10 = 50\n");
});


