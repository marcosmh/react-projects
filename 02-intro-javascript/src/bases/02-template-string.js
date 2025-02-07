
const nombre = 'markcode';
const apellido = 'io';
const hola = 'Hola';
const mundo = 'Mundo';

const nombreCompleto = nombre + ' '+apellido;
const saludo = `${hola} ${mundo}
${1+1}
`;

function getSaludo() {
    return 'Hola ' + nombreCompleto;
}

console.log(nombreCompleto);
console.log(saludo);
console.log(`Este es un texto ${getSaludo()}`)