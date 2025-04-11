import { getImagen } from "../../base-pruebas/11-async-await"

describe('TEST 11-async-await: ', () => {
  
    test('TEST getImagen: ', async() => {

        const url = await getImagen();
        console.log(url);

        expect( typeof url ).toBe('string');
      
    });

    test('TEST getImagen: No hay existe la imagen', async() => {

        const url = await getImagen();
        console.log(url);

        expect( url ).toBe('No se encontro la imagen.');
      
    })
    
})
