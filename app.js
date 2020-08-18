const submitBtn = document.getElementById('btn'); 
const inputValue = document.getElementById('nasaSearch'); 
const imageResult = document.getElementById('images'); 
submitBtn.addEventListener('click', getData); 



async function getData(e, searchTerm){ 
  try {   
      e.preventDefault();
      const searchTerm = inputValue.value;   
      const API_URL = `https://images-api.nasa.gov/search?q=${searchTerm}`; 
      await fetch((`${API_URL}`)) 
        .then((res) => res.json()) 
        .then((res) => console.log(res.collection.items[0]))   
      } catch (e) {
    console.log(e); 
  }
} 


