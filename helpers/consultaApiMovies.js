const finMovieName = async (name) =>{
    const url = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=es-MX&page=1&api_key=f167ab8f98ad7883fbd3f10589de983e`
    const response = await fetch(url)
    return await response.json()
}

const finMovieID = async (id) =>{
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f167ab8f98ad7883fbd3f10589de983e&&language=es-MX`
    const response = await fetch(url)
    return await response.json()
    //return await response.json()
}

export {finMovieName, finMovieID};