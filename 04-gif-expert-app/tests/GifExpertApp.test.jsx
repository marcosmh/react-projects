
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import GifExpertApp from '../src/GifExpertApp';

describe('Test: <GifExpertApp /> ', () => {
  
    test('Test: probar onAddCategory ', async() => {
        const category = 'One Punch';

        render( <GifExpertApp onNewCategory={ category } /> );
        //screen.debug();

        const input = screen.getByRole('textbox');
        await userEvent.type(input, category);

        expect(screen.getByText(category)).toBeTruthy();
        
        
      
    });
    
});
