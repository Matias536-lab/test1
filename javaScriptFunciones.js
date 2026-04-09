// Ejercitación
// Todas las actividades deben realizarse con funciones, sin excepcion
// 1) Que se muestre por pantalla “Hola mundo” mediante el archivo JS.
// 2) Recibir a y b, inicializar ambos valores y mostrar por medio de la variable resultado la suma de a y b en pantalla.
// 3) Recibir num1 y num2, sumarle +1 y +5 respectivamente y mostrar por pantalla los resultados
// 4) Recibir  dos números, mostrar por pantalla el contenido de ambas variables y el resultado de la multiplicación
// 6) Con la variable ingresada por teclado del ejercicio anterior mostrar por pantalla el valor multiplicado *10, en una variable aparte
// 7) Escribir por consola el resultado de sumar a  y b
// 8) Solicitar un numero y si es mayor a 10 imprimir el numero es mayor.
// 9) Solicitar una edad y mostrar por pantalla si es mayor o menor legalmente.
// 10) dos numeros, mostrar el mayor y el menor
// 11) ordernar 3 numeros de mayor a menor 
// 12) Ingresar un numero y definir si es positivo o negativo
// 13) Ingresar un numero y mostrar si es par o impar

/*1_ function primerSaludo (){
    document.write('Hola Mundo');    
}

primerSaludo();*/

/*2_ function realizarSuma(a, b){
let resultado = a + b;
document.write(resultado);
}

realizarSuma(6,7);*/

/*3_ function realizarSumaRespectiva(num1, num2){
num1 = num1 + 1;
num2 = num2 + 5;
let resultado = num1 + num2;
document.write(resultado);
}

realizarSumaRespectiva(9,5);*/

/*4_ function realizarMultiplicacion(num1, num2){
    document.write(`num1 = ${num1} * num2 = ${num2} = `)
    let resultado = num1 * num2;
document.write(resultado);
}
realizarMultiplicacion(2,2);*/

/*6_ function realizarMultiDiez(num1){
num1=parseInt(prompt('Ingrese un numero: '))
num1=num1*10;
document.write(num1);
}

realizarMultiDiez();*/

/*7_ function realizarSumaConsola(a, b){
let resultado = a + b;
console.log(resultado);
}
realizarSumaConsola(3,13);*/

/*8_ function mayorMenor(){
num1=parseInt(prompt('Ingrese un numero: '))
if(num1>=10){
    document.write('El numero es mayor')
}
else{
    document.write('El numero es menor')
}
}
mayorMenor();*/

/*9_ function edadMayorMenor(){
edad=parseInt(prompt('Ingrese su edad: '))
if(edad>=18){
    document.write('Usted es mayor')
}
else{
    document.write('Usted es menor')
}
}
edadMayorMenor();*/

/*10_ function dosNumerosMayorMenor(num1, num2){
if(num1>num2){
    document.write('El primer numero es mayor, el segundo es menor')
}
else if(num1<num2){
    document.write('El primer numero es menor, el segundo es mayor')
}
else if(num1==num2){
    document.write('Los dos numeros tienen el mismo valor')
}
}
dosNumerosMayorMenor(10, 1);*/


/*11_ function ordenarTres(n1, n2, n3) {

if (n1 >= n2 && n1 >= n3) {
    if (n2 >= n3) {
        document.write(n1 + ", " + n2 + ", " + n3);
    } else {
        document.write(n1 + ", " + n3 + ", " + n2);
    }
} else if (n2 >= n1 && n2 >= n3) {
    if (n1 >= n3) {
        document.write(n2 + ", " + n1 + ", " + n3);
    } else {
        document.write(n2 + ", " + n3 + ", " + n1);
    }
} else {
    if (n1 >= n2) {
        document.write(n3 + ", " + n1 + ", " + n2);
    } else {
        document.write(n3 + ", " + n2 + ", " + n1);
    }
}
}
ordenarTres(10, 40, 50);*/


/*12_ function positivoONegativo(num) {
  if (num > 0) {
    document.write("El número es positivo");
  } else if (num < 0) {
    document.write("El número es negativo");
  } else {
    document.write("El número es cero");
  }
}
positivoONegativo(-4);*/


/*13_ function parOImpar(num) {
  if (num % 2 === 0) {
    document.write("El número es par");
  } else {
    document.write("El número es impar");
  }
}
parOImpar(7);*/