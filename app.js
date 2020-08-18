const submitBtn = document.getElementById('btn'); 
const inputValue = document.getElementById('nasaSearch'); 
const imageResult = document.getElementById('images'); 
submitBtn.addEventListener('click', getData); 



async function getData(e, searchTerm){ 
  try {   
      e.preventDefault();
      const searchTerm = inputValue.value;   
      const API_URL  = `https://api.nasa.gov/planetary/apod?api_key=GLHzhZqyb81Q01i0foEhOCpekFuluhEjne23uu3O
      `; 
      // const API_URL = `https://images-api.nasa.gov/search?q=${searchTerm}`; 
      await fetch((`${API_URL}`)) 
        .then((res) => res.json()) 
        .then((res) => { 
          console.log(res); 
          const arr = res; 
          console.log(arr) 
          for (const [date, explanation, hdurl] in arr) {
            let output = `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${arr.hdurl}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${arr.title}</h5>
              <p class="card-text">${arr.explanation}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            
            
            
            
            
            `; 
            imageResult.innerHTML = output;
          } 
          for (const explanation in arr){

          }
          });
  }catch(e){


  }

} 