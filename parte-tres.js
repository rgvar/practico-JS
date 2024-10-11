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
    const texto = document.querySelector('#formulario-dom #input-texto').value;
    alert("Has ingresado: " + texto);
    document.querySelector('#formulario-dom #input-texto').value = "";
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