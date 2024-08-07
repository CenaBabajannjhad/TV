const root = document.getElementById("root");
let isDarkMode = false;
let isSideNavbarOpen = false;
window.addEventListener("DOMContentLoaded", App);
function App() {
  Mount(Header());
  Mount(Main());
  Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
  Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
}
// mount
const Mount = (element, place = root) => {
  place.appendChild(element);
};
// unMount
const UnMount = (element) => {
  element.remove();
};
// listUnMount
const listUnMount = (element) => {
  element.forEach((item) => item.remove());
};
// ##get all movies , i get 321 becuse i get more then this number , chorm memory usage increased , increase 1GB , and makes site slow##
const GetAllMovies = async () => {
  let movies;
  let URL = "https://api.tvmaze.com/shows";

  try {
    let response = await fetch(URL);
    let json = await response.json();
    movies = json.filter((item, index) => index < 321);
  } catch (err) {
    console.err(err);
  }

  return movies;
};
// loading component
const loadingElement = () => {
  // createElement
  let loadingSection = document.createElement("section");
  let loadingSectionContainer = document.createElement("div");
  let loading = document.createElement("img");

  // attributes
  loadingSection.classList.add("loading-section");
  loadingSectionContainer.classList.add("loading-section-container");
  loading.classList.add("loading-el");
  loading.alt = "loading gif";
  loading.src = "./assets/gif/loading/loading.gif";

  // appenchild
  loadingSection.appendChild(loadingSectionContainer);
  loadingSectionContainer.appendChild(loading);

  // return
  return loadingSection;
};
// infinite scroll event
const infiniteScroll = () => {
  let docHight = document.documentElement.scrollHeight;
  let docTop = document.documentElement.scrollTop + 3;
  let windowHeight = window.innerHeight;

  if (windowHeight + docTop >= docHight) {
    if (document.querySelector(".loading-section") === null) {
      // mount loading element in main
      Mount(loadingElement(), document.getElementById("main-container"));

      // remove loading from doc and mount new slider
      setTimeout(() => {
        UnMount(document.querySelector(".loading-section"));
        Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
      }, 1500);
    }
  }
};
window.addEventListener("scroll", infiniteScroll);
// side navbar Event
const showSideNavbar = () => {
  let className = "show-sideNavbar";
  let navbar = document.querySelector(".Navbar-wrapper");
  navbar.classList.add(className);
  root.parentElement.classList.add("overflow-hidden");
  isSideNavbarOpen = true;
};
// remove side navbar
const removeSideNavbar = () => {
  let className = "show-sideNavbar";
  let navbar = document.querySelector(".Navbar-wrapper");
  navbar.classList.remove(className);
  root.parentElement.classList.remove("overflow-hidden");
  isSideNavbarOpen = false;
};
// darkmode handler
const activeDarkmode = (
  element,
  className,
  btnTwo,
  hamburgerElement,
  header,
  target = root.parentElement
) => {
  element.addEventListener("click", () => {
    isDarkMode = true;
    target.classList.add(className);
    element.classList.add("none");
    btnTwo.classList.remove("none");
    hamburgerElement.src = "./assets/icons/menu/menu-white/menu.svg";
    header.classList.add("header-dark");
    // movie information condition
    if (document.querySelector(".movie-name")) {
      document.querySelector(".movie-name").classList.add("darkmode-name");
      document
        .querySelector(".movies-information-description")
        .classList.add("darkmode-desc");
    }
    // --BUG-- when darkmode clicked loading loading.src must change , now it's dosen't change becuse loading dosen't mount in app and this return null
    // document.querySelector(".loading-el").src =
    //   "./assets/gif/loading/dark-loading.gif";
  });
};
//darkmode remover
const inActiveDarkmode = (
  element,
  className,
  btnTwo,
  hamburgerElement,
  header,
  target = root.parentElement
) => {
  element.addEventListener("click", () => {
    isDarkMode = false;
    target.classList.remove(className);
    element.classList.add("none");
    btnTwo.classList.remove("none");
    hamburgerElement.src = "./assets/icons/menu/menu-black/menu.svg";
    header.classList.remove("header-dark");
    if (document.querySelector(".movie-name")) {
      document.querySelector(".movie-name").classList.remove("darkmode-name");
      document
        .querySelector(".movies-information-description")
        .classList.remove("darkmode-desc");
    }
    // document.querySelector(".loading-el").src =
    //   "./assets/gif/loading/loading.gif";
  });
};
// components
// ###-header-###
const Header = () => {
  //create header elements
  let header = document.createElement("header");
  // header container
  let headerContainer = document.createElement("div");
  // logo area
  let logoWrapper = document.createElement("div");
  let logoImg = document.createElement("img");
  // nav
  let nav = document.createElement("nav");
  // darkmode area
  let darkModeWrapper = document.createElement("div");
  let darkModeBtnMoon = document.createElement("button");
  let darkModeBtnMoonImg = document.createElement("img");
  let darkmodeBtnSun = document.createElement("button");
  let darkmodeBtnSunImg = document.createElement("img");
  // hamburger-icon area
  let hamburgerWrapper = document.createElement("div");
  let hamburgerButton = document.createElement("button");
  let hamburgerImageBtn = document.createElement("img");
  // navbar area
  let navbarUl = document.createElement("ul");
  //close btn
  let navbarCloseli = document.createElement("li");
  let navbarCloseBtn = document.createElement("button");
  let navbarCloseBtnImg = document.createElement("img");
  // navbar input
  let navbarInputLi = document.createElement("li");
  let navbarInput = document.createElement("input");
  let searchLiveBoxContainer = document.createElement("div");
  let searchLiveBoxResult = document.createElement("div");
  let searchResultA = document.createElement("a");
  // navabr movies option
  let navbarMoviesLi = document.createElement("li");
  let navbarMoviesSelect = document.createElement("select");
  let navbarMoviesOptionOne = document.createElement("option");
  // navbar episode option
  let navbarEpisodeLi = document.createElement("li");
  let navbarEpisodeSelect = document.createElement("select");
  let navbarEpisodeOptions = document.createElement("option");

  // **add class , id , src...**
  headerContainer.classList.add("container", "header-container");
  // logo area
  logoWrapper.classList.add("logo-wrapper");
  logoImg.classList.add("logo");
  logoImg.src = "./assets/logo/logo.png";
  logoImg.alt = "CENFLIX";
  // nav area
  nav.classList.add("nav-wrapper");
  // darkmode area
  darkModeWrapper.classList.add("darkmode-wrapper");
  // moon
  darkModeBtnMoon.classList.add("darkmode-button");
  darkModeBtnMoonImg.classList.add("darkmode");
  darkModeBtnMoonImg.src = `./assets/icons/darkmodeToggle/moon/moon.png`;
  darkModeBtnMoonImg.alt = "darkmode-toggle";
  // sun
  darkmodeBtnSun.classList.add("darkmode-button", "none");
  darkmodeBtnSunImg.classList.add("darkmode");
  darkmodeBtnSunImg.src = "./assets/icons/darkmodeToggle/sun/sun.png";
  darkmodeBtnSunImg.alt = "darkmode-toggle";
  // hamburger area
  hamburgerWrapper.classList.add("hamburger-wrapper");
  hamburgerButton.classList.add("hamburger-button");
  hamburgerButton.id = "menu-icon";
  hamburgerImageBtn.classList.add("hamburger");
  hamburgerImageBtn.src = "./assets/icons/menu/menu-black/menu.svg";

  hamburgerImageBtn.alt = "hamburger-button";
  // navbar area
  navbarUl.classList.add("Navbar-wrapper");
  // close btn
  navbarCloseli.classList.add("navbar-close");
  navbarCloseBtn.classList.add("navbar-close-btn");
  navbarCloseBtn.id = "close-sidenavbar";
  navbarCloseBtnImg.classList.add("navbar-close-btn-img");
  navbarCloseBtnImg.src = "./assets/icons/menu/menu-white/close-white.svg";
  navbarCloseBtnImg.alt = "close-btn";
  // navbar input
  navbarInputLi.classList.add("input-li");
  navbarInput.classList.add("search-input");
  navbarInput.id = "search";
  navbarInput.type = "text";
  navbarInput.placeholder = "enter movie name...";
  searchLiveBoxContainer.classList.add(
    "input-live-search-box-container",
    "none"
  );
  searchLiveBoxResult.classList.add("result");
  searchResultA.textContent = "result";
  // navbar movies option area
  navbarMoviesLi.classList.add("movies-option-li");
  navbarMoviesSelect.classList.add("movies-option");
  navbarMoviesSelect.id = "movies-option";
  // navbarMoviesOption.textContent = "movies";
  // navbar episode option area
  navbarEpisodeSelect.classList.add("episode-option");
  navbarEpisodeSelect.id = "episode-option";
  navbarEpisodeOptions.textContent = "episode";


  // input value
  const LiveSearchInput = async (Event) => {
    // w
    if(document.querySelector('.box-container')){
      UnMount(document.querySelector('.single-box') , document.querySelector('.box-container'))
    }
    let moviesData = await GetAllMovies();
    let searchValue = Event.target.value.toLowerCase();
    // search in data
    let movieNameInfo = moviesData.filter(item => {
      if(searchValue){
        return item.name.toLowerCase().includes(searchValue);
      }else{
        return null
      }
    });
    console.log(movieNameInfo)
    showSearchInputResult(movieNameInfo)
  };
  // showing search result
  const showSearchInputResult = (movieS) => {
    // sliders and they event removed
    window.removeEventListener("scroll", infiniteScroll);
    listUnMount(document.querySelectorAll(".movie-boxes"));
    // if
    if(movieS.length === 0){
      let count = document.querySelectorAll('.single-box')
      for(let i = 0 ; i < count.length - 1; i++){
        document.querySelector('.box-container').remove(document.querySelector('.single-box'))

        window.addEventListener("scroll", infiniteScroll);
        Mount(MoviesBoxesSlider() , document.querySelector('#main-container'))
        Mount(MoviesBoxesSlider() , document.querySelector('#main-container'))
      }
    }
    // for all items
    movieS.forEach(item => {
      Mount(Box(item.name , item.image.medium , item.id) , document.getElementById("main-container"))
    })
  }
  navbarInput.addEventListener('input' , LiveSearchInput)


  // **movies options value from API**
  const moviesOptionValue = async () => {
    let movieData = await GetAllMovies();
    navbarMoviesOptionOne.textContent = "select movie";
    navbarMoviesSelect.appendChild(navbarMoviesOptionOne);

    movieData.forEach((item) => {
      let navbarMoviesOption = document.createElement("option", "m-option");
      navbarMoviesOption.id = item.id;
      navbarMoviesOption.textContent = item.name;
      navbarMoviesOption.value = item.name;
      navbarMoviesSelect.appendChild(navbarMoviesOption);
    });
  };

  moviesOptionValue();
  // **episodes options value from API**
  const episodeOptionValue = async (target) => {
    let movieData = await GetAllMovies();
    let currentMovie = await movieData.find(
      (item) => item.name === `${target}`
    );
    let id = currentMovie.id;
    let URL = `https://api.tvmaze.com/shows/${id}/episodes`;
    try {
      let episodesRes = await fetch(URL);
      let json = await episodesRes.json();

    } catch (err) {
      console.log(err);
    }
  };

  // ** append **
  header.appendChild(headerContainer);
  // logo area
  headerContainer.appendChild(logoWrapper);
  logoWrapper.appendChild(logoImg);
  // nav area
  headerContainer.appendChild(nav);
  // darkmode area
  // moon
  nav.appendChild(darkModeWrapper);
  darkModeWrapper.appendChild(darkModeBtnMoon);
  darkModeBtnMoon.appendChild(darkModeBtnMoonImg);
  // sun
  darkModeWrapper.appendChild(darkmodeBtnSun);
  darkmodeBtnSun.appendChild(darkmodeBtnSunImg);
  // hamburger area
  nav.appendChild(hamburgerWrapper);
  hamburgerWrapper.appendChild(hamburgerButton);
  hamburgerButton.appendChild(hamburgerImageBtn);
  // navbar ul
  nav.appendChild(navbarUl);
  // close btn
  navbarUl.appendChild(navbarCloseli);
  navbarCloseli.appendChild(navbarCloseBtn);
  navbarCloseBtn.appendChild(navbarCloseBtnImg);
  // navbar input
  navbarUl.appendChild(navbarInputLi);
  navbarInputLi.appendChild(navbarInput);
  navbarInputLi.appendChild(searchLiveBoxContainer);
  searchLiveBoxContainer.appendChild(searchLiveBoxResult);
  searchLiveBoxResult.appendChild(searchResultA);
  // navbar movies option
  navbarUl.appendChild(navbarMoviesLi);
  navbarMoviesLi.appendChild(navbarMoviesSelect);
  // navbarMoviesSelect.appendChild(navbarMoviesOption);
  // navbar episode option
  navbarUl.appendChild(navbarEpisodeLi);
  navbarEpisodeLi.appendChild(navbarEpisodeSelect);
  navbarEpisodeSelect.appendChild(navbarEpisodeOptions);
  // ******header Events******
  // **sidebar events**
  hamburgerButton.addEventListener("click", showSideNavbar);
  navbarCloseBtn.addEventListener("click", removeSideNavbar);
  // **darkmode event**
  // darkmode active
  activeDarkmode(
    darkModeBtnMoon,
    "body-darkmode",
    darkmodeBtnSun,
    hamburgerImageBtn,
    header
  );
  inActiveDarkmode(
    darkmodeBtnSun,
    "body-darkmode",
    darkModeBtnMoon,
    hamburgerImageBtn,
    header
  );
  // return header elemenet for mounting
  return header;
};
// ###-main-###
const Main = () => {
  //create main elements
  let main = document.createElement("main");
  let mainContainer = document.createElement("div");

  // classlist , src , type ...
  mainContainer.classList.add("container");
  mainContainer.id = "main-container";

  // append
  main.appendChild(mainContainer);

  // return
  return main;
};
// ###-MoviesBoxesSlider-###
let step = 0;
let count = 10;
const MoviesBoxesSlider = () => {
  let moviesBoxSection = document.createElement("section");
  // get data from API
  let setImgAndTitleMoviesSlider = async () => {
    let movieData = await GetAllMovies();
    for (let i = step; i <= count; i++) {
      // img box
      let moviesBox = document.createElement("div");
      let moviesBoxImgContainer = document.createElement("div");
      let moviesBoxImg = document.createElement("img");
      // img title
      let moviesBoxTitleContainer = document.createElement("div");
      let moviesBoxTitleH3 = document.createElement("h3");
      // attributes
      moviesBoxSection.classList.add("movie-boxes-section", "movie-boxes");
      moviesBox.classList.add("box");
      moviesBoxImgContainer.classList.add("boxes-img-container");
      moviesBoxImg.src = movieData[i].image.medium;
      moviesBoxImg.alt = movieData[i].name;
      moviesBoxImg.id = movieData[i].id;
      moviesBoxTitleContainer.classList.add("boxes-title-container");
      moviesBoxTitleH3.textContent = movieData[i].name;
      // append
      moviesBoxSection.appendChild(moviesBox);
      moviesBox.appendChild(moviesBoxImgContainer);
      moviesBoxImgContainer.appendChild(moviesBoxImg);
      moviesBox.appendChild(moviesBoxTitleContainer);
      moviesBoxTitleContainer.appendChild(moviesBoxTitleH3);

      // events
      moviesBoxImg.addEventListener("click", (Event) => {
        // ,
        Mount(
          MoviesInformation(Event.target.alt),
          document.getElementById("main-container")
        );
      });
    }

    step = count + 1;
    count = count + 10;
  };
  setImgAndTitleMoviesSlider();
  // return
  return moviesBoxSection;
};
// ###-MovieInformations-###
const MoviesInformation = (movieName) => {
  // removie infinite scroll event
  window.removeEventListener("scroll", infiniteScroll);
  let moviesInformationSection = document.createElement("section");
  // unmount all sliders
  listUnMount(document.querySelectorAll(".movie-boxes"));
  let configMoviesInformationPage = async () => {
    // get movieData
    let movieData = await GetAllMovies();
    let targetMovie = await movieData.find((movie) => movie.name === movieName);
    // creating moviesinformation elements
    let moviesInformationContainer = document.createElement("div");
    let sectionTopContainer = document.createElement("div");
    let sectionBttomContainer = document.createElement("div");
    // back button
    let backButtonContainer = document.createElement("div");
    let backButtonElement = document.createElement("button");
    // backbtn event
    backButtonElement.addEventListener("click", () => {
      UnMount(
        moviesInformationSection,
        document.getElementById("main-container")
      );
      step = 0;
      count = 10;
      Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
      Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
      window.addEventListener("scroll", infiniteScroll);
    });
    // movies poster
    let moviesInformationImgContainer = document.createElement("div");
    let moviesInformationImg = document.createElement("img");
    // movie name
    let movieInformationsNameContainer = document.createElement("div");
    let movieInformationsNameh2 = document.createElement("h2");
    // description
    let moviesInformationDescriptionContainer = document.createElement("div");

    // classlist , src , type ...
    moviesInformationSection.classList.add("movies-information-section");
    moviesInformationContainer.classList.add("container", "movies-information");
    moviesInformationImgContainer.classList.add(
      "movie-information-image-container"
    );
    // back button
    backButtonContainer.classList.add("backBtn-wrapper");
    backButtonElement.classList.add("back-btn");
    backButtonElement.textContent = "back";
    // movie name
    moviesInformationContainer.classList.add("movie-name-contaner");
    movieInformationsNameh2.textContent = targetMovie.name;
    movieInformationsNameh2.classList.add("movie-name");
    // movie genres
    let movieGenresGenerator = (genres) => {
      let movieGenresContainer = document.createElement("div");
      movieGenresContainer.classList.add("movie-genres-container");
      for (let i = 0; i < genres.length; i++) {
        let genresItem = document.createElement("div");
        genresItem.textContent = genres[i];
        movieGenresContainer.appendChild(genresItem);
      }
      return movieGenresContainer;
    };
    // movie img
    moviesInformationImg.src = targetMovie.image.medium;
    moviesInformationImg.alt = targetMovie.name;
    moviesInformationDescriptionContainer.classList.add(
      "movies-information-description"
    );
    // movie description
    moviesInformationDescriptionContainer.innerHTML = targetMovie.summary;
    sectionTopContainer.classList.add("sec-1");
    sectionBttomContainer.classList.add("sec-2");
    // append
    moviesInformationSection.appendChild(moviesInformationContainer);
    // back btn
    moviesInformationContainer.appendChild(sectionTopContainer);
    moviesInformationContainer.appendChild(sectionBttomContainer);
    sectionTopContainer.appendChild(backButtonContainer);
    backButtonContainer.appendChild(backButtonElement);
    // img
    sectionTopContainer.appendChild(moviesInformationImgContainer);
    moviesInformationImgContainer.appendChild(moviesInformationImg);
    // movie name
    sectionBttomContainer.appendChild(movieInformationsNameContainer);
    movieInformationsNameContainer.appendChild(movieInformationsNameh2);
    // movie genres
    sectionBttomContainer.appendChild(movieGenresGenerator(targetMovie.genres));

    // descript
    sectionBttomContainer.appendChild(moviesInformationDescriptionContainer);
  };
  configMoviesInformationPage();

  // return
  return moviesInformationSection;
};
// ##-Box-##
let boxContainer = document.createElement('section');
boxContainer.classList.add('box-container');
const Box = (name , src , id) => {
  let moviesBox = document.createElement("div");
  let moviesBoxImgContainer = document.createElement("div");
  let moviesBoxImg = document.createElement("img");
  // img title
  let moviesBoxTitleContainer = document.createElement("div");
  let moviesBoxTitleH3 = document.createElement("h3");
  // attributes
  moviesBox.classList.add("single-box");
  moviesBoxImgContainer.classList.add("single-box-img-container");
  moviesBoxImg.src = src;
  moviesBoxImg.alt = name;
  moviesBoxImg.id = id;
  moviesBoxTitleContainer.classList.add("single-box-title-container");
  moviesBoxTitleH3.textContent = name;
  // append
  boxContainer.appendChild(moviesBox)
  moviesBox.appendChild(moviesBoxImgContainer);
  moviesBoxImgContainer.appendChild(moviesBoxImg);
  moviesBox.appendChild(moviesBoxTitleContainer);
  moviesBoxTitleContainer.appendChild(moviesBoxTitleH3);

  // return
  return boxContainer;
};
