//DOM ELEMENTS//
const photoCardElem = document.getElementById("photo-card")

 
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then((resp) => {
    const photos = resp.data; 
    
  })
photos.forEach((photo)=>{
  photoCardElem.innerHTML += `
  <section id="photo-card" class=" container row gap-30 ">
            <div class="col">
                <div class="photos">
                    <div  class="thumbtack">
                        <img src="./assets_day1/img/pin.svg" alt="">
                    </div>
                    <div class="photos-img">
                        <div class="img-place-holder">
                            <img src="" alt="">
                        </div>
                    </div>
                     <div class="description">
                            <h3>${photos.title}</h3>
                        </div>
                </div>
            </div>
        </section>
  
  `
})