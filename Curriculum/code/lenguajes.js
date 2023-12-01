var lenguajes = ['Python', 'java', 'c#', 'JavaScript']


function imprimirForbasico(_lenguajes){
    let salida= ''
    for(i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + '\n'
    }
    alert(salida)
}

function imprimeFor(_lenguajes){
    let salida=''
    for(var i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + ' se encuentra en el indice ' + i + '\n'
    }
    alert(salida)
}

function imprimirForechbasico(_lenguajes){
    salida=''
    _lenguajes.forEach(element =>
        salida += element + '\n'
        )
        alert(salida)
}

function imprimeForech(_lenguajes){
    salida=''
    _lenguajes.forEach(function (_valor, _indice){
        salida += _valor + ' se encuentra en el indice ' + _indice + '\n'
    })

    alert(salida)
}

function tamañoArreglo(_lenguajes){
    salida = 'El tamaño del arreglo es: ' + _lenguajes-length
    alert(salida)
}

function muestraElemento(){
    let salida = ''
    let elemento = prompt("Ingrese el indice del elemto a recuperar: ");
    if(elemento < lenguajes.length){
        salida = lenguajes(elemento)
    }else{
        salida = 'El arreglo solo tiene ' + lenguajes.length + ' elige un indice diferente a' + elemento
    }
    alert(salida)
}

function ingresaElemento(){
    let salida =''
    let elemento = prompt("Ingresa un nuevo lenguaje de programacion: ")
    lenguajes.push(elemento)
    salida = 'El lenguaje de programacion ' + elemento + ' a sido agregado al arreglo'

    alert(salida)
}

function eliminarElemento(){
    let salida =''
    let elemento = prompt("Cual es el lenguaje de programacion que deseas eliminar")
    var indice = lenguajes.indexOf(elemento)
    if(indice !== -1){
        lenguajes.splice(indice,1)
        salida = 'Lenguaje eliminado: ' + elemento
    }else salida = 'El lenguaje no se ha encontrado'
    alert(salida)
}

function mostrarMenu(){
    var opcion = prompt('Seleccione una opcion:' +
        '\n1. Imprimir lenguajes con "for" basico' +
        '\n2. Imprimir lenguajes con "for" y su indice.' +
        '\n3. Imprimir lenguajes con "forEach" basico.' +
        '\n4. Imprimir lenguajes con "forEach" y su indice.' +
        '\n5. Imprimir tamaño de arreglo.' +
        '\n6. Recuperar el elemnto del arreglo.' +
        '\n. Ingrese el numero de la opcion:');
    switch (opcion){
        case '1':
            imprimirForbasico(_lenguajes);
            break;
        case '2':
            imprimeFor(_lenguajes);
            break;
        case '3':
            imprimirForechbasico(_lenguajes);
            break;
        case '4':
            imprimeForech(_lenguajes);
            break;
        case '5':
            tamañoArreglo(_lenguajes);
            break;
        case '6':
            muestraElemento(_lenguajes);
        default:
            alert('Opcion invalida. Selecciona otra opcion.');
            break;
    }
}                                                   

mostrarMenu()