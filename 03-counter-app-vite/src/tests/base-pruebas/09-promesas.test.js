import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"

describe('TEST 09-promesas ##########', () => {
  
    test('TEST getHeroeByIdAsync ', (done) => {

       const id = 1;
       getHeroeByIdAsync(id)
        .then( heroe =>{
            
            done();
            console.log( heroe );
            expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

        });

    });

    test('TEST getHeroeByIdAsync (Error) ', (done) => {

        const id = 100;
        const error =  "No se pudo encontrar el héroe 100";
        getHeroeByIdAsync(id)
         .then( heroe =>{

            expect( heroe ).toBeFalsy();
            done();
         })
         .catch( err =>{
             
             done();
             console.log( err );
             expect( err ).toBe( error );
 
         });
 
     });



    
});
