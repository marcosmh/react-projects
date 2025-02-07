// Desestructuracion de Arreglos

const personajes = ['Goku','Vegeta','Trunks'];

const [ , ,p3 ] = personajes;

console.log( personajes );
console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );

console.log( p3 );

const retornaArreglo = () => {
    return ['ABC',123];
}

const arr = retornaArreglo();
console.log(arr);

const [ letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

const useState = (valor) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}


const arreglo = useState('XXXX');

const [valor1, valor2] = useState('YYYY');

console.log(arreglo);

arreglo[1]();


console.log(valor1);
valor2();

