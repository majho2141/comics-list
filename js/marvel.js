const consultaListaApi = () => {
    const url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d18a1fa0aab96c6efc02213f1b89fc40&hash=2f346fd083e602afa60ad9f6592f432e";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const marvelList = data.data.results; 
            console.log(marvelList)
            const container_name = document.getElementById("nombre-comic");
            marvelList.forEach((comics)=>{
            const comic_name = document.createElement("tr")
            comic_name.textContent = comics.title
            container_name.appendChild(comic_name)
            });
            const container_creator = document.getElementById("creador-comic");
            marvelList.forEach((comics)=>{
                if(comics.creators.items[1] != null && comics.creators.items[1] != undefined){
                    const comic_creator = document.createElement("tr")
                    comic_creator.textContent = comics.creators.items[1].name
                    container_creator.appendChild(comic_creator)
                }
            });
        })
        .catch((error) => console.log(error));
};
