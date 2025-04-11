
export const getImagen = async() => {

    try {
        
        //const apiKey = '9gx7y5ZYskErNML02flF400OCJCDw0nN';
        const apiKey = '9kfCx7bdQMWv6RRQp3AJZIFn0KAC';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        console.log( url );
        
        return url;

    } catch (error) {
        // manejo del error
        //console.error(error)
        return 'No se encontro la imagen.';
    }
    
    
    
}




