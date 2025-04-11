import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Test 05-funciones', () => {

    test('Test getUser', () => {
      
        const json = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();


        expect( user ).toEqual( json  );

    });

    test('Test getUsuarioActivo ', () => {

        const name = 'Marcos'
       
        const activeUser = getUsuarioActivo(name);

        //expect( activeUser ).toEqual( json  );
        expect( activeUser).toEqual( {
            uid: 'ABC567',
            username: name
        } );

    });
    
    
  
})
