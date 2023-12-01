function factorialFor(numero){
    let resultado = 1;
    if(numero == 1 || numero == 0){
        return resultado
    }else{
        for (i=2; i<=numero; i++){
            resultado = resultado * i
        }
    }
    return resultado
}

function factorialrecursion(numero){
    if (numero == 0 || numero == 1){
        return 1;
    }else{
        return numero * factorialrecursion(numero - 1);
    }
}


function mostrarMenu(){
    var opcion = prompt(
                        "Selecciona una opcion\n" +
                        "1. Calcular factorial con FOR\n" +
                        "2. Calcular factrial con recursion\n" +
                        "3. Salir"
    )

    switch (opcion){
        case 1:
            var numero = prompt("Introduce un numero: ")
            var res = factorialFor(numero)
            alert("El factorial es: " + res)
            mostrarMenu();
            break;
        case 2:
            var numero = prompt("Introduce un numero: ")
            var res = factorialrecursion(numero)
            alert("El factorial es: " + res)
            mostrarMenu();
            break;
        case 3:
            window.close();
            return
        default:
        alert("Opcion invalida")
        break;
    }
}
mostrarMenu()