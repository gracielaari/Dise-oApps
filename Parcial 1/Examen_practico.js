//opcines para el usuario
console.log("1. Lista de todos los pendientes(solo IDs)");
console.log("2. Lista de toos los pendientes(IDs y Titles");
console.log("3. Lista de todos los pendientes sin resolver(ID y Title)");
console.log("4. Lista de todos los pendientes resueltos(ID y Titles)");
console.log("5. Lista de todos los pendientes(IDs y UserID)");
console.log("6. Lista de todos los pendientes resueltos (ID y userId)");
console.log("7. Lista de todos los pendientes sin resolver(ID y userId)");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//pregunta al usuario
rl.question('Seleccione una opción del menú (1-7): ', (option) => {
  option = parseInt(option);
  //If para validar que la opcion ese en el rango
  if (option >= 1 && option <= 7) {
    fetchMenu(option);
  } else {
    console.log("Opción no válida. Debe ser un número del 1 al 7.");
  }

  // Cerrar la interfaz de lectura
  rl.close();
});

var url = "http://jsonplaceholder.typicode.com/todos";

function fetchMenu(option) {
  fetch(url)
    .then(response => response.json())
    .then(response => {
      switch (option) {
        case 1:
          // Pendientes ids
          response.forEach(element => {
            console.log(" - ID: " + element.id);
          });
          break;
        case 2:
          // Pendientes con ids y title
          response.forEach(element => {
            console.log(" - ID: " + element.id + " - Title: " + element.title);
          });
          break;
        case 3:
          // Pendientes sin resolver
          response
            .filter(element => element.completed === false)
            .forEach(element => {
              console.log(" - ID: " + element.id + " - Title: " + element.title);
            });
          break;
        case 4:
          // Pendientes resueltos
          response
            .filter(element => element.completed === true)
            .forEach(element => {
              console.log(" - ID: " + element.id + " - Title: " + element.title);
            });
          break;
        case 5:
          // Pendientes Id y Userid
          response.forEach(element => {
            console.log(" - ID: " + element.id + " - UserId: " + element.userId);
          });
          break;
        case 6:
          // Pendientes resueltos  id y userid
          response
            .filter(element => element.completed === true)
            .forEach(element => {
              console.log(" - ID: " + element.id + " - User Id: " + element.userId);
            });
          break;
        case 7:
          // Pendientes sin resolver id y userid
          response
            .filter(element => element.completed === false)
            .forEach(element => {
              console.log(" - ID: " + element.id + " - User Id: " + element.userId);
            });
          break;
        default:
          console.log("Opción no válida");
      }
    });
}