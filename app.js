let nota = 20;
if (nota >=60) {
    console.log('El alumno aprobo');
} else if (nota < 50) {
        console.log('El alumno reprobo. Por favor estudie más');
} else { 
    console.log('El alumno reprobo');
}

//////////////////////////////////////// IF

let nota1 = 500;

if (nota1 >= 90 && nota1 <=100) {
    console.log('La nota es A');

} else if (nota1 >= 80 && nota1 < 90) {
    console.log('La nota es B');

} else if(nota1 >= 70 && nota1 < 80) {
    console.log('La nota es C');

}else if (nota1 >= 60 && nota1 < 70) {
    console.log('La nota es D');

} else if (nota1 >= 0 && nota1 <60) { 
    console.log('La nota es F');    
} else {
    console.log('Ingrese un valor de 0 a 100');
}

///////////////////////////////// IF ELSE

let nota2 = 70; 
let notaletra = '';

if (nota2 >= 90) {
    notaletra = 'A';
} else if (nota2 >=80) {
    notalet = 'B';
} else if (nota2 >=70) {
    notalet = 'C';
} else if (nota2 >=60) {
    notalet = 'D';
} else if (nota2 >=0 && nota2 < 60 ) {
    notalet = 'F';
}

////////////////////////////////////////// SWITCH

let dia = 9

switch (dia) {

    case 0:
        console.log('Es domingo');
        break;

    case 1:
        console.log('Es lunes');
        break;

    case 2: 
        console.log('Es martes');
        break;

    case 3:
        console.log('Es miercoles');
        break;

    case 4:
        console.log('Es jueves');
        break;

    case 5:
        console.log('Es viernes');
        break;

    case 6:
        console.log('Es sabado')
        break;

    case 7:
        console.log('Es domingo')
        break;
    
    default: 
        console.log('El día ingresado no es permitido');
}


////////////////////////////////////// CLICLOS O LOOPS - while y for

let gasolina = 100; 

while (gasolina > 0) {
    console.log('Gasolina restante' + gasolina);
    gasolina--;
}

console.log('Ya no tiene gasolia');

for(let i= 1; i<=10; i++) {
    let result = 2*i;
    console.log('2*' + i + '= '+ result)
}


let base = 10; limite = 20;

for (let j= 1; j<= limite; j++) {
    let resul= base*j;
    console.log(base + 'x' + j + '= ' + resul);
}


//////////////////////////////////////  FUNCTION

function suma(a, b) {
    return a + b;
}

let total = suma(10, 20);
console.log('El total es: ' + total);


function tablaMultiplicar(base, limit) {

    for (let n= 1; n<=limit; n++) {
        let total1= base*n;
        console.log(base+'x' + n + '= ' + total1)
    }
}

tablaMultiplicar(3,7);
tablaMultiplicar(7,9);


function sunotaes(nota3) {

    if (nota3 >= 90) {
        console.log('Su nota es A');

    } else if (nota3 >=80) {
        console.log('Su nota es B');

    } else if (nota3 >=70) {
        console.log('Su nota es C');

    } else if (nota3 >=60) {
        console.log('Su nota es D');
        
    } else if (nota3 >=0 && nota3 < 60 ) {
        console.log('Su nota es F');
    }
}

sunotaes(100);
sunotaes(80);
sunotaes(40);


//////////////////////////////////////  ARRAY

let flores = ['rosa', 'girasol', 'lirio'];
console.log(flores[1]);



let person = ['jose', 'vane', 'lili'];
let salarios = [5000, 6000, 7000];

    

    for (let i = 0; i< person.length; i++) {
        console.log(person[i] + ' tiene un salario de ' + salarios[i]);
    }


////////////////////////////////////////////  OBJETOS


function describirPersona (p) {
    console.log(`Su nombre es ${p.nombre}, tiene ${p.edad} años y mide ${p.estatura}m.`);
}

let persona = {
    nombre: 'Juanito',
    edad: 100,
    estatura: 1.75,

}

describirPersona(persona);


let persona1 = {
    nombre: 'Melissa',
    edad: 27,
};

let persona2 = {
    nombre: 'Ana',
    edad: 20,
};

let persona3 = {
    nombre: 'Ciro',
    edad: 35,
};

let personas = [persona1, persona2, persona3];
console.log(personas);

for (let i= 0; i< personas.length; i++) {
    console.log(`${personas[i].nombre} -- ${personas[i].edad}`);
}


////////////////////////////////////////////  CLASES

class Carro {
    constructor (marca, tipo, puertas) {

                this.marca= marca;
                this.tipo= tipo;
                this.puertas= puertas;

                this.creado= 'hoy';
                this.encendido= false;        
                this.gasolina= 100; 
            }

            encenderCarro(){

                if (this.encendido) {
                    console.error('El carro ya esta encendido');
                 } else {
                    this.encendido = true;
                    console.log('El carro esta encendido');
                 }
                 return this;         
            }

            realizarViaje(consumo) {

                if (!this.encendido) 
                    return console.error('Encienda el carro para poder viajar');


                if (this.gasolina < consumo) 
                    return console.error('Consumo superior. Gasolina restante: ' + this.gasolina);
                
            
                this.gasolina= this.gasolina - consumo;
                    return 'Queda ' + this.gasolina + ' de gasolina.'; 
            

            
            }
}

let carro1 = new Carro('Mazda', 'Sedan', 2);



const lib = 2.205 // 1 libra son 2.205 kg

function converL_K (libras) {
    return libras/lib;
}

let resulk = converL_K();
console.log(resulk);

