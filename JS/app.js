

let productos = [
    { id: 1, nombre: 'Proteína en Polvo', categoria: 'Proteínas', precio: 23.000, descripcion: 'La mejor proteína para la construcción muscular y la recuperación.' },
    { id: 2, nombre: 'Creatina', categoria: 'Creatina', precio: 18.000, descripcion: 'Aumenta la fuerza y mejora el rendimiento durante el entrenamiento.' },
    { id: 3, nombre: 'Multivitamínico', categoria: 'Vitaminas', precio: 12.500, descripcion: 'Un suplemento esencial para cubrir todas tus necesidades vitamínicas y minerales.'},
    { id: 4, nombre: 'BCAA', categoria: 'Aminoácidos', precio: 21.000, descripcion: 'Ayuda a reducir la fatiga muscular y favorece la síntesis de proteínas.' },
    { id: 5, nombre: 'Quemador de Grasa', categoria: 'Quemadores', precio: 15.000, descripcion: 'Estimula el metabolismo y ayuda en la pérdida de peso.' },
];


function mostrarProductosConNumero(lista) {
    let resultado = '';
    for (const [index, producto] of lista.entries()) {
        resultado += `${index + 1}. ${producto.nombre}\n`;
    }
    return resultado;
}

function buscarPorNombre(lista, nombre) {
    return lista.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
}


function mostrarDescripcionPorId(id) {
    const productoSeleccionado = productos.find(producto => producto.id === id);
    if (productoSeleccionado) {
        return `${productoSeleccionado.nombre} - ${productoSeleccionado.descripcion}`;
    } else {
        return 'Producto no encontrado.';
    }
}


function mostrarRecomendacionesPersonalizadas(objetivo) {
    let recomendaciones = [];

    switch (objetivo) {
        case 'masaMuscular':
            recomendaciones = productos.filter(producto => producto.categoria === 'Proteínas' || producto.categoria === 'Creatina');
            break;

        case 'perdidaPeso':
            recomendaciones = productos.filter(producto => producto.categoria === 'Quemadores');
            break;

        default:
            return 'Opción no válida.';
    }

    if (recomendaciones.length > 0) {
        return `Recomendaciones para ${objetivo}:\n\n${mostrarProductosConNumero(recomendaciones)}`;
    } else {
        return `No hay recomendaciones disponibles para ${objetivo}.`;
    }
}

let nombreUsuario;

do {
    nombreUsuario = prompt('¡Hola! Por favor, ingresa un nombre valido:');
} while (!/^[a-zA-Z]+$/.test(nombreUsuario));

alert(`¡Bienvenido, ${nombreUsuario}!`);



function mostrarCombos() {
    const combos = [
        { nombre: 'Combo 1', productos: [1, 2]}, 
        { nombre: 'Combo 2', productos: [3, 4] }, 
    ];

    let resultado = 'Combos disponibles:\n\n';

    for (const combo of combos) {
        let precioTotal = 0;

        resultado += `${combo.nombre}:\n`;

        for (const idProducto of combo.productos) {
            const producto = productos.find(producto => producto.id === idProducto);
            resultado += `  - ${producto.nombre}: $${producto.precio.toFixed(3)}\n`;
            precioTotal += producto.precio;
        }

        resultado += `Precio Total: $${precioTotal.toFixed(3)}\n\n`;
    }

    return resultado;
}


let opcion;

do {
    let opcionesMensaje = `
        Elige una opción:
        1. Ver todos los productos
        2. Mostrar combos
        3. Ver descripción del producto
        4. Recomendaciones personalizadas
        5. Salir
    `;

    opcion = parseInt(prompt(opcionesMensaje));

    switch (opcion) {
        case 1:
            alert(`Listado de productos:\n\n${mostrarProductosConNumero(productos)}`);
            break;

        case 2:
            alert(mostrarCombos());
            break;

        case 3:
            alert(`Listado de productos:\n\n${mostrarProductosConNumero(productos)}`);
            
            let idProducto = parseInt(prompt('Ingresa el número del producto para ver su descripción:'));
            alert(mostrarDescripcionPorId(idProducto));
            break;

        case 4:
            let objetivo = prompt('Selecciona tu objetivo:\n1. Desarrollar masa muscular\n2. Pérdida de peso');

            switch (objetivo) {
                case '1':
                    alert(mostrarRecomendacionesPersonalizadas('masaMuscular'));
                    break;

                case '2':
                    alert(mostrarRecomendacionesPersonalizadas('perdidaPeso'));
                    break;

                default:
                    alert('Opción no válida. Por favor, selecciona 1 o 2.');
                    break;
            }
            break;

        case 5:
            alert('Gracias por usar la tienda de suplementos deportivos.');
            break;

        default:
            alert('¡Opción inválida! Por favor, elige una opción válida.');
            break;
    }
} while (opcion !== 5);