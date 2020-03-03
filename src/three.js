import { function1 } from "./one";
import { function2 } from "./two";

let users = [
  {
    nombre: "Antonia",
    edad: 32,
    nacionalidad: "España",
    profesión: "Abogada"
  },

  {
    nombre: "Mario",
    edad: 27,
    nacionalidad: "México",
    profesión: "Médico"
  }
];

function2(users);
console.log("function2 desde three.js", function2(users));

let variable1 = [1, 4, 23, -4, "one", 6, 0, 1.1, 3.1415];

function1(variable1);
console.log("function1 desde three.js", function1(variable1));

export const saludo = () => {
  alert("hola");
};

// three.js Debe contener una función que invoque las funciones presentes en one y two.
// Debe retornar sus resultados en un objeto con la siguiente estructura:
// {
//     "status": "OK",
//     "one": resultOne,
//     "two": resultTwo
// }
// Donde resultOne y resultTwo son los resultados de ambas funciones


const function3 = (func1, func2) => {
  let resultOne = func1;
  let resultTwo = func2;
  
  let objectResults = {
    "status": "OK",
    "one": resultOne,
    "two": resultTwo
  };

  return objectResults; 
};

function3(function1(variable1), function2(users));
console.log('function 3 desde three.js', function3(function1(variable1), function2(users)));
