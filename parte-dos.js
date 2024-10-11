// 4.FUNCIONES
// ejercicio 4.1
const esPar = (a) => {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

let buttonFuncion1 = document.getElementById('button-funcion-1');

buttonFuncion1.addEventListener('click', () => {
    let a=40,b=23,c=523;
    console.log("El número " + a + " es par: "+ esPar(a));
    console.log("El número " + b + " es par: "+ esPar(b));
    console.log("El número " + c + " es par: "+ esPar(c));
});

// ejercicio 4.2
const convertirCelsiusAFahrenheit = (celcius) => {
    return celcius * 1.8 + 32;
};

let buttonFuncion2 = document.getElementById('button-funcion-2');

buttonFuncion2.addEventListener('click', () => {
    let grados = 30;
    console.log(grados + '°C es igual a ' + convertirCelsiusAFahrenheit(grados) + '°F');
});

// 5. OBJETOS
// ejercicio 5.1
const persona = {
    nombre: 'Rodrigo',
    edad: 25,
    ciudad: 'Mendoza',
    setCiudad: (nuevaCiudad) => {
        persona.ciudad = nuevaCiudad;
    }
};

let buttonObjeto1 = document.querySelector('#button-objeto-1');

buttonObjeto1.addEventListener('click', () => {
    console.log(persona);
    persona.setCiudad('Tierra del Fuego');
    console.log(persona);
});

// ejercicio 5.2
const libro = {
    titulo: 'Código Limpio',
    autor: 'Robert C. Martin',
    año: 2012,
    esAntiguo: function() {
        if (new Date().getFullYear() - this.año > 10) 
            return true;
        else return false;
    }
}

let buttonObjeto2 = document.getElementById('button-objeto-2');

buttonObjeto2.addEventListener('click', () => {
    console.log('El libro "' + libro.titulo + '" tiene más de 10 años: ' + libro.esAntiguo());
});

// 6. ARRAYS
// ejercicio 6.1
let numeros = [1,2,3,4,5,6,7,8,9,10];
let nuevosNumeros = [];
let buttonArray1 = document.querySelector('#button-array-1');

buttonArray1.addEventListener('click', () => {
    console.log("Números originales: " + numeros);
    numeros.forEach( (n) => nuevosNumeros.push(n*2));
    console.log("Números multiplicados por 2: " + nuevosNumeros);

});

// ejercicio 6.2
let pares = [];

let buttonArray2 = document.querySelector('#button-array-2');

buttonArray2.addEventListener('click', () => {
    let counter = 0;
    for (let n=1; n<=20; n++) {
        if (n % 2 == 0 && counter < 10) {
            pares.push(n);
            counter++;
        }
    }
    console.log("Primeros 10 números pares: " + pares);
});