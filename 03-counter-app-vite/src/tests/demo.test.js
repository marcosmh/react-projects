
describe('Test DemoComponent', () => {

    test('Test Demo', () => {
        
        // 1. Inicialización
        const msg1 = 'Hola Mundo';

        // 2. Estimulo
        const msg2 = msg1.trim();

        // 3. Observar el comportamiento... esperado
        expect( msg1 ).toBe( msg2 );
        
        

    });


});