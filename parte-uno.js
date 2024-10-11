// 1.INTRODUCCIÓN
// ejercicio 1.1
const ejercicioIntro1 = () => {
    let a = 5;
    let b = 8;
    let c = a + b;
    console.log('La suma de a y b es: ', c);
};

let buttonIntro1 = document.getElementById('button-intro-1');

buttonIntro1.addEventListener('click', () => {
    ejercicioIntro1();
});

// ejercicio 1.2

let buttonIntro2 = document.getElementById('button-intro-2');

buttonIntro2.addEventListener('click', () => {
    let nombre = prompt('¿Cuál es tu nombre?');
    console.log('Buen día ' + nombre + '.');
});

// 2.OPERADORES LÓGICOS Y CONDICIONALES
// ejercicio 2.1
const ejercicioOperadores1 = () => {
    let a = 10;
    let b = 43;
    if (a == b) {
        console.log('a y b son iguales. ');
    } else if (a > b) {
        console.log('a es mayor que b. ')
    } else {
        console.log('a es menor que b')
    }
};

let buttonOperadores1 = document.getElementById('button-operadores-1');

buttonOperadores1.addEventListener('click', () => {
    ejercicioOperadores1();
});

//ejercicio 2.2
const ejercicioOperadores2 = () => {
    let a = prompt('Ingrese un número: ');
    if (isNaN(a))
        console.log('No se ha ingresado un número. ')
    else if (a % 2 == 0) {
        console.log('El número ' + a + ' es par. ');
    } else {
        console.log('El número ' + a + ' es impar. ');
    }
};

let buttonOperadores2 = document.getElementById('button-operadores-2');

buttonOperadores2.addEventListener('click', () => {
    ejercicioOperadores2();
});

// 3.OPERADORES DE ASIGNACIÓN Y BUCLES
// ejercicio 3.1
const ejercicioBucles1 = () => {
    let a = 10;
    while (a > 0) {
        console.log(a);
        a--;
    }
};

let buttonBucles1 = document.getElementById('button-bucles-1');

buttonBucles1.addEventListener('click', () => {
    ejercicioBucles1();
});

// ejercicio 3.2
const ejercicioBucles2 = () => {
    let a;
    do {
        a = prompt('Ingrese un número mayor a 100: ');
    } while (a <= 100 || isNaN(a));
    console.log('El número ' + a + ' es mayor a 100. ');
};

let buttonBucles2 = document.getElementById('button-bucles-2');

buttonBucles2.addEventListener('click', () => {
    ejercicioBucles2();
});
