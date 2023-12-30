let prev_btn = document.getElementById("prev-btn");
let firstPage = document.getElementById("first");
let secondPage = document.getElementById("second");
let thirdPage = document.getElementById("third");
let fourPage = document.getElementById("four");
let fivePage = document.getElementById("five");
let next_btn = document.getElementById("next");

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjczZTg0NDk3NDQzODBjY2RkNTBlMGJiOTZlZjZlYyIsInN1YiI6IjY1NzNkZTdmY2FkYjZiMDBjNjhjZDA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kb1M5ZtK3AFYRLz2jD_IALZ4lLhfV6hih4qnyN3Ujo'
  }
};

let currentPage = 1;

function fetchPage(page) {
  fetch(`https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=${page}&region=VNM`, options)
    .then(response => response.json())
    .then(response => {
      let productData = "";
      for (let index in response.results) {
        productData += `
          <div class="film-item">
            <img id="poster" src="http://image.tmdb.org/t/p/w220_and_h330_face${response.results[index].poster_path}" alt="" />
            <h4 id="name-film">${response.results[index].title}</h4>
            <h5 id="date-film">${response.results[index].release_date}</h5>
          </div>`;
      }
      document.getElementsByClassName("container")[0].innerHTML = productData;
    })
    .catch(err => console.error(err));
}

function pageButtonClicked(event) {
  const buttonValue = parseInt(event.target.innerText);
  if (!isNaN(buttonValue)) {
    currentPage = buttonValue;
    fetchPage(currentPage);
  }
}

let pageBTN = document.getElementsByClassName("page-btn");
console.log(pageBTN)

function btnclick() {
  // for (let index in pageBTN) {
  // console.log(index)
    // pageBTN[index].addEventListener("click", function (event) {
    //   pageButtonClicked(event);

    // });
  // }

  Array.from(pageBTN).forEach(function (item, index) {
    console.log(item, index)
    // item.classList.remove("inactive");
    item.addEventListener("click", function (event) {
      pageButtonClicked(event);
      item.classList.add("active");
    });
  })
}


btnclick();
fetchPage(currentPage);









