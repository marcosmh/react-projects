import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"

describe('TEST 08-imp-exp: ', () => {
  
    test('TEST getHeroeById:  ', () => {
      
        const heroe = getHeroeById(1);
        console.log(heroe);

        expect( heroe ).toEqual(  { id: 1, name: 'Batman', owner: 'DC' } );
    });

    test('TEST getHeroeById: prueba que no exista el id  ', () => {
      
        const heroe = getHeroeById(100);
        console.log(heroe);

        expect( typeof heroe ).toBe(  'undefined' );
        expect( heroe ).toBeFalsy();
    })


    test('TEST getHeroesByOwner: (DC) ', () => {
      
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        console.log(heroe);
        const sizeArr = heroe.length;
        console.log(sizeArr);
        
        expect( heroe ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ] );

          expect( heroe ).toEqual( heroe.filter( (heroe) => heroe.owner === owner ));
          expect( heroe.length ).toBe(3);
          expect( heroe ).toHaveLength(3);
    });

    test('TEST getHeroesByOwner: (Marvel) ', () => {
      
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        console.log(heroe);
        const sizeArr = heroe.length;
        console.log(sizeArr);
        
        expect( heroe ).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ] );

          expect( heroe ).toEqual( heroe.filter( (heroe) => heroe.owner === owner ));
          expect( heroe.length ).toBe(2);
          expect( heroe ).toHaveLength(2);
    });

    
})
