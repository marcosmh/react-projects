import { getHeroesById } from "./bases/08-import-export";


/*
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroesById(2);
        
        if(heroe) {
            resolve(heroe);
        } else {
            reject('No se pudo encontrar el heroe.');
        }
        
        
    },2000);

});


promesa.then( (heroe) =>{
    console.log('heroe ', heroe);
})
.catch( error => console.warn(error));
*/

const getHeroesByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroesById(id);
            
            if(heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe.');
            }
            
        },2000);
    
    });

}


getHeroesByIdAsync(4)
    .then( heroe => console.log('Heroe: ', heroe) )
    .catch( error => console.log( error ));