
const persona = {
    nombre: 'markcode',
    apellido: 'io',
    edad: 30,
    direccion: {
        calle: 'principal',
        municipio: 'Qro',
        zip: '76180'
    }
}

console.log( persona );

const persona2 = persona;
persona2.nombre = 'markDev';
persona2.apellido = 'aws';

console.log( persona2 );