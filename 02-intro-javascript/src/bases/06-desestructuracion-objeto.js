// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Anakin',
    apellido: 'Skywalker',
    edad: 30,
    clave: 'darthvader',
    rango: 'Master'
};

const { nombre,apellido,clave } = persona;

console.log( persona.nombre );
console.log( persona.apellido );
console.log( persona.edad );
console.log( persona.clave );
console.log( '------------------' );
console.log( nombre );
console.log( apellido );
console.log( clave );

const retornaPersona = ( usuario) => {
    const { nombre,apellido,clave } = usuario;
    console.log( nombre, apellido, clave);
}

const retornaPersona2 = ( {nombre, clave, rango ='Jedi'}) => {

    console.log( nombre, clave, rango);
}

const retornaPersona3 = ( {nombre, clave, rango ='Jedi'}) => {

    return {
        nombreClave: clave,
        nombrePersona: nombre,
        latlng: {
            lat: 14.1234,
            lng: 16.6789
        }
    }
}


retornaPersona( persona);
retornaPersona2( persona );
//const { nombreClave, latlng } = retornaPersona3( persona );
const { nombreClave, latlng:{lat, lng} } = retornaPersona3( persona );
console.log( nombreClave );
console.log( lat, lng );