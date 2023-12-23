let img = document.getElementById("poster");
let name_film = document.getElementById("name-film");
let date = document.getElementById("date-film");
let test = document.getElementById("test");

function test11(){
    
}


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjczZTg0NDk3NDQzODBjY2RkNTBlMGJiOTZlZjZlYyIsInN1YiI6IjY1NzNkZTdmY2FkYjZiMDBjNjhjZDA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kb1M5ZtK3AFYRLz2jD_IALZ4lLhfV6hih4qnyN3Ujo'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1&region=VNM', options)
    .then(response => response.json())
    .then(response => {
    let productData ="";
for (let index in response.results) {
    productData += `
    <div class="film-item">
    <img id="poster" src="http://image.tmdb.org/t/p/w220_and_h330_face${response.results[index].poster_path}" alt="" />
    <h4 id="name-film">${response.results[index].title}</h4>
    <h5 id="date-film">${response.results[index].release_date}
   </h5>
</div>`
console.log(response.results[index].title)
    
}
document.getElementsByClassName("container")[0].innerHTML = productData;

        
    })
    .catch(err => console.error(err));
    // .catch(err => console.error(err));


//     inputSearch.onchange = function(event){
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`)
//         .then((res) => {
//             return res.json();    
//         })
//         .then((data) => {
//             console.log(data);
//             cityName.textContent = data.name;
//             temperature.textContent = `${data.main.temp} C`;
//             weatherState.textContent = data.weather[0].description;
//             weatherIcon.innerHTML = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//             humid.textContent = data.main.humidity;
//             wind.textContent = data.wind.speed;
//             sunrise.textContent = data.sys.sunrise;
//             sunset.textContent = data.sys.sunset;
//         });
    
//     }

   test.addEventListener("click", test11);