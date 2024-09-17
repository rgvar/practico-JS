import './style.css'


// 1.INTRODUCCIÓN
// ejercicio 1
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

// ejercicio 2
const ejercicioIntro2 = () => {
    let input = prompt('¿Cuál es tu nombre?');
    console.log('Buen día ' + input + '.');
};

let buttonIntro2 = document.getElementById('button-intro-2');

buttonIntro2.addEventListener('click', () => {
    ejercicioIntro2();
});

// 2.OPERADORES LÓGICOS Y CONDICIONALES
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

let buttonOperadores1 = document.getElementById('button-operadores-1');

buttonOperadores1.addEventListener('click', () => {
    ejercicioOperadores1();
});

//ejercicio 2
const ejercicioOperadores2 = () => {
    let a = prompt('Ingrese un número: ');
    if (a % 2 == 0) {
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
// ejercicio 1
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

const ejercicioBucles2 = () => {
    let a;
    do {
        a = prompt('Ingrese un número mayor a 100: ');
    } while (a <= 100);
    console.log('El número ' + a + ' es mayor a 100. ');
};

let buttonBucles2 = document.getElementById('button-bucles-2');

buttonBucles2.addEventListener('click', () => {
    ejercicioBucles2();
});

// 4.FUNCIONES
// ejercicio 1
const esPar = (a) => {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

let buttonFuncion1 = document.getElementById('button-funcion-1');

buttonFuncion1.addEventListener('click', () => {
    console.log(esPar(40), esPar(21), esPar(4));
});

// ejercicio 2
const convertirCelsiusAFahrenheit = (celcius) => {
    return celcius * 1.8 + 32;
};

let buttonFuncion2 = document.getElementById('button-funcion-2');

buttonFuncion2.addEventListener('click', () => {
    let grados = 30;
    console.log(grados + '°C es igual a ' + convertirCelsiusAFahrenheit(grados) + '°F');
});

// 5. OBJETOS
// ejercicio 1
const persona = {
    nombre: 'Rodrigo',
    edad: 25,
    ciudad: 'Mendoza',
    setCiudad: (nuevaCiudad) => {
        persona.ciudad = nuevaCiudad;
    }
};

let buttonObjeto1 = document.getElementById('button-objeto-1');

buttonObjeto1.addEventListener('click', () => {
    console.log(persona);
    persona.setCiudad('Tierra del Fuego');
    console.log(persona);
});

// ejercicio 2
const libro = {
    titulo: 'Código Limpio',
    autor: 'Robert C. Martin',
    año: 2012,
    esAntiguo: () => {
        if (año > 10) 
            return true;
        else return false;
    }
}

let buttonObjeto2 = document.getElementById('button-objeto-2');

buttonObjeto2.addEventListener('click', () => {
    console.log('El libro tiene más de 10 años? ', );
});