function calculator(a, b, operator) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: input harus berupa angka";
  }
  let result;
  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      return "Error: pembagian dengan angka nol tidak valid";
    }
    result = a / b;
  } else {
    return "Error:  operator tidak valid";
  }
  return `hasil dari ${a} ${operator} ${b} adalah  ${result}`;
}
console.log(calculator(2, 3, "+"));
console.log(calculator("2", 3, "+"));
console.log(calculator(3, 7, "-"));
console.log(calculator(8, 7, "*"));
console.log(calculator(6, 7, "/"));
console.log(calculator(6, 0, "/"));
console.log(calculator(0, 1, "/"));
