//store all cars globally for filtering
let allCars = []

//Define an asynchronous function to fetch car data from a json file
const fetchCarData = async () => {
    try {
            //fetch json file containing car data
    const response = await fetch("cars.json")

    const data = await response.json()

    // store the array of cars in the global variable "allCars" for future filtering
    allCars = data.cars

    //initially display all the cars when the page load
    displayCars(allCars)

    //Handle any error that occurs during refresh process
    }catch(error){

        console.error('Error fetching car data', error)
    }

}

//Define a function to display the car cards on the webpage
const displayCars = (cars) => {
    const carCard = document.getElementById('carContainer')

    // CLEAR ANY EXISTIN CONTENT INSIDE THE CAR CONTAINER
    carContainer.innerHTML = '';

    //loop through each car object in the cars array
    cars.forEach((car) => {

        //create a new div element for each car card
        const carCard = document.createElement('div')

        //add css class 'card' to the 'div' for styling purposes
        carCard.classList.add('card')

        //add html content to the car card, including an image, name and model of the car.

        carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name} ${car.model}" width="300">
        <h2>${car.name}</h2>
        <p>Model: ${car.model}</p>
         `

         //append the car card to the car container on the webpage
         carContainer.appendChild(carCard)
        
    })
}

window.onload = fetchCarData