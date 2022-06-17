import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango que tem D = 32cm e d = 18cm: ${Exercise.diamond(32, 18)}cm²`);
console.log(`Losango que tem D = 200cm e d = 50cm: ${Exercise.diamond(200, 50)}cm²`);
console.log(`Losango que tem D = 75cm e d = 25cm: ${Exercise.diamond(75, 25)}cm²`);

console.log(`Trapézio que tem B = 100cm, b = 70cm e altura = 50cm: ${Exercise.trapeze(50, 100, 70)}cm²`);
console.log(`Trapézio que tem B = 75cm, b = 50cm e altura = 35cm: ${Exercise.trapeze(35, 75, 50)}cm²`);
console.log(`Trapézio que tem B = 150cm, b = 120cm e altura = 80cm: ${Exercise.trapeze(80, 150, 120)}cm²`);