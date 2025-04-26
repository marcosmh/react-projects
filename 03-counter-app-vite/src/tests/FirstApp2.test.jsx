import { getAllByText, render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('TEST en <FirstApp/>: ', () => {

    const title = 'Hola, Markcode';
    const subTitle = 'Soy un subtitulo';

    test('TEST:: debe de hacer match con el snapshot: ', () => {
        
        const { container } = render( <FirstApp title= { title } />);
        expect( container ).toMatchSnapshot();
      
    });
    
    test('TEST:: debe mostrar el mensaje "Hola, Markcode" ', () => {

        render( <FirstApp title= { title } />);
        //screen.debug();
        expect( screen.getAllByText(title) ).toBeTruthy(); 
       // expect( screen.getAllByText(title) ).not.toBeTruthy(); 
      
    });

    test('TEST:: debe mostrar el titulo en un h1:  ', () => {
        render( <FirstApp title= { title } />);
        expect( screen.getByRole( 'heading', {level: 1} ).innerHTML ).toContain( title );

    });
    
    test('TEST:: debe de mostrar el subtitulo enviado por props: ', () => {
      
    render( <FirstApp title= { title } subTitle= { subTitle } />);
        
    
    expect( screen.getAllByText( subTitle ).length ).toBe(2);


    });
    
    
    
    

   
    
    
  
});
