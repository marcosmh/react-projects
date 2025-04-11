import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Test 02-template-string', () => {

    test('getSaludo', () => {

        const name = 'Marcos';
        const message = getSaludo( name );

        expect( message ).toBe( `Hola ${ name }` );
      
    });
    
  
});
