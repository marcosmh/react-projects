import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory";

describe('TEST: en <AddCategory /> ', () => {
  

    test('Test: debe cambiar el valor de la caja de texto ', () => {
      
        render( <AddCategory onNewCategory={ () => { } } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } } );
        
        expect( input.value ).toBe('Saitama');

        //screen.debug();

    });


    
});
