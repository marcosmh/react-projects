import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('TEST en <CounterApp/>: ', () => {

    const title = 'Counter App';
    const valueInitial = 10;

    test('TEST:: debe hacer match con el snapshot: ', () => {

        const { container } = render( <CounterApp  /> );
        expect( container ).toMatchSnapshot();
    
    });

    test('TEST:: debe de mostrar el valor inicial de 100: <CounterApp value={100}:   /> ', () => {
        
        render( <CounterApp value={100}  /> );
        expect( screen.getByText(100) ).toBeTruthy();
        expect( screen.getByRole('heading',{level: 2}).innerHTML ).toContain('100');

    });

    test('TEST:: debe de decrementar con el botón -1: ', () => {
        render( <CounterApp value={valueInitial}  /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('TEST:: debe de funcionar el boton de reset: ', () => {
        render( <CounterApp value={ 355 }  /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        
        //fireEvent.click( screen.getByText('Reset') );
        //expect( screen.getByText( 355 ) ).toBeTruthy();


        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}) );

        



    });


    
    
    


});