
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9gx7y5ZYskErNML02flF400OCJCDw0nN&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    return gifs;

  }