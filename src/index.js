// write your code here
//fetch request 
fetch('http://localhost:3000/ramens')
.then (resp => resp.json())
.then(data => renderRamen(data))

//variables
let ramenMenu = document.getElementById('ramen-menu')
let ramenImg = document.querySelector('img.detail-image')
console.log(ramenImg)
let ramenName = document.querySelector('h2.name')
console.log(ramenName)
let restaurantName = document.querySelector('h3.restaurant')
console.log(restaurantName)
let ramenRating = document.getElementById('rating-display')

let ramenComment = document.getElementById('comment-display')
let ramenForm = document.getElementById('new-ramen')

//fucntion
function renderRamen(data) {
    data.forEach(ramens => {
        let img = document.createElement('img')
        img.src = ramens.image
        ramenMenu.appendChild(img)

        img.addEventListener('click', () => {
            ramenImg.src = ramens.image
            ramenName.textContent = ramens.name
            restaurantName.textContent = ramens.restaurant 
            ramenRating.textContent = ramens.rating
            ramenComment.textContent = ramens.comment
        })

 

    })
}
ramenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ramenImg.src = e.target['new-image'].value
    ramenName.textContent = e.target['new-name'].value
    restaurantName.textContent= e.target['new-restaurant'].value
    ramenRating.textContent = e.target['new-rating'].value
    ramenComment.textContent = e.target['new-comment'].value
})