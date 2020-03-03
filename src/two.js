export const function2 = object => {
  let objectToString = JSON.stringify(object);

  return objectToString;
};

let usersJson = [
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
  
function2(usersJson);
console.log("function2 desde two.js", function2(usersJson));
