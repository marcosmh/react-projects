import { render, screen } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('TEST en <CounterApp/>: ', () => {

    const title = 'Counter App';
    const valor = 100;

    test('TEST:: debe hacer match con el snapshot: ', () => {

        const { container } = render( <CounterApp  /> );
        expect( container ).toMatchSnapshot();
    
    });

    test('TEST:: debe de mostrar el valor inicial de 100: <CounterApp value={100}:   /> ', () => {
        
        render( <CounterApp value={100}  /> );
        expect( screen.getByText(100) ).toBeTruthy();
        expect( screen.getByRole('heading',{level: 2}).innerHTML ).toContain('100');

    });
    
    


});