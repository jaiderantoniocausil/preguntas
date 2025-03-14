let preguntas = [
    {
        "pregunta": "¿Qué es la fotosíntesis?",
        "opciones": [
            "1. Un proceso de respiración celular",
            "2. Un proceso de conversión de luz en energía",
            "3. Un tipo de digestión en las plantas",
            "4. Un proceso de descomposición de materia orgánica"
        ],
        "respuesta_correcta": 1
    },
    {
        "pregunta": "¿Cuál es la fórmula química de la fotosíntesis?",
        "opciones": [
            "1. CO2 + H2O + luz → C6H12O6 + O2",
            "2. C6H12O6 + O2 → CO2 + H2O",
            "3. CO2 + H2O → C6H12O6 + O2",
            "4. C6H12O6 + O2 → CO2 + H2O + luz"
        ],
        "respuesta_correcta": 0
    },
    {
        "pregunta": "¿Qué organismos realizan la fotosíntesis?",
        "opciones": [
            "1. Solo las plantas",
            "2. Solo las bacterias",
            "3. Las plantas, algas y algunas bacterias",
            "4. Solo los animales"
        ],
        "respuesta_correcta": 2
    },
    {
        "pregunta": "¿Dónde ocurre la fotosíntesis dentro de la célula vegetal?",
        "opciones": [
            "1. En el núcleo",
            "2. En el citoplasma",
            "3. En las mitocondrias",
            "4. En los cloroplastos"
        ],
        "respuesta_correcta": 3
    },
    {
        "pregunta": "¿Qué sustancias son necesarias para la fotosíntesis?",
        "opciones": [
            "1. Oxígeno, clorofila, agua",
            "2. Agua, dióxido de carbono y luz",
            "3. Glucosa, oxígeno, nitrógeno",
            "4. Clorofila, nitrógeno, luz"
        ],
        "respuesta_correcta": 1
    },
    {
        "pregunta": "¿Qué productos genera la fotosíntesis?",
        "opciones": [
            "1. Dióxido de carbono y agua",
            "2. Glucosa y oxígeno",
            "3. Oxígeno y nitrógeno",
            "4. Glucosa y dióxido de carbono"
        ],
        "respuesta_correcta": 1
    },
    {
        "pregunta": "¿Cuál es el rol de la clorofila en la fotosíntesis?",
        "opciones": [
            "1. Absorber luz solar",
            "2. Realizar la descomposición de agua",
            "3. Producir glucosa",
            "4. Liberar oxígeno"
        ],
        "respuesta_correcta": 0
    },
    {
        "pregunta": "¿Cómo se llama el proceso en el que las plantas convierten la luz solar en energía?",
        "opciones": [
            "1. Quimiosíntesis",
            "2. Fotosíntesis",
            "3. Respiración celular",
            "4. Transpiración"
        ],
        "respuesta_correcta": 1
    },
    {
        "pregunta": "¿Qué es el ciclo de Calvin en la fotosíntesis?",
        "opciones": [
            "1. El proceso de captación de luz solar",
            "2. La fase de producción de glucosa",
            "3. La fase en la que se produce oxígeno",
            "4. La conversión de energía en ATP"
        ],
        "respuesta_correcta": 1
    },
    {
        "pregunta": "¿Por qué la fotosíntesis es importante para los seres vivos?",
        "opciones": [
            "1. Porque produce la energía que consumen los animales",
            "2. Porque genera dióxido de carbono",
            "3. Porque transforma el oxígeno en glucosa",
            "4. Porque produce alimentos para los seres vivos"
        ],
        "respuesta_correcta": 3
    }
];

let posicion = 0;
let respuestas = [];

function cargarpregunta(pos) {
    document.getElementById("titulo").innerText = `${pos + 1}/${preguntas.length} - ${preguntas[pos].pregunta}`;
    document.getElementById("opc1").innerText = preguntas[pos].opciones[0];
    document.getElementById("opc2").innerText = preguntas[pos].opciones[1];
    document.getElementById("opc3").innerText = preguntas[pos].opciones[2];
    document.getElementById("opc4").innerText = preguntas[pos].opciones[3];
    actualizarOpcionesMarcadas();
}

function avanzar() {
    guardarRespuesta();

    if (respuestas[posicion] === undefined) {
        alert("Por favor, responde la anterior antes de avanzar.");
        return;
    }
    if (posicion < preguntas.length - 1) {
        posicion += 1;
        cargarpregunta(posicion);
        document.getElementById('batras').style.display = 'block';
    }
    if (posicion === preguntas.length - 1) {
        document.getElementById('bavanzar').style.display = 'none';
        document.getElementById('bterminar').style.display = 'block';
    }
}

function atras() {
    guardarRespuesta();
    if (posicion > 0) {
        posicion -= 1;
        cargarpregunta(posicion);
        document.getElementById('bavanzar').style.display = 'block';
    }
    if (posicion === 0) {
        document.getElementById('batras').style.display = 'none';
    }
}

function guardarRespuesta() {
    const opciones = document.getElementsByName('opciones');
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            respuestas[posicion] = i;
            break;
        }
    }
}

function actualizarOpcionesMarcadas() {
    const opciones = document.getElementsByName('opciones');
    for (let i = 0; i < opciones.length; i++) {
        opciones[i].checked = (respuestas[posicion] === i);
    }
}

function terminar() {
    guardarRespuesta();
    mostrarResultados();
    document.querySelector('.card').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
}

function mostrarResultados() {
    const listaResultados = document.getElementById('lista-resultados');
    listaResultados.innerHTML = '';
    let correctas = 0;

    for (let i = 0; i < preguntas.length; i++) {
        const respuestaUsuario = respuestas[i];
        const respuestaCorrecta = preguntas[i].respuesta_correcta;
        const preguntaTexto = preguntas[i].pregunta;
        const esCorrecta = respuestaUsuario === respuestaCorrecta;

        const resultadoItem = document.createElement('li');
        resultadoItem.classList.add('list-group-item', esCorrecta ? 'list-group-item-success' : 'list-group-item-danger');
        resultadoItem.textContent = `Pregunta ${i + 1}: Tu respuesta: ${preguntas[i].opciones[respuestaUsuario]}`;
        listaResultados.appendChild(resultadoItem);

        if (esCorrecta) {
            correctas++;
        }
    }

    const mensajeFinal = document.createElement('li');
    mensajeFinal.classList.add('list-group-item', 'list-group-item-info');
    mensajeFinal.textContent = `Obtuviste ${correctas} de ${preguntas.length} respuestas correctas.`;
    listaResultados.appendChild(mensajeFinal);
}

document.getElementById('batras').style.display = 'none';
cargarpregunta(posicion);