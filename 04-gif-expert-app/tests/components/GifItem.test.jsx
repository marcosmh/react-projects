import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';



describe('TEST <GifItem />', () => {
    
    const title = 'Saitama';
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=bc747b15jayur2zh7qcwl82biblm1dr6c48mm1wsy391lj89&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('TEST: debe hacer match con el snapshot: ', () => {

       const { container } = render( <GifItem title={ title } url={ url } /> );
       expect( container ).toMatchSnapshot();
      
    });

    test('TEST: debe mostrar la imágen con el url y alt indicado. ', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        //screen.debug();
        //console.log( screen.getByRole('img').src );
        //console.log( screen.getByRole('img').alt );

        //expect( screen.getByRole('img').src ).toBe( url );
        //expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( title ).toBe( alt );

    });

    test('TEST: debe mostrar el titulo en el componente ', () => {

        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
      
    });
    
    
    
})
