import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('TEST 07-deses => ', () => {
  
    test('TEST retornaArreglo ', () => {

        const arr = ['ABC', 123];

        const result = retornaArreglo();
        console.log( typeof result);

        const [ letter, numbers ]  = retornaArreglo();

        expect( result ).toEqual( arr );

        expect( letter ).toEqual( 'ABC' );
        console.log( typeof letter);
    
        expect( numbers ).toEqual( 123 );
        console.log( typeof numbers);

        expect( typeof result).toBe( 'object');
        expect( typeof letter).toBe( 'string');
        expect( typeof numbers).toBe( 'number');
        expect( letter ).toEqual( expect.any(String) );

        
      
    })
    
})
