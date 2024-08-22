import generarFizzBuzz from "./fizzBuzz";

describe("FizzBuzz", () => {
  it("debería devolver el mismo número si no sigue ninguna regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });

  it("debería devolver el mismo número si no sigue ninguna regla", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });

  it("debería devolver 'fizz' para múltiplos de 3", () => {
    expect(generarFizzBuzz(3)).toEqual("fizz");
  });

  it("debería devolver 'buzz' para múltiplos de 5", () => {
    expect(generarFizzBuzz(5)).toEqual("buzz");
  });

  it("debería devolver 'fizzbuzz' para múltiplos de 3 y 5", () => {
    expect(generarFizzBuzz(15)).toEqual("fizzbuzz");
  });
});

