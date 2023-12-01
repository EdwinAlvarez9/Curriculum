class Queue {
    constructor() {
        this.data = [];
    }

    // Agrega un elemento al final de la cola
    enqueue(_data) {
        this.data.push(_data);
    }

    // Devuelve el elemento frontal de la cola sin eliminarlo
    front() {
        if (this.isEmpty()) {
            return "La cola esta vacia";
        }
        return this.data[0];
    }

    // Elimina y devuelve el elemento frontal de la cola
    dequeue() {
        if (this.isEmpty()) {
            return "La cola esta vacia";
        }
        return this.data.shift();
    }

    // Comprobar si la cola esta vacia
    isEmpty() {
        return this.data.length === 0;
    }

    // Devuelve el numero de elementos en la cola
    size() {
        return this.data.length;
    }

    // Elimina todos los elementos de la cola
    clear() {
        this.data = [];
    }

    // Muestra los elementos de la cola
    print() {
        let items = ""
        items += this.data.join('\n -> \n')
        items += "\n null"
        alert(items)
    }
}

// Define el menu
function menu() {
    const cola = new Queue();

    while (true) {
        const opcion = prompt(
            "Selecciona la opcion:\n" +
            "1. Insertar elemento al final de la cola\n" +
            "2. Buscar elemento frontal de la cola\n" +
            "3. Eliminar elemento frontal de la cola\n" +
            "4. Comprobar si la cola esta vacia\n" +
            "5. Mostrar el numero de elementos de la cola\n" +
            "6. Eliminar todos los elementos de la cola\n" +
            "7. Mostrar elementos de la cola\n" +
            "8. Salir"
        );


        switch (opcion) {
            case "1":
                const data = prompt("Ingresa el dato a registar en la cola:");
                cola.enqueue(data);
                break;
            case "2":
                const resultFront = cola.front();
                alert("Resultado de la busqueda: " + resultFront);
                break;
            case "3":
                const resultDequeue = cola.dequeue();
                alert("Resultado de la eliminacion: " + resultDequeue);
                break;
            case "4":
                const resultEmpty = cola.isEmpty();
                alert("La cola esta vacia: " + resultEmpty);
                break;
            case "5":
                const resultSize = cola.size();
                alert("Resultado del tamaño de la cola: " + resultSize);
                break;
            case "6":
                cola.clear();
                alert("Los datos se han borrado");
                return;
            case "7":
                cola.print();
                return;
            case "8":
                window.close();
                return;
            default:
                alert("Opcion invalida. Intenta nuevamente.");
                break;

        }
    }
}

// Ejecuta el menu
menu();

