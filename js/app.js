//Date in footer
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
//back to top button show on scroll offset
const topBtn = document.querySelector(".top-link");

//Mobile Menu Toggle

const toggleBtn = document.querySelector(".nav-toggle");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const menu = document.querySelector(".mobile-menu");
const openBtnIcon = document.querySelector(".fa-bars");
const closeBtnIcon = document.querySelector(".fa-times");

toggleBtn.addEventListener("click", function () {
  const containerHeight = mobileMenuContainer.getBoundingClientRect().height;
  const linksHeight = menu.getBoundingClientRect().height;
  closeBtnIcon.classList.toggle("hide");
  openBtnIcon.classList.toggle("hide");

  if (containerHeight === 0) {
    mobileMenuContainer.style.height = `${linksHeight + 20}px`;
  } else {
    mobileMenuContainer.style.height = 0;
  }
});

//add value text to Search input
const searchInput = document.getElementById("bbp_search");
searchInput.value = "Search";
searchInput.addEventListener("click", function () {
  searchInput.value = "";
});
searchInput.addEventListener("focusout", function () {
  searchInput.value = "Search";
});

// Home page Forums accordion menu

//remove empty div and <br> generated by BBPress just to tidy things up and make the DOM selection cleaner

const emptyDiv = document.querySelectorAll(".bbp-forum-content");
emptyDiv.forEach(function (item) {
  item.remove();
});

//accordion show
const btn = document.querySelectorAll(".bbp-forum-title");
let i;

btn.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

//latest post column - add class to each of the latest post to style

const latestPost = document.querySelectorAll(".latest-posts-grid__col-1");
let postNum = 0;
latestPost.forEach(function (item) {
  postNum = postNum + 1;
  item.classList.add(`latest-post-item-${postNum}`);
});
