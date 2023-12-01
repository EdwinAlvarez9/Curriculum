var value
var next
var head

/**Este metodo se encarga de iniciar la ejecucion del programa
 * Este es el metodo principal del proyecto
 * param args[] es un arreglo con los parametros qu el reciba
 * return void
 */

class Node{
    constructorK(_value, _next){
        value = _value;
        next = _next;
    }
}

//Metodo para crear una lista, es el metodo principal del programa
class LinkedList{
    constructor(){
        head = null;
    }
}

insertNode(_value);{
    const newNode = new Node(_value, null);
    if (head === null);{
        head = newNode;
        return
    }
}

let current = head;
while (current.next){
    current = current.next;
}
current.next = newNode;

finNode(_value);{
    let current = head;
    while (current){
        if (current.value === _value){
            return current;
        }
        current = current.next;
    }
    return null;
}

deleteNode(_value);{
    if (head.value === _value){
        head = head.next;
        return
    }
    let current = head;
    while (current.next){
        if (current.next.value === _value){
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
}

display();{
    let current = head;
    var salida = 'Los datos son: \n'
    while (current){
        saluda += (current.value)+'\n';
         current = current.next;
    }
    alert(salida)
}

//Define el menu
function menu(){
    const Lista = new LinkedList()


    while (true);{
        const opcion = prompt {
            "Seleciona una opcion:\n" +
            "1. Inserta elemento en la lista\n" +
            "2. Buscar elemento en la lista\n" +
            "3. Eliminar elemento de la lista\n" +
            "4. Buscar cabeza de la lista\n" +
            "5. Mostrar elementos de la lista\n" +
            "6. Salir"
        }

        switch (opcion){
            case 1:
                const data = prompt("Ingresa el dato a registrar a la lista:")
                Lista.insertNode(data)
                break
            case 2:
                const dataFind = prompt("Ingresa el dato a buscar en la lista:")
                const resultFind = lista.finNode(dataFind)
                alert ("Resultado de la busqueda: " + resultFind)
                break
            case 3:
                const dataDelete = prompt("Ingresa el dato a buscar en la lista:")
                const resultDelete = lista.deleteNode(dataDelete)
                alert("Resultado de la eliminacion: " + resultDelete)
                break
            case 4:
                const resultHead = lista.findHead()
                alert("Resultado de la busqueda de cabeza de la lista: " + resultHead)
                break
            case 5:
                lista.display()
                break
            case 6:
                window.close()
                return
                default:
                    alert("Opcion invalida. Intenta nuevamente.")
                    break
        }
    }
}




//Ejecuta el menú
menu()