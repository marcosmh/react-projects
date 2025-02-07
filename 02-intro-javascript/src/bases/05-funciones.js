// Funciones JS


function saludar(nombre) {
    return `Hola ${nombre}`;
}

const saludo = function (nombre) {
    return `Hola ${nombre}`;
}

const saludo2 =  (nombre) => {
    return `Hola ${nombre}`;
}

const saludo3 = (nombre ) => `Hola, ${nombre}`;
const saludo4 = ( ) => `Hola Mundo`;

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Skywalker'
    }
}

const getUser2 = () => 
    ({
        uid: 'DEF123',
        username: 'Organa'
    });


const getUsuarioActivo = (nombre) => 
    ({
        uid: 'GHI123',
        username: 'Solo'
    });


const usuarioActivo = getUsuarioActivo('Markcode');
console.log(usuarioActivo);

console.log(saludar('markcode'));
console.log(saludo('markcode1'));
console.log(saludo2('markcode2'));
console.log(saludo3('markcode3'));
console.log(saludo4() );
console.log(getUser() );
console.log(getUser2() );
console.log(usuarioActivo);