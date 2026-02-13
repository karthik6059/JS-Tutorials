//js refrence

const movieAddModalElement = document.getElementById("add-modal");
const startAddMovieButtonElement = document.querySelector("header button");
const backDropElement = document.getElementById("backdrop");
const cancelMovieAddModalElement = movieAddModalElement.querySelector("button.btn--passive");
const addmovieAddModalElement = cancelMovieAddModalElement.nextElementSibling;
const userInputs = movieAddModalElement.querySelectorAll("input");
const movies=[];
const uiSection = document.getElementById('entry-text');
const rootnode = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById('delete-modal');

//display model function
const toggledisplayShowModal = () => {
    movieAddModalElement.classList.add("visible");
    togglebackDropFn();
}

const toggledisplayModal = () => {
    movieAddModalElement.classList.remove("visible");
    togglebackDropFn();
    clearInput();
}
//backdrop function
const togglebackDropFn = () =>{
    backDropElement.classList.toggle("visible");
}
//backdrop closing function
const closeBackDrop = () =>{
    toggledisplayModal();
    closeDeletMovieHandler();
}

//modalcard closing function
const closeMovieAddModal = () =>{
    toggledisplayModal();
}


//function to clear user input
const clearInput = () =>{
    for(const input of userInputs){
        input.value='';
    }
}

//function to clearui before displaying movies
const clearUi = () =>{
    if(movies.length===0){
        uiSection.style.display="block";
    }else{
        uiSection.style.display="none";
    }
}

//function to remove movies

const removeMovie =(movieId) =>{
    let movieIndex = 0;
    for(let movie of movies){
        if(movie.mvid===movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    rootnode.children[movieIndex].remove();
}

const deleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  togglebackDropFn();
  // removeMovie(movieId);
};

const closeDeletMovieHandler = () =>{
    togglebackDropFn();
    deleteMovieModal.classList.remove('visible');
}

//function to display movies in list

const displayMovies=(id,title,url,rating)=>{
    const newMovieElement=document.createElement("li");
    newMovieElement.className="movie-element";
    newMovieElement.innerHTML=`
    <div class="movie-element__image">
         <img src="${url}" alt="${title}"/>
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;

    console.log("movies details");
    console.dir(newMovieElement);
    rootnode.append(newMovieElement);
    newMovieElement.addEventListener("click",deleteMovieHandler.bind(null,id));
}

//add movie function
const addMovieHandler = () =>{
    const movieTitle = userInputs[0].value;
    const imageUrl = userInputs[1].value;
    const movieRating =userInputs[2].value;

    if(movieTitle.trim()===''||imageUrl.trim()===''||movieRating.trim()===''||
    parseInt(movieRating)<1||parseInt(movieRating)>5){
        alert("Please enter a valid input");
        clearInput();
        return;
    }
    const moviesInput = {
        mvid:Math.random().toString(),
        title : movieTitle,
        imgUrl : imageUrl, //https://getwallpapers.com/wallpaper/full/8/9/a/145400.jpg
        //https://cdn.pixabay.com/photo/2023/02/05/01/09/artificial-intelligence-7768524_1280.jpg
        rating: movieRating
    }
    movies.push(moviesInput);
    console.log(movies);
    clearInput();
    toggledisplayModal();
    clearUi();
    displayMovies(moviesInput.mvid,moviesInput.title,moviesInput.imgUrl,moviesInput.rating);

}


startAddMovieButtonElement.addEventListener("click",toggledisplayShowModal);
backDropElement.addEventListener("click",closeBackDrop);
cancelMovieAddModalElement.addEventListener("click",closeMovieAddModal);
addmovieAddModalElement.addEventListener("click",addMovieHandler);
