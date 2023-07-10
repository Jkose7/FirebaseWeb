const api_key = '288ad14073c9a7f1f1c435f9691e0754'
const base_url = 'https://api.themoviedb.org/3/'
const search_url = base_url + `search/movie?api_key=${api_key}`
const api_url = base_url + `movie/popular?api_key=${api_key}`
const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')
let page = 1;


btnSiguiente.addEventListener('click', (e) => {
    e.preventDefault();
    if (page < 1000) {
        page += 1
        //asdasd
        getMovie(api_url+`&page=${page}`)
    } else {
        console.log('there are no more pages')
    }
})
btnAnterior.addEventListener('click', (e) => {
    e.preventDefault();
    if (page > 1) {
        page -= 1
        //asdasd
        getMovie(api_url+`&page=${page}`)
    }
})

getMovie(api_url+`&page=${page}`);
function getMovie(url){
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    })
}

function showMovies(data){
    let printPopularMovie = ''
    data.forEach(popularMovie => {
        let vote_average = popularMovie.vote_average; 
        vote_average.toFixed(vote_average);
        printPopularMovie += `
            <div class="movie-container">
                <img class="poster" 
                    src='https://image.tmdb.org/t/p/w500/${popularMovie.poster_path}'>
                </img>
                
                <div class="movie-info">
                    <h1 class="text-overlay">${popularMovie.title}</h1>
                </div>

                <div class="overlay-img">
                    <div class="info-overlay">
                     <h1 class="text-overlay">OVERVIEW <span class='${colorVote(vote_average)}'>${vote_average}</span></h1>
                        <p>${popularMovie.overview}</p>
                    </div>
                </div>
            </div>
        `;
    });
    let numPage = `<p class="title">${page}</p>`;

    document.getElementById('pages').innerHTML = numPage;
    document.getElementById('popular-movies-container').innerHTML = printPopularMovie;
}
function colorVote(vote){
    if(vote>=7.5){
        return 'green'
    }else if(vote>=5.5){
        return 'orange'
    }else{
        return 'red'
    }
}

const formSearch = document.getElementById('form-search');
const inputSearch = document.getElementById('search-movie');

formSearch.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchTerm = inputSearch.value
    if(searchTerm){
        getMovie(search_url+`&query=${searchTerm}`)
    }
})

