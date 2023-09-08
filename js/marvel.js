const consultaListaApi = () => {
    const url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d18a1fa0aab96c6efc02213f1b89fc40&hash=2f346fd083e602afa60ad9f6592f432e";
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const marvelList = data.data.results; 
            console.log(marvelList);

            const comicsTable = document.getElementById("table-comics");

            marvelList.forEach((comics) => {
                const row = comicsTable.insertRow();

                const comicNameCell = row.insertCell(0);
                comicNameCell.textContent = comics.title;

                const comicCreatorCell = row.insertCell(1);
                if (comics.creators.items[0]) {
                    for (i=0; i<comics.creators.items.length; i++){
                        comicCreatorCell.textContent = comics.creators.items[i].name
                    }
                } else {
                    comicCreatorCell.textContent = "Desconocido";
                }

                const comicStoriesCell = row.insertCell(2);

                for (i=0; i<comics.stories.items.length; i++){
                    comicStoriesCell.textContent = comics.stories.items[i].name
                }
        
            });
        })
        .catch((error) => console.log(error));
};

