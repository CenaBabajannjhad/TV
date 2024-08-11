const root = document.getElementById("root");
let isDarkMode = false;
let isSideNavbarOpen = false;
let isMovieInfo = false;
window.addEventListener("DOMContentLoaded", App);
function App() {
  homeSetup();
}
// home setup
const homeSetup = (status) => {
  Mount(Header());
  Mount(Main());
  Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
  Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
  Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
};
// mount Element
const Mount = (element, place = root) => {
  place.appendChild(element);
};
// unMount Element
const UnMount = (element) => {
  element.remove();
};
// listUnMount Elements [ node list ]
const listUnMount = (element) => {
  element.forEach((item) => item.remove());
};
// reset input value
const resetInput = (element) => {
  element.value = "";
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
  });
};
// ****components****
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
  let navbarEpisodeOptionsOne = document.createElement("option");
  // ###########################
  // **attributes**
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
  navbarEpisodeOptionsOne.textContent = "select episode";
  // ##############
  // append
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
  navbarEpisodeSelect.appendChild(navbarEpisodeOptionsOne);

  // ##############
  // Events
  hamburgerButton.addEventListener("click", showSideNavbar);
  navbarCloseBtn.addEventListener("click", removeSideNavbar);
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

  // ##############
  // functions
  // live search func
  const LiveSearchInput = async (Event) => {
    // if in box-container allready exist box searches , remove they for showing new results
    let isBoxContainer = document.querySelector(".box-container");
    let singleBoxes = document.querySelectorAll(".single-box");
    if (isBoxContainer) {
      listUnMount(singleBoxes, isBoxContainer);
    }
    // get movie data from getAllMocies function
    let moviesData = await GetAllMovies();
    let searchValue = Event.target.value;
    // search in movies data
    let movieNameInfo = moviesData.filter((item) => {
      // if input had value - returned filter
      if (searchValue) {
        return item.name.toLowerCase().includes(searchValue);
      } else {
        // if input had no value - else return null
        return null;
      }
    });
    // send filter data for showSearchInputResult
    showSearchInputResult(movieNameInfo);
  };
  // show search result in doc
  const showSearchInputResult = (movieS) => {
    // removing 2 thing , infinite scroll event and movies-slider
    window.removeEventListener("scroll", infiniteScroll);
    listUnMount(document.querySelectorAll(".movie-boxes"));
    // if param had value
    if (movieS) {
      movieS.forEach((item) => {
        // for each item in list , call box component to show in doc searches
        Mount(
          Box(item.name, item.image.medium, item.id),
          document.getElementById("main-container")
        );
      });
    }

    // check if movie-information
    if (isMovieInfo) {
      isMovieInfo = false;
      UnMount(
        document.querySelector(".movies-information-section"),
        document.querySelector("#main-container")
      );
    }

    // if input had no value
    if (movieS.length === 0 || movieS === null || movieS === undefined) {
      let singleBoxes = document.querySelectorAll(".single-box");
      listUnMount(singleBoxes, document.querySelector(".box-container"));

      window.addEventListener("scroll", infiniteScroll);
      Mount(MoviesBoxesSlider(), document.querySelector("#main-container"));
      Mount(MoviesBoxesSlider(), document.querySelector("#main-container"));
    }
  };
  navbarInput.addEventListener("input", LiveSearchInput);
  // movies option value
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

    navbarMoviesSelect.addEventListener("change", (Event) => {
      // mount and unmount document
      if (isMovieInfo === false) {
        Mount(
          MoviesInformation(Event.target.value),
          document.querySelector("#main-container")
        );
      }
      if (document.querySelector(".movies-information-section")) {
        UnMount(
          document.querySelector(".movies-information-section"),
          document.querySelector("#main-container")
        );
        Mount(
          MoviesInformation(Event.target.value),
          document.querySelector("#main-container")
        );
      }
      // side navbar condition
      if (isSideNavbarOpen) {
        document
          .querySelector(".Navbar-wrapper")
          .classList.remove("show-sideNavbar");
        isSideNavbarOpen = false;
      }
      // get target movie
      let targetMovie = movieData.filter((item) => {
        if (Event.target.value !== "select movie") {
          return item.name === Event.target.value;
        }
      });
      setEpisodes(targetMovie);
      // if movie changed remove old episodes and add new episods
      if (document.querySelector(".episodes-element")) {
        listUnMount(
          document.querySelectorAll(".episodes-element"),
          navbarEpisodeSelect
        );
      }
      // if episode is mount
      if(document.querySelector('.episode-section')){
        UnMount(document.querySelector('.episode-section') , document.querySelector('#main-container'));
        Mount(MoviesInformation(Event.target.value) , document.querySelector('#main-container'));
        
      }
    });
  };
  moviesOptionValue();

  const setEpisodes = async (target) => {
    let movieEpisode;
    let movieData = await GetAllMovies();
    let targetMovie = target;
    let URL = `https://api.tvmaze.com/shows/${targetMovie[0].id}/episodes`;
    // get episode
    try {
      let response = await fetch(URL);
      let json = await response.json();
      movieEpisode = await json;
    } catch (err) {
      console.log(err);
    }
    // show in dom
    let showSetEpisodesInSelect = () => {
      movieEpisode.forEach((item) => {
        let episodeOptions = document.createElement("option");
        episodeOptions.classList.add("episodes-element");
        episodeOptions.textContent = item.name;
        navbarEpisodeSelect.appendChild(episodeOptions);
      });
    };
    showSetEpisodesInSelect();
    navbarEpisodeSelect.addEventListener("change", (Event) => {
      let currentEpisode = movieEpisode.filter(
        (item) => item.name === Event.target.value
      );
      
      if (document.querySelector(".movies-information-section")) {
        UnMount(
          document.querySelector(".movies-information-section"),
          document.querySelector("#main-container")
        );
        Mount(
          Episode(currentEpisode[0]),
          document.querySelector("#main-container")
        );
      }

      if(document.querySelector('.episode-section')){
        UnMount(document.querySelector('.episode-section') , document.querySelector('#main-container'));
        Mount(
          Episode(currentEpisode[0]),
          document.querySelector("#main-container")
        );
      }

    });
  };

  // return
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
let counter = 0;
const MoviesInformation = (movieName) => {
  isMovieInfo = true;
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
      isMovieInfo = false;
      resetInput(document.querySelector("#search"));
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
    moviesInformationSection.id = counter;
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
  counter++;
  // return
  return moviesInformationSection;
};
// ##-episodes-##
const Episode = (episode) => {
  // create elements
  let episodeSection = document.createElement("section");
  let episodeSectionContainer = document.createElement("div");
  let episodeImageContainer = document.createElement("div");
  let episodeImage = document.createElement("img");
  let episodeInformationContainer = document.createElement("div");
  let episodeNameContainer = document.createElement("div");
  let episodeName = document.createElement("h2");
  let episodeSeasonContainer = document.createElement("div");
  let episodeSeason = document.createElement("h4");
  let episodeAirdateContainer = document.createElement("div");
  let episodeAirdate = document.createElement("h5");
  let episodeAvrageContainer = document.createElement("div");
  let episodeAvrage = document.createElement("h5");
  let episodeSummeryContainer = document.createElement("div");

  // attributes
  episodeSection.classList.add("episode-section");
  episodeSectionContainer.classList.add("container", "episode-container");
  episodeImageContainer.classList.add("episode-img-container");
  episodeImage.classList.add("episode-img");
  episodeImage.alt = "episode image";
  episodeImage.src = episode.image.medium;
  episodeInformationContainer.classList.add("episode-informations-container");
  episodeNameContainer.classList.add("episode-name");
  episodeName.textContent = `episode name : ${episode.name}`;
  episodeSeasonContainer.classList.add("episode-season");
  episodeSeason.textContent = `season : ${episode.season}`;
  episodeAirdateContainer.classList.add("episode-airdate");
  episodeAirdate.textContent = `airdate : ${episode.airdate}`;
  episodeAvrageContainer.classList.add("episode-avrage");
  episodeAvrage.textContent = `average : ${episode.rating.average}`;
  episodeSummeryContainer.classList.add("episode-summery");
  episodeSummeryContainer.innerHTML = episode.summary;

  // append
  episodeSection.appendChild(episodeSectionContainer);
  episodeSectionContainer.appendChild(episodeImageContainer);
  episodeImageContainer.appendChild(episodeImage);
  episodeSectionContainer.appendChild(episodeInformationContainer);
  episodeInformationContainer.appendChild(episodeNameContainer);
  episodeNameContainer.appendChild(episodeName);
  episodeInformationContainer.appendChild(episodeSeasonContainer);
  episodeSeasonContainer.appendChild(episodeSeason);
  episodeInformationContainer.appendChild(episodeAirdateContainer);
  episodeAirdateContainer.appendChild(episodeAirdate);
  episodeInformationContainer.appendChild(episodeAvrageContainer);
  episodeAvrageContainer.appendChild(episodeAvrage);
  episodeInformationContainer.appendChild(episodeSummeryContainer);

  // return
  return episodeSection;
};
// ##-Box-##
let boxContainer = document.createElement("section");
boxContainer.classList.add("box-container", "single-box-container");
const Box = (name, src, id) => {
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
  moviesBoxTitleH3.classList.add("box-name");

  // append
  boxContainer.appendChild(moviesBox);
  moviesBox.appendChild(moviesBoxImgContainer);
  moviesBoxImgContainer.appendChild(moviesBoxImg);
  moviesBox.appendChild(moviesBoxTitleContainer);
  moviesBoxTitleContainer.appendChild(moviesBoxTitleH3);

  // event
  moviesBox.addEventListener("click", () => {
    resetInput(document.querySelector("#search"));
    UnMount(boxContainer, document.querySelector("#main-container"));
    Mount(MoviesInformation(name), document.querySelector("#main-container"));


  });

  // return
  return boxContainer;
};
