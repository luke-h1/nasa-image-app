const submitBtn = document.getElementById('btn');
const inputValue = document.getElementById('nasaSearch');
const imageResult = document.getElementById('images');
submitBtn.addEventListener('click', getData);

async function getData(e, searchTerm) {
    try {
        e.preventDefault();
        const searchTerm = inputValue.value;
        const API_URL = `https://api.nasa.gov/planetary/apod?api_key=GLHzhZqyb81Q01i0foEhOCpekFuluhEjne23uu3O&date=${searchTerm}
      `;
        // const API_URL = `https://images-api.nasa.gov/search?q=${searchTerm}`;
        await fetch(`${API_URL}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                const arr = res;
                // console.log(arr);
                for (const [date, explanation, hdurl] in arr) {
                    let output = `
                    <div class="wrapper"> 
            <div class="row ">
            <div class="col s10 m5">
              <div class="card">
                <div class="card-image">
                  <img src="${arr.hdurl}">
                  <span class="card-title">${arr.title}</span>
                </div>
                <div class="card-content">
                  <p>${arr.explanation}</p>
                </div>
                <div class="card-action">
                </div>
              </div>
            </div>
          </div>
          </div>
            `;
                    imageResult.innerHTML = output;
                }
            });
    } catch (e) {
        console.log('error occured');
    }
}
