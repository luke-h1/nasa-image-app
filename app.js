const submitBtn = document.getElementById('btn'); 
const inputValue = document.getElementById('nasaSearch'); 
const imageResult = document.getElementById('images'); 
submitBtn.addEventListener('click', getData); 



async function getData(e, searchTerm){ 
  try {   
      e.preventDefault();
      const searchTerm = inputValue.value;   
      const API_URL  = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
      // const API_URL = `https://images-api.nasa.gov/search?q=${searchTerm}`; 
      await fetch((`${API_URL}`)) 
        .then((res) => res.json()) 
        .then((res) => { 
          console.log(res);
          let img = document.createElement('img');
        })

      } catch (e) {
    console.log(e); 
  }
} 


