// En fizzBuzz.js
export default function generarFizzBuzz(n) {
    if (n % 15 === 0) return "fizzbuzz";  // Para múltiplos de 3 y 5
    if (n % 3 === 0) return "fizz";       // Para múltiplos de 3
    if (n % 5 === 0) return "buzz";       // Para múltiplos de 5
    return n.toString();                  // Para otros números
  }
  