// import './style.css'


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
const ejercicioIntro2 = () => {
    let input = prompt('¿Cuál es tu nombre?');
    console.log('Buen día ' + input + '.');
};

let buttonIntro2 = document.getElementById('button-intro-2');

buttonIntro2.addEventListener('click', () => {
    ejercicioIntro2();
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
    } while (a <= 100);
    console.log('El número ' + a + ' es mayor a 100. ');
};

let buttonBucles2 = document.getElementById('button-bucles-2');

buttonBucles2.addEventListener('click', () => {
    ejercicioBucles2();
});

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
    console.log(esPar(40), esPar(21), esPar(4));
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

// 7.Introducción al DOM
// ejercicio 7.1

let buttonDomCambiarColor = document.querySelector('#button-dom-cambiar-color');
buttonDomCambiarColor.addEventListener('click', () => {
    const parrafos = document.querySelectorAll('#parrafos-dom p');
    parrafos.forEach(p => {
        p.style.color = 'blue';
    })
});

// ejercicio 7.2

let buttonDomMostrarAlerta = document.querySelector('#button-dom-mostrar-alerta');
buttonDomMostrarAlerta.addEventListener('click', () => {
    event.preventDefault();
    const texto = document.querySelector('#formulario-dom #input-texto').value;
    alert("Has ingresado: " + texto);
    document.querySelector('#formulario-dom #texto').value = "";
});


// 8.Eventos en DOM
// ejercicio 8.1

let listItemDom1 = document.querySelector('#list-item-dom-1');
listItemDom1.addEventListener('click', () => {
    console.log(listItemDom1.textContent);
});
let listItemDom2 = document.querySelector('#list-item-dom-2');
listItemDom2.addEventListener('click', () => {
    console.log(listItemDom2.textContent);
});
let listItemDom3 = document.querySelector('#list-item-dom-3');
listItemDom3.addEventListener('click', () => {
    console.log(listItemDom3.textContent);
});
let listItemDom4 = document.querySelector('#list-item-dom-4');
listItemDom4.addEventListener('click', () => {
    console.log(listItemDom4.textContent);
});

// ejercicio 8.2
let buttonDeshabilitarInput = document.querySelector('#button-deshabilitar-input');
buttonDeshabilitarInput.addEventListener('click', () => {
    document.querySelector('#input-eventos-dom').disabled = true;
});
let buttonHabilitarInput = document.querySelector('#button-habilitar-input');
buttonHabilitarInput.addEventListener('click', () => {
    document.querySelector('#input-eventos-dom').disabled = false;
});


// 9.LocalStorage
// ejercicio 9.1


const actualizarLabelCorreo = () => {
    document.querySelector("#label-correo-localstorage").textContent = JSON.parse(localStorage.getItem("correo"));
};

actualizarLabelCorreo();

let buttonGuardarCorreo = document.querySelector('#button-guardar-correo');
buttonGuardarCorreo.addEventListener('click', () => {
    const correo = document.querySelector('#input-email-localstorage');
    localStorage.setItem("correo", JSON.stringify(correo.value));
    actualizarLabelCorreo();
});

let buttonEliminarCorreo = document.querySelector('#button-eliminar-correo');
buttonEliminarCorreo.addEventListener('click', () => {
    localStorage.clear();
    actualizarLabelCorreo();
});



