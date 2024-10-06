
const apiKey = 'AIzaSyB917tSvJcHGsNmse119zFqBZe85j-jUz0';
const formPesquisa = document.querySelector("form");
formPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;

    if(pesquisa == ""){
        alert('preencha o campo!');
        return;
    }
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${pesquisa}&key=${apiKey}`)
        .then(result => result.json())
        .then (json=>carregaLista(json));
}

const carregaLista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";
    
    json.items.forEach(element => {
        console.log(element);  
        
        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src=${element.volumeInfo.imageLinks && element.volumeInfo.imageLinks.smallThumbnail} /><h2>${element.volumeInfo.title}</h2>`;

        lista.appendChild(item);
    });
}