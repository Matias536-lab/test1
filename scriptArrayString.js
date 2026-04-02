//document.writeln("Hola")
// Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
// 1) Ana, Osvaldo, Raúl, Celia, María, Antonio
// (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
// 2)  Imprime la clasificación actual
// 3) Antes de comenzar la carrera se solicita que se ordenen alfabéticamente según su nombre
// El concurso continua, y se van modificando esas posiciones anteriores. Debemos cambiar en el array:
// 4) Raul es descalificado y se elimina del concurso
// 5) Delante de Ana y  Osvaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
// 6) Hay una nueva participante que se suma al final de la lista: Marta
// 7) Ocurre un imprevisto y se invierte el orden de los concursantes
// 8) Imprime la clasificación actualizada y menciona en un h1 a quien ganó

let Clasificaciones = ["Ana", "Osvaldo", "Raul", "Celia", "Maria", "Antonio"];
console.log(Clasificaciones);

Clasificaciones.sort();
console.log(Clasificaciones);

Clasificaciones.pop(5);
console.log(Clasificaciones);

Clasificaciones.unshift("Roberto", "Amaya");
console.log(Clasificaciones);

Clasificaciones.push("Marta");
console.log(Clasificaciones);

Clasificaciones.reverse();
console.log(Clasificaciones);

document.writeln(Clasificaciones);
document.writeln("<h1> Ganador/a: " + Clasificaciones[0]+ "</h1>");