const submitBtn = document.getElementById('btn'); 
const inputValue = document.getElementById('nasaSearch'); 
const imageDisplay = document.getElementById('images')

submitBtn.addEventListener('click', getData); 



async function getData(e, searchTerm){ 
  try {   
      e.preventDefault();
      const searchTerm = inputValue.value;   
      const API_URL = `https://images-api.nasa.gov/search?q=${searchTerm}`; 
      await fetch((`${API_URL}`)) 
        .then((res) => res.json()) 
        .then((res) => console.log(res))  
        addImagesToPage(images);   
  } catch (e) {
    console.log(e); 
  }
} 



