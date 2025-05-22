import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';



describe('TEST <GifItem />', () => {
    
    const title = 'Saitama';
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=bc747b15jayur2zh7qcwl82biblm1dr6c48mm1wsy391lj89&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('TEST: debe hacer match con el snapshot: ', () => {

       const { container } = render( <GifItem title={ title } url={ url } /> );
       expect( container ).toMatchSnapshot();
      
    });
    
})
