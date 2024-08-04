window.addEventListener("DOMContentLoaded", App);
const root = document.getElementById("root");
let isDarkMode = false;

function App() {
  Mount(Header());
  Mount(Main());
  Mount(MainGenres(), document.getElementById("main-container"));
  Mount(MoviesBoxes(), document.getElementById("main-container"));
  Mount(MoviesInformation() , document.getElementById("main-container"))
}
// components
// mount component
let Mount = (element, place = root) => {
  place.appendChild(element);
};
// unMount component
let unMount = (element) => {
  element.remove();
};
// side navbar Event
let showSideNavbar = (element, target, className) => {
  element.addEventListener("click", () => {
    target.classList.add(className);
    root.parentElement.classList.add("overflow-hidden");
  });
};
// remove side navbar
let removeSideNavbar = (element, target, className) => {
  element.addEventListener("click", () => {
    target.classList.remove(className);
    root.parentElement.classList.remove("overflow-hidden");
  });
};
// darkmode handler
let activeDarkmode = (
  element,
  className,
  btnTwo,
  hamburgerElement,
  target = root.parentElement
) => {
  element.addEventListener("click", () => {
    isDarkMode = true;
    target.classList.add(className);
    element.classList.add("none");
    btnTwo.classList.remove("none");
    hamburgerElement.src = "./assets/icons/menu/menu-white/menu.svg";
  });
};
//darkmode remover
let inActiveDarkmode = (
  element,
  className,
  btnTwo,
  hamburgerElement,
  target = root.parentElement
) => {
  element.addEventListener("click", () => {
    isDarkMode = false;
    target.classList.remove(className);
    element.classList.add("none");
    btnTwo.classList.remove("none");
    hamburgerElement.src = "./assets/icons/menu/menu-black/menu.svg";
  });
};
// ###-header-###
let Header = () => {
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
  // navabr movies option
  let navbarMoviesLi = document.createElement("li");
  let navbarMoviesSelect = document.createElement("select");
  let navbarMoviesOption = document.createElement("option");
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
  // navbar movies option area
  navbarMoviesLi.classList.add("movies-option-li");
  navbarMoviesSelect.classList.add("movies-option");
  navbarMoviesSelect.id = "movies-option";
  navbarMoviesOption.textContent = "example";
  // navbar episode option area
  navbarEpisodeSelect.classList.add("episode-option");
  navbarEpisodeSelect.id = "episode-option";
  navbarEpisodeOptions.textContent = "example";

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
  // navbar movies option
  navbarUl.appendChild(navbarMoviesLi);
  navbarMoviesLi.appendChild(navbarMoviesSelect);
  navbarMoviesSelect.appendChild(navbarMoviesOption);
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
    hamburgerImageBtn
  );
  inActiveDarkmode(
    darkmodeBtnSun,
    "body-darkmode",
    darkModeBtnMoon,
    hamburgerImageBtn
  );
  // return header elemenet for mounting
  return header;
};
// ###-main-###
let Main = () => {
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
// ###-main-genre-###
let MainGenres = () => {
  //create mainGenre elements
  let mainGenresSection = document.createElement("section");
  let mainGenresSectionBtns = document.createElement("button");

  // classlist , src , type ...
  mainGenresSection.classList.add("genre-movie");
  mainGenresSectionBtns.classList.add("genre-movie-btns");
  mainGenresSectionBtns.textContent = "hell boy";

  // append
  mainGenresSection.appendChild(mainGenresSectionBtns);

  // return
  return mainGenresSection;
};
// ###-MoviesBoxes-###
let MoviesBoxes = () => {
  //create moviesBoxes elements
  let moviesBoxSection = document.createElement('section');
  let moviesBoxesContainer = document.createElement('div');
  let moviesBox = document.createElement('div');
  // img box
  let moviesBoxImgContainer = document.createElement('div');
  let moviesBoxImg = document.createElement('img')
  // img title
  let moviesBoxTitleContainer = document.createElement('div');
  let moviesBoxTitleH3 = document.createElement('h3');

  // classlist , src , type ...
  moviesBoxSection.classList.add("movie-boxes-section");
  moviesBoxesContainer.classList.add("movie-boxes");
  moviesBox.classList.add("box");
  moviesBoxImgContainer.classList.add("boxes-img-container");
  moviesBoxImg.src = "./assets/img/1.jpg";
  moviesBoxImg.alt = "movie-img;";
  moviesBoxTitleContainer.classList.add("boxes-title-container");
  moviesBoxTitleH3.textContent = 'movies name';

  // append
  moviesBoxSection.appendChild(moviesBoxesContainer);
  moviesBoxesContainer.appendChild(moviesBox);
  moviesBox.appendChild(moviesBoxImgContainer);
  moviesBoxImgContainer.appendChild(moviesBoxImg);
  moviesBox.appendChild(moviesBoxTitleContainer);
  moviesBoxTitleContainer.appendChild(moviesBoxTitleH3);

  // return
  return moviesBoxSection
}
// ###-MovieInformations-###
let MoviesInformation = () => {
  // creating moviesinformation elements
  let moviesInformationSection = document.createElement('section');
  let moviesInformationContainer = document.createElement('div');
  // movies poster
  let moviesInformationImgContainer = document.createElement('div');
  let moviesInformationImg = document.createElement('img');
  // description
  let moviesInformationDescriptionContainer = document.createElement('div');
  let moviesInformationP = document.createElement('p');
  // Scenes
  let moviesInformationScenesContainer = document.createElement('div');
  let moviesInformationScenesImg = document.createElement('img');

  // classlist , src , type ...
  moviesInformationSection.classList.add("movies-information-section");
  moviesInformationContainer.classList.add("container" , "movies-information");
  moviesInformationImgContainer.classList.add("movie-information-image-container");
  moviesInformationImg.src = "./assets/img/1.jpg";
  moviesInformationImg.alt = 'movies-poster';
  moviesInformationDescriptionContainer.classList.add("movies-information-description");
  moviesInformationP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae dicta, esse quaerat maxime veritatis perspiciatis optio accusantium incidunt suscipit soluta consectetur accusamus quo ullam! Voluptatibus accusantium voluptatum voluptate id laboriosam unde, explicabo corporis quae ratione quam itaque, ipsum praesentium recusandae dolores in autem nesciunt? Eligendi doloremque sit maiores cupiditate!";
  moviesInformationScenesContainer.classList.add("movies-information-scenes");
  moviesInformationScenesImg.classList.add("movies-information-scenes-img");
  moviesInformationScenesImg.src = "./assets/img/3.jpg";
  moviesInformationScenesImg.alt = 'movies-scenes'

  // append
  moviesInformationSection.appendChild(moviesInformationContainer);
  moviesInformationContainer.appendChild(moviesInformationImgContainer);
  moviesInformationImgContainer.appendChild(moviesInformationImg);
  moviesInformationContainer.appendChild(moviesInformationDescriptionContainer);
  moviesInformationDescriptionContainer.appendChild(moviesInformationP);
  moviesInformationContainer.appendChild(moviesInformationScenesContainer);
  moviesInformationScenesContainer.appendChild(moviesInformationScenesImg);

  // return
  return moviesInformationSection
}