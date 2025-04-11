import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('TEST en <FirstApp/>: ', () => {


    test('Debe hacer match con el snapshot... ', () => {

        console.log('Test env:', typeof document !== 'undefined' ? 'jsdom' : 'node');

        const title = 'Hola, Markcode';
        const { container } = render( <FirstApp title = { title } /> );
        
        console.log( container );
      
    });
    
  
});
