const root = document.getElementById("root");
let isDarkMode = false;
window.addEventListener("DOMContentLoaded", App);

function App() {
  Mount(Header());
  Mount(Main());
  Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
  Mount(MoviesBoxesSlider(), document.getElementById("main-container"));
  // Mount(MoviesBoxesSlider(41, 60), document.getElementById("main-container"));
}

// mount
const Mount = (element, place = root) => {
  place.appendChild(element);
};
// unMount
const UnMount = (element) => {
  element.remove()
};
// listUnMount
const listUnMount = (element) => {
  element.forEach((item) => item.remove());
};
// ##get all movies##
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
  let loadingSection = document.createElement('section');
  let loadingSectionContainer = document.createElement('div');
  let loading = document.createElement('img');

  // attributes
  loadingSection.classList.add('loading-section');
  loadingSectionContainer.classList.add('loading-section-container');
  loading.classList.add('loading-el')
  loading.alt = 'loading gif';
  loading.src = './assets/gif/loading/loading.gif';

  // appenchild
  loadingSection.appendChild(loadingSectionContainer);
  loadingSectionContainer.appendChild(loading);

  // return
  return loadingSection;
}
// infinite scroll event
const infiniteScroll = () => {
  window.addEventListener("scroll", () => {
    let docHight = document.documentElement.scrollHeight;
    let docTop = document.documentElement.scrollTop + 3;
    let windowHeight = window.innerHeight;

    if (windowHeight + docTop >= docHight) {
      if(document.querySelector('.loading-section') === null){
        // mount loading element in main
        Mount(loadingElement() , document.getElementById("main-container"))

        // remove loading from doc and mount new slider
        setTimeout(() => {
          UnMount(document.querySelector('.loading-section'));
          Mount(MoviesBoxesSlider(41, 60), document.getElementById("main-container"));
        }, 2000);
      }

    }
  });
};
infiniteScroll();
// side navbar Event
const showSideNavbar = (element, target, className) => {
  element.addEventListener("click", () => {
    target.classList.add(className);
    root.parentElement.classList.add("overflow-hidden");
  });
};
// remove side navbar
const removeSideNavbar = (element, target, className) => {
  element.addEventListener("click", () => {
    target.classList.remove(className);
    root.parentElement.classList.remove("overflow-hidden");
  });
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
    // --BUG-- when darkmode clicked loading loading.src must change , now it's dosen't change becuse loading dosen't mount in app and this return null
    document.querySelector('.loading-el').src = './assets/gif/loading/dark-loading.gif';
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
    document.querySelector('.loading-el').src = './assets/gif/loading/loading.gif';
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
  // navbar home
  let navbarHomeLi = document.createElement("li");
  let navbarHomeLink = document.createElement("a");
  // navbar input
  let navbarInputLi = document.createElement("li");
  let navbarInput = document.createElement("input");
  let searchLiveBoxContainer = document.createElement("div");
  let searchLiveBoxResult = document.createElement("div");
  let searchResultA = document.createElement("a");
  // navabr movies option
  let navbarMoviesLi = document.createElement("li");
  let navbarMoviesSelect = document.createElement("select");
  // let navbarMoviesOption = document.createElement("option");
  // ####################################################
  // input value
  const getInputValue = () => {};
  // ####################################################
  // ####################################################
  // **movies options value from API**
  const moviesOptionValue = async () => {
    let movieData = await GetAllMovies();
    movieData.forEach((item) => {
      let navbarMoviesOption = document.createElement("option");
      navbarMoviesOption.id = item.id;
      navbarMoviesOption.textContent = item.name;
      navbarMoviesSelect.appendChild(navbarMoviesOption);
    });
  };
  moviesOptionValue();
  // ####################################################
  // navbar episode option
  let navbarEpisodeLi = document.createElement("li");
  let navbarEpisodeSelect = document.createElement("select");
  let navbarEpisodeOptions = document.createElement("option");
  // ####################################################
  const episodeOptionValue = async () => {
    alert("hi");
  };
  // ####################################################
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
  // navbar > home link
  navbarHomeLi.classList.add("home-li");
  navbarHomeLink.classList.add("home-link");
  navbarHomeLink.href = "#";
  navbarHomeLink.textContent = "Home";
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
  //   navbar homw link
  navbarUl.appendChild(navbarHomeLi);
  navbarHomeLi.appendChild(navbarHomeLink);
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
  showSideNavbar(hamburgerButton, navbarUl, "show-sideNavbar");
  removeSideNavbar(navbarCloseBtn, navbarUl, "show-sideNavbar");
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
// ##-Box-##
// const Box = () => {

// }
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
      // moviesBoxesContainer.classList.add("box");
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
    }

    step = count + 1;
    count = count + 10;
  };
  setImgAndTitleMoviesSlider();
  // return
  return moviesBoxSection;
};
// ###-MovieInformations-###
const MoviesInformation = (movieId) => {
  // unmount all sliders
  listUnMount(document.querySelectorAll(".movie-boxes"));
  // get movieData
  let moviesInformationSection = document.createElement("section");

  let configMoviesInformationPage = async () => {
    let movieData = await GetAllMovies();

    // creating moviesinformation elements
    let moviesInformationContainer = document.createElement("div");
    // movies poster
    let moviesInformationImgContainer = document.createElement("div");
    let moviesInformationImg = document.createElement("img");
    // description
    let moviesInformationDescriptionContainer = document.createElement("div");
    let moviesInformationP = document.createElement("p");
    // Scenes
    let moviesInformationScenesContainer = document.createElement("div");
    let moviesInformationScenesImg = document.createElement("img");

    // classlist , src , type ...
    moviesInformationSection.classList.add("movies-information-section");
    moviesInformationContainer.classList.add("container", "movies-information");
    moviesInformationImgContainer.classList.add(
      "movie-information-image-container"
    );
    moviesInformationImg.src = movieData[movieId].image.medium;
    moviesInformationImg.alt = "movies-poster";
    moviesInformationDescriptionContainer.classList.add(
      "movies-information-description"
    );
    moviesInformationP.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae dicta, esse quaerat maxime veritatis perspiciatis optio accusantium incidunt suscipit soluta consectetur accusamus quo ullam! Voluptatibus accusantium voluptatum voluptate id laboriosam unde, explicabo corporis quae ratione quam itaque, ipsum praesentium recusandae dolores in autem nesciunt? Eligendi doloremque sit maiores cupiditate!";
    moviesInformationScenesContainer.classList.add("movies-information-scenes");
    moviesInformationScenesImg.classList.add("movies-information-scenes-img");
    moviesInformationScenesImg.src = "./assets/img/3.jpg";
    moviesInformationScenesImg.alt = "movies-scenes";

    // append
    moviesInformationSection.appendChild(moviesInformationContainer);
    moviesInformationContainer.appendChild(moviesInformationImgContainer);
    moviesInformationImgContainer.appendChild(moviesInformationImg);
    moviesInformationContainer.appendChild(
      moviesInformationDescriptionContainer
    );
    moviesInformationDescriptionContainer.appendChild(moviesInformationP);
    moviesInformationContainer.appendChild(moviesInformationScenesContainer);
    moviesInformationScenesContainer.appendChild(moviesInformationScenesImg);
  };

  configMoviesInformationPage();

  // return
  return moviesInformationSection;
};