const restaurants = [
    {
        name: "Melfi's",
        rating: 9.1,
        location: "Charleston | SC",
        bestDish: "Calamari"
    },
    {
        name: "Little Jack's",
        rating: 6.1,
        location: "Charleston | SC",
        bestDish: "Tavern Burger"
    },
    {
        name: "McDonalds",
        rating: 9.9,
        location: "Islip | NY",
        bestDish: "Everything"
    }
]

restaurants.sort((a, b) => b.rating - a.rating);
//console.log(restaurants);


// Get the HTML element where the restaurant list will be displayed
const restaurantList = document.getElementById("restaurant-list");

// Loop through each restaurant in the array and create an HTML element to represent it
restaurants.forEach(restaurant => {
  // Create a new list item element for the restaurant
  const restaurantItem = document.createElement("li");

  // Add the "restaurant" class to the list item element
  restaurantItem.classList.add("restaurant");

  // Create a new div element to display the name of the restaurant
  const name = document.createElement("div");
  name.classList.add("name");
  name.textContent = restaurant.name;
  restaurantItem.appendChild(name);

  // Create a new div element to display the location of the restaurant
  const location = document.createElement("div");
  location.classList.add("location");
  location.textContent = restaurant.location;
  restaurantItem.appendChild(location);

  // Create a new div element to display the rating of the restaurant
  const rating = document.createElement("div");
  rating.classList.add("rating");
  rating.textContent = `Rating: ${restaurant.rating}`;
  restaurantItem.appendChild(rating);

  // Create a new div element to display the best dish of the restaurant
  const bestDish = document.createElement("div");
  bestDish.classList.add("best-dish");
  bestDish.textContent = `Best Dish: ${restaurant.bestDish}`;
  restaurantItem.appendChild(bestDish);

  // Add a click event listener to the restaurant item that toggles the "show" class on the bestDish element
    restaurantItem.addEventListener("click", () => {
        restaurantItem.classList.toggle("expanded");
        restaurantItem.classList.toggle("show");
    });

  // Add the restaurant item to the HTML element that displays the restaurant list
  restaurantList.appendChild(restaurantItem);
});
