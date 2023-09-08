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
                    comicCreatorCell.textContent = comics.creators.items[0].name;
                } else {
                    comicCreatorCell.textContent = "Desconocido";
                }

            });
        })
        .catch((error) => console.log(error));
};

