import './style.css'


// INTRODUCCIÓN
// ejercicio 2
const ejercicioIntro1 = () => {
    let a = 5;
    let b = 8;
    let c = a + b;
    console.log('La suma de a y b es: ', c);
};
// ejercicio 3
const ejercicioIntro2 = () => {
    let input = prompt('¿Cuál es tu nombre?');
    console.log('Buen día ' + input + '.');
};

// OPERADORES LÓGICOS Y CONDICIONALES
// ejercicio 1
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
const ejercicioOperadores2 = () => {
    let a = prompt('Ingrese un número: ');
    if (a % 2 == 0) {
        console.log('El número ' + a + ' es par. ');
    } else {
        console.log('El número ' + a + ' es impar. ');
    }
};

// OPERADORES DE ASIGNACIÓN Y BUCLES
// ejercicio 1
const ejercicioBucles1 = () => {
    let a = 10;
    while (a > 0) {
        console.log(a);
        a--;
    }
};
const ejercicioBucles2 = () => {
    let a;
    do {
        a = prompt('Ingrese un número mayor a 100: ');
    } while (a <= 100);
    console.log('El número ' + a + ' es mayor a 100. ');
}



// INTRODUCCIÓN
let buttonIntro1 = document.getElementById('button-intro-1');
let buttonIntro2 = document.getElementById('button-intro-2');

buttonIntro1.addEventListener('click', () => {
    ejercicioIntro1();
});

buttonIntro2.addEventListener('click', () => {
    ejercicioIntro2();
});

// OPERADORES
let buttonOperadores1 = document.getElementById('button-operadores-1');
let buttonOperadores2 = document.getElementById('button-operadores-2');

buttonOperadores1.addEventListener('click', () => {
    ejercicioOperadores1();
})

buttonOperadores2.addEventListener('click', () => {
    ejercicioOperadores2();
})

// BUCLES Y ASIGNACIONES
let buttonBucles1 = document.getElementById('button-bucles-1');
let buttonBucles2 = document.getElementById('button-bucles-2');

buttonBucles1.addEventListener('click', () => {
    ejercicioBucles1();
})

buttonBucles2.addEventListener('click', () => {
    ejercicioBucles2();
})
