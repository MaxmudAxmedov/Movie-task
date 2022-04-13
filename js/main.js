let elInputSearch = document.querySelector('.input-search');
let elForm = document.querySelector('.form-search');
let elList = document.querySelector('.list');
let elSelect = document.querySelector('.select-year');

let array = [];
let year = [];



// render function
function renderFunc (data, list) {
    list.innerHTML = ''
    data.forEach(element => {
        let elItem = document.createElement('li');
        let elImg = document.createElement('img');
        let elTitle = document.createElement('h2');
        let elBox = document.createElement('div');
        let elText = document.createElement('p');
        let elYear = document.createElement('p');

        elItem.classList.add('item');
        elImg.classList.add('films-img');
        elTitle.classList.add('films-title');
        elBox.classList.add('box');
        elText.classList.add('films-text');
        elYear.classList.add('films-year');
        
        elImg.src = element.Poster;
        elTitle.textContent = element.Title;
        elText.textContent = element.Type;
        elYear.textContent = element.Year;

        elItem.appendChild(elImg);
        elItem.appendChild(elTitle);
        elBox.appendChild(elText);
        elBox.appendChild(elYear);
        elItem.appendChild(elBox);
        list.appendChild(elItem);  
        
        year.push(element.Year)

        
    });     
}

elForm.addEventListener('submit', evt =>{
    evt.preventDefault();

    const API_KEY = "b91b1009";
    let searchInput = elInputSearch.value;

    let film = {
        id: array.length,
        title: searchInput,
    }

    async function getMovies () {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}`);
        let data = await response.json();
        let filmsSearch = data.Search;
        renderFunc(filmsSearch, elList)
    }
    getMovies();
    array.push(film);
    renderFunc(array, elList)
    elInputSearch.value = '';
})


// let f=[
//     {
//         Title:"Hua jai tor ra nong",
//         Year:2003,
//         imdbID:"tt0387015",
//         Type:"movie",
//         Poster:"https://m.media-amazon.com/images/M/MV5BMjE5ZjA5NTgtZWRjMy00MmI2LWEzYjctMmY1YWFlYmZhN2IyXkEyXkFqcGdeQXVyMzI4MzkxNTY@._V1_SX300.jpg"
//         }
// ]
