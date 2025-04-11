import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('TEST en <FirstApp/>: ', () => {


    test('Debe hacer match con el snapshot... ', () => {

        const title = 'Hola, Markcode';
        const { container } = render( <FirstApp title = { title } /> );

        console.log( container );
      
    });
    
  
});
