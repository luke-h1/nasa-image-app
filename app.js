const submitBtn = document.getElementById('btn');
const inputValue = document.getElementById('nasaSearch');
const imageResult = document.getElementById('images');
submitBtn.addEventListener('click', getData);

async function getData(e, searchTerm) {
    try {
        e.preventDefault();
        const searchTerm = inputValue.value;
        const API_URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${searchTerm}
      `;
        // const API_URL = `https://images-api.nasa.gov/search?q=${searchTerm}`;
        await fetch(`${API_URL}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                // const arr = res;
                let output = ` 
                <div class="container"> 
                <div class="wrapper"> 
                <div class="row ">
                <div class="col s10 m5">
                  <div class="card">
                    <div class="card-image">
                      <img src="${res.url}">
                      <span class="card-title">${res.title}</span>
                    </div>
                    <div class="card-content">
                      <p style="font-size:20px;">${res.explanation}</p>
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
    }catch(e){
      console.log('error')
    }
}

//                 // console.log(arr);
//                 for (const [date, explanation, url] in arr) {
//                     let output = `
//                     <div class="wrapper">
//                         <div class="row ">
//                         <div class="col s10 m5">
//                           <div class="card">
//                             <div class="card-image">
//                               <img src="${arr.url}">
//                               <span class="card-title">${arr.title}</span>
//                             </div>
//                             <div class="card-content">
//                               <p>${arr.explanation}</p>
//                             </div>
//                             <div class="card-action">
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                    </div>
//             `;
//                     imageResult.innerHTML = output;
//                 }
//             });
//     } catch (e) {
//         console.log('error occured');
//     }
// }
