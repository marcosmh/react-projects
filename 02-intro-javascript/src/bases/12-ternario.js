

const activo = true;

let mensaje = '';

if( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'No Activo';
}

const mensaje2 = activo ? 'Activo' : 'Inactivo';
const mensaje3 = activo && 'Activo';

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);