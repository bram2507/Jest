const suma = require("./Suma/suma");
const resta = require("./Resta/resta");
const product = require("./Product/product");

//Bloque de pruebas para funcion suma
describe("Pruebas para la suma", () => {
  test("recive grather than zero values", () => {
    expect(suma(5, 5)).toBe(10);
  });

  test("recive lower than zero values", () => {
    expect(suma(-5, -5)).toBe(-10);
  });

  test("recive empty parameters", () => {
    expect(suma()).toBe(NaN);
  });

  test("recibe not numbers parameters", () => {
    const a = NaN;
    const b = NaN;
    expect(suma(a, b)).toBe(NaN);
  });
});
