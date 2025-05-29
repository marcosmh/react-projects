import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test: pruebas en el useFetchGifs', () => {
  
    test('Test: debe de regresar el estado inicial ', () => {
      
       const category = 'One Punch';

       const { result } = renderHook( () => useFetchGifs( category )  );
       const { images, isLoading } = result.current;

       expect( images.length ).toBe(0);
       expect( isLoading ).toBeTruthy();
    
      
    });

    test('Test: debe retornar un arreglo de imagenes y isLoading en false ', async() => {
      
        const category = 'One Punch';
        const { result } = renderHook( () => useFetchGifs( category )  );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        
        const { images, isLoading } = result.current;

        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        


    });
    


    
});
