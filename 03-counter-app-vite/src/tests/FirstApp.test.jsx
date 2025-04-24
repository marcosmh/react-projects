import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('TEST en <FirstApp/>: ', () => {


    test('Debe hacer match con el snapshot... ', () => {

        const title = 'Hola, Markcode';
        const { container } = render( <FirstApp title = { title } /> );

        //console.log( container );

        expect( container ).toMatchSnapshot();
      
    });
    
    test('Debe mostrar el título en un h1: ', () => {
        const title = 'Hola, Markcode';
        const { container, getByText } = render( <FirstApp title = { title } /> );

        expect( getByText( title ) ).toBeTruthy();

        const h1 = container.querySelector( 'h1' );

        console.log( h1.innerHTML );

        expect( h1.innerHTML ).toBe(title);

        expect( h1.innerHTML ).toContain(title);
    });
    
  
});
