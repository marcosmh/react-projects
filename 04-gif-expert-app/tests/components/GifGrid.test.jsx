import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test: <GifGrid />', () => {

    const category = 'One Punch';
  
    test('Test: debe mostrar el loading inicialmente ', () => {

        useFetchGifs.mockReturnValue({
            images: [], 
            isLoading: true
        });

        render( <GifGrid category={ category } />  );
        //screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
       
    });

    test('Test: debe mostrar items cuando se cargan las imágenes de useFetchGifs ', () => {
      
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://media3.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=bc747b15xmoi7r9zswjr2xq242lobxby4hiqy66tl0ez0w31&ep=v1_gifs_search&rid=giphy.gif&ct=g'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://media1.giphy.com/media/0vLnT4x5j5fOj4ZYtC/giphy.gif?cid=bc747b15xmoi7r9zswjr2xq242lobxby4hiqy66tl0ez0w31&ep=v1_gifs_search&rid=giphy.gif&ct=g'
            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: true
        });

        render( <GifGrid category={ category } />  );
        //screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);


    });
    


    
});
