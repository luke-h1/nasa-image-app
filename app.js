const submitBtn = document.getElementById('btn');
const inputValue = document.getElementById('nasaSearch');
const imageResult = document.getElementById('images');
const loading = document.getElementById('loading');
submitBtn.addEventListener('click', getData);

async function getData(e, searchTerm) {
  try {
    e.preventDefault();
    const searchTerm = inputValue.value;
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${searchTerm}
      `;
    await fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // const arr = res;
        let output = ` 
                <div class="container"> 
                <div class="wrapper"> 
                <div class="row ">
                <div class="col s1 m1 center">
                  <div class="card col s12 m12 center">
                    <div class="card-image">
                      <img src="${
                        res.url == null ? res.hdurl : res.url
                      }" width="450" >
                      <span class="card-title">${res.title}</span>
                    </div>
                    <div class="card-content">
                      <p class="explanation">${res.explanation}</p>
                    </div>
                    <div class="card-action">
                    </div>
                  </div>
                </div>
              </div>
           </div>
           </div> 
                `;
        imageResult.innerHTML = output;
      });
  } catch (e) {
    console.log('error');
  }
}
