//DOM ELEMENTS//
const photoCardElem = document.getElementById("photo-card")
const overlayHiddenElem = document.getElementById("overlay-hidden")
const buttonCloseElem = document.querySelector(".btn-large")
//FUNCTION//
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then((resp) => {
    const photos = resp.data; 
    console.log(photos)
    photos.forEach((photo)=>{
      
      photoCardElem.innerHTML += `
      <section id="photo-card" class=" container row gap-30 ">
                <div class="col">
                    <div class="photos">
                        <div  class="thumbtack">
                            <img src="./assets_day1/img/pin.svg" alt="">
                        </div>
                        <div class="photos-img">
                            <div class="img-place-holder>
                                <img class="img-fluid"" src="${photo.url}" alt="">
                            </div>
                        </div>
                         <div class="description">
                                <h3>${photo.title}</h3>
                            </div>
                    </div>
                </div>
            </section>
      
      `
    })
    
    const photoClick= document.querySelectorAll("#photo-card section")
      photoClick.forEach((photosOverlay) => {
        photosOverlay.addEventListener("click", () =>{
            overlayHiddenElem.style.display= "block"
            photoClick.innerHTML += `
                 <div class="overlay"></div>
        <div class="place-holder-2">
            <img src="${photosOverlay.url} alt="">
        </div>
            `
        })
      })
      
  })

//EVENTS//
if (buttonCloseElem) {
    buttonCloseElem.addEventListener("click", function () {
      overlayHiddenElem.classList.add("overlay-hidden"); // Aggiunge la classe
      overlayHiddenElem.style.display = "none"; // Nasconde l'overlay
    });
  } 
