function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.addEventListener('click', closeNavOutside);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.removeEventListener('click', closeNavOutside);
}

function closeNavOutside(event) {
  const mySidenav = document.getElementById("mySidenav");
  const hamburgerContainer = document.querySelector(".hamburger-container");
  if (!mySidenav.contains(event.target) && !hamburgerContainer.contains(event.target)) {
      closeNav();
  }
}

function myFunction(x) {
  x.classList.toggle("change");
}

