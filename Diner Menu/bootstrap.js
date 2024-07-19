// Imports from other modules:

import { timeSelection, choosenTime, checkedTime }  from './time_selection';

import { showingMenu }  from './showing_menu';

import { breakfastMenu, breakfastSidesMenu, lunchMenu, lunchSidesMenu, dinnerMenu, dinnerSidesMenu, saucesMenu } from './menu_options';

import { correctMainMenu, correctSidesMenu, correctDessertMenu, mainMenuDishes, sidesMenuDishes, dessertMenuDishes, main, sides, dessert } from './correct_menu_selection';

import { commentList, waitressComment } from './waitress_comments';

import { customerSelection } from './customer_selection';

import { totalPrice } from './total_cost';

// BOTTEGA DINER APP:
// 1- Ask customerS to select the time:
console.log(timeSelection)

// Validation if selected time is valid:
if(checkedTime === true) {
    alert(showingMenu());
} else {
    alert("Sorry, select a valid time.");
}

// Create a loop in case the format of selected time its no correct so it ask for the time again:
do {
    console.log(timeSelection)
} while (checkedTime === false);


// 2- Ask customerS to select the main dish from the menu:
let mainDish = prompt("Choose your main dish:", "Please, introduce your main dish selection");
const choosenMainDish = mainDish.toLowerCase().trim()

// Check if the selected dish is in the menu:
if (mainMenuDishes.includes(choosenMainDish)) {
    alert(waitressComment());         
   
    function findMainDish(dish) {
        return dish.product === choosenMainDish;  
    }

    const customerMainDish = main.find(findMainDish); // Object: {product: 'Carbonara pasta', price: 15.5}
    customerSelection.push(customerMainDish) // Create an array with client's choices

    alert(`That will cost you: ${customerMainDish.price}`)  // price ERROR

} else {
    alert("Please, choose one of the main dishes available in our menu.")
    
}

//Create a loop in case the selected dish isn't correct so it ask for it again:
while (mainMenuDishes.includes(choosenMainDish) === false) {
    prompt(mainDish); 
}

// Ask customers to select a side from the menu:
let selectedSide = prompt("Pick your first side item", "Introduce your side selection");
const choosenSide = selectedSide.toLowerCase().trim()

if (sidesMenuDishes.includes(choosenSide)) {  
    alert(waitressComment());         
   
    function findSideOne(sideSelected) {
        return sideSelected.product === choosenSide;  
    }

    const customerSide = sides.find(findSideOne);
    customerSelection.push(customerSide) 

    alert(`That will cost you: ${customerSide.price}`)  

} else {
    alert("Please, choose one of the main dishes available in our menu.")
}

//Create a loop in case the selected side isn't correct so it ask for it again:
while (sidesMenuDishes.includes(choosenSide) === false) {
    prompt(selectedSide); 
}

// Ask customers to select a dessert/drink from the menu:
let selectedDessert = prompt("Choose an option", "Introduce your side selection");
const choosenDessert = selectedDessert.toLowerCase().trim()

if (dessertMenuDishes.includes(choosenDessert)) {  
    alert(waitressComment());         
   
    function findDessert(dessertSelected) {
        return dessertSelected.product === choosenDessert;  
    }

    const customerDessert = dessert.find(findSideTwo);
    customerSelection.push(customerDessert) 

    alert(`That will cost you: ${customerDessert.price}`)  

} else {
    alert("Please, choose one of the main dishes available in our menu.") 
}

//Create a loop in case the selected dessert isn't correct so it ask for it again:
while (dessertMenuDishes.includes(choosenDessert) === false) {
    prompt(selectedDessert); 
}

// Show clients total price:
console.log(`Total Price: ${totalPrice}`);

