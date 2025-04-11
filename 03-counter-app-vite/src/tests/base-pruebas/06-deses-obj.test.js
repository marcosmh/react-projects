import { usContext } from "../../base-pruebas/06-deses-obj"


describe('TEST 06-deses-obj => ', () => {

    
    test('TEST usContext: ', () => {

        const clave = 'Ironman'; 
        const nombre = 'Tony';
        const edad = 45; 
        const rango = 'Capitán';
       
        const userContext = usContext( { clave, nombre, edad, rango  } );
        console.log( usContext);

        expect( userContext ).toEqual( {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        } );
      
    });
    
  
})
