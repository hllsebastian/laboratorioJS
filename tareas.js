///////////////////////1- Convertir de Libras a Kilogramos

const lib_kil = 2.205; // 1 libra son 2.205 kg

function converlib_Kl(libras) {
    totalk= libras/lib_kil;
    console.log(libras + ' libras son ' + Math.round(totalk) + ' kilos');
}   


////////////////////////2- Convertir de kilómetros a millas, sabiendo que:

const km_mil = 0.62; //un km es igual 0.62millas

function converkm_mil (km) {
    totalmil= km*km_mil;
    console.log(km + ' km son ' + totalmil + ' millas');
}   


////////////////////////3-Calcule el área de un triangulo rectángulo que: Base 10 y altura 5

function areaTriangulo(base, altura) {
    area= (base*altura)/2;
    return 'El area del triangulo rectangulo es ' + area + ' centimetros';
}


/*/////////////////////////4- Dado el siguiente arreglo:
                    let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
                    Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?*/

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let numMayor= 0;
    
for(let i= 0; i <= numeros.length; i++) {

    let a = numeros[i];
    if(a > numMayor) {
        numMayor = a;
        } 
    }
    console.log('El nummero mayor es ' + numMayor);


/*///////////////////////////////5- Dado el siguiente arreglo:
                                            let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
                                            Haga una impresión en consola así:
                                            1 es un número impar
                                            6 es un número par
                                            Debe de utilizar un ciclo FOR para generar dicha impresión*/


let numeros1 = [1, 6, 8, 4, 2, 7, 10, 3, 5];


for(let i= 0; i < numeros1.length; i++) {

    let a = numeros1[i];
     if (a%2 === 1) {
         console.log(a + ' es impar');
     } else {
        console.log(a+ ' es par');
     }
}


/*6- Realice un algoritmo, que permita la impresión en consola de la siguiente tabla:
                                                                        El resultado será esperado es algo así:
                                                                        1 2 3 4 5
                                                                        2 4 6 8 10
                                                                        3 6 9 12 15
                                                                        4 8 12 16 20
                                                                        5 10 15 20 25 */


for(let i= 1; i<= 5; i++) {

    let reglon= '';

    for (let j= 1; j<= 5; j++) {
        reglon += `${j * i}    `;
    }

console.log(reglon);
}


/*7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
trabajar así:
                            let mayor = max( 5, 2, 6);
                            console.log( mayor ); // 6  */

function max(a, b, c) {
    
    let mayor= 0;
    
    if (a>b & a>c) {
        mayor= a;
    } else {
        if (b>a && b>c) {
            mayor= b;
        }else{
            mayor= c;
        }
    }
    console.log('El mayor es '+ mayor);
}


/*8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
nombre que tenga más letras del arreglo, y debe de trabajar así:
let heroes = [‘Deadpool’, ‘Ciclope’, ‘Magneto’, ‘Profesor Charles Xavier’];
let heroeLargo = masLargo( heroes );
console.log( heroeLargo ); // Profesor Charles Xavier  */


let heroes = ['Deadpool', 'Ciclope', 'Profesor Charles Xavier', 'Magneto']

function masLargo(arr) {


    let heroeLargo= '';
    for(i=0; i<arr.length; i++) {

        if(arr[i].length> 0 && arr[i].length> heroeLargo.length) {
            heroeLargo= arr[i];
        }
    }
    return heroeLargo;
}

let nombreLargo = masLargo(heroes);
console.log(nombreLargo);



/* 9- Crear una función que reciba un arreglo como argumento, la función debe de retornar OTRO
arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
Ejemplo:
let heroes = [‘Doom’, ‘Dr. Strange’, ‘Hulk’, ‘She Hulk’, ‘Spiderman’, ‘Captain Marvel’];
let heroesCon = filtrarPorLetra( heroes, ‘S’);
console.log( heroesCon ); // She Hulk, Spiderma */


let heroes1 = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];


function filtrarPorLetra(arr1, letra) {
 
    let nombrescon= [];
    for (let i= 0; i<arr1.length; i++) {

        let nombre= arr1[i];
        if (nombre[0] === letra) {
            nombrescon.push(nombre);
            }
        }
    return nombrescon
}


let letraInicial = filtrarPorLetra(heroes1, 'D');
console.log (letraInicial); 

