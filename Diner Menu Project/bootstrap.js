// IMPORTS:
import moment from 'moment'; 
import { reduce } from 'lodash'; 

// MENU OPTIONS:

// Breakfast from 9h to 12h:

const breakfastMenu = [
    {
        product: "Cereal bowl",
        price: 4.50
    },
    {
        product: "Waffles",
        price: 5.50
    },
    {
        product: "Pankakes",
        price: 5.00
    },
    {
        product: "Avocado toast",
        price: 5.50
    }    
]

const breakfastSidesMenu = [
    {
        product: "Chocolate syrup",
        price: 1.50
    },
    {
        product: "Bacon",
        price: 3.50
    },
    {
        product: "Eggs",
        price: 3.00
    },
    {
        product: "Cottage cheese",
        price: 2.50
    }
]

const breakfastDrinksMenu = [
    {
        product: "Milk",
        price: 1.50
    },
    {
        product: "Cafe",
        price: 2.50
    },
    {
        product: "Hot chocolate",
        price: 2.50
    },
    {
        product: "Tea",
        price: 2.00
    }
]

// Lunch from 13h to 15h:

const lunchMenu = [
    {
        product: "The Burger",
        price: 11.50
    },
    {
        product: "Carbonara pasta",
        price: 15.50
    },
    {
        product: "Grilled steak",
        price: 17.50
    },
    {
        product: "Norwegian salmon",
        price: 21.50
    }    
]

const lunchSidesMenu = [
    {
        product: "Fries",
        price: 4.50
    },
    {
        product: "Mushrooms",
        price: 5.50
    },
    {
        product: "Mac and cheese",
        price: 4.50
    },
    {
        product: "Salad",
        price: 4.50
    }
]

const lunchDessertMenu = [
    {
        product: "Chocolate cake",
        price: 4.50
    },
    {
        product: "Cheesecake",
        price: 5.50
    },
    {
        product: "Tiramisu",
        price: 4.50
    },
    {
        product: "Goxua",
        price: 4.50
    }
]

// Dinner from 20h to 23h:

const dinnerMenu = [
    {
        product: "The Burger",
        price: 13.50
    },
    {
        product: "Carbonara pasta",
        price: 17.50
    },
    {
        product: "Grilled steak",
        price: 19.50
    },
    {
        product: "Norwegian salmon",
        price: 23.50
    }    
]

const dinnerSidesMenu = [
    {
        product: "Fries",
        price: 5.50
    },
    {
        product: "Mushrooms",
        price: 6.50
    },
    {
        product: "Mac and cheese",
        price: 5.50
    },
    {
        product: "Salad",
        price: 5.50
    }
]

const dinnerDessertMenu = [
    {
        product: "Chocolate cake",
        price: 5.50
    },
    {
        product: "Cheesecake",
        price: 6.50
    },
    {
        product: "Tiramisu",
        price: 5.50
    },
    {
        product: "Goxua",
        price: 5.50
    }
]

// WAITRESS' COMMENTS:

// Waitress' coments on dish selection:
const commentList = [
    "Great option!",
    "You will love it!",
    "Incredible!",
    "My favorite one!",
    "Nice, I'm adding that to your order."
]

const waitressComment = () => {
    return commentList[Math.floor(Math.random() * commentList.length)];
}

// CORRECT MENU SELECTION:

// Storing the available menu to use it later:
const correctMainMenu = () => {
    if (choosenTime >= 9 && choosenTime <= 12) {
        return breakfastMenu;
    } else if (choosenTime >= 13 && choosenTime <= 15) {
        return lunchMenu;
    } else if (choosenTime >= 20 && choosenTime <= 23) {
        return dinnerMenu;
    } else {
        null;
    }
}

const correctSidesMenu = () => {
    if (choosenTime >= 9 && choosenTime <= 12) {
        return breakfastSidesMenu;
    } else if (choosenTime >= 13 && choosenTime <= 15) {
        return lunchSidesMenu;
    } else if (choosenTime >= 20 && choosenTime <= 23) {
        return dinnerSidesMenu;
    } else {
        null;
    }
}

const correctDessertMenu = () => {
    if (choosenTime >= 9 && choosenTime <= 12) {
        return breakfastDrinksMenu;
    } else if (choosenTime >= 13 && choosenTime <= 15) {
        return lunchDessertMenu;
    } else if (choosenTime >= 20 && choosenTime <= 23) {
        return dinnerDessertMenu;
    } else {
        null;
    }
}

const main = correctMainMenu();
const sides = correctSidesMenu();
const dessert = correctDessertMenu();

const mainMenuDishes = main.map(element => element.product.toLowerCase());
const sidesMenuDishes = sides.map(element => element.product.toLowerCase());
const dessertMenuDishes = dessert.map(element => element.product.toLowerCase());

// CUSTOMER'S SELECTION:

// Adding customer's selection in an array:
var customerSelection = []; // Object: [{product: 'Carbonara pasta', price: 15.5}, {product: "Fries", price: 4.50}, {product: "Goxua", price: .50}] 

// var customerSelection = [customerMainDish, customerSide, customerDessert];

// BOTTEGA DINNER APP:

// 1 - Ask customers to select the time:

let timeSelection = prompt("Please, select the time:", "Valid time range: from 9 to 23");
const choosenTime = timeSelection.trim();

const checkedTime = moment(choosenTime, 'H', true).isValid()

console.log(timeSelection)

// 2 - SHOWING MENU DEPENDING THE TIME:
const showingMenu = () => {

    if (choosenTime >= 9 && choosenTime <= 12) {
        console.log("Welcome to Bottega Diner. Here's our available menu at this moment:\n Breakfast Menu Main Items:\n");
        breakfastMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });
    
        console.log("Breakfast Menu Side Items:");
        breakfastSidesMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });

        console.log("Breakfast Drinks:");
        breakfastDrinksMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });
    } else if (choosenTime >= 13 && choosenTime <= 15) {
        console.log("Lunch Menu Main Items:");
        lunchMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });
    
       console.log("Lunch Menu Side Items:");
        lunchSidesMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });

        console.log("Lunch Menu Desserts:");
        lunchDessertMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });
    } else if (choosenTime >= 20 && choosenTime <= 23) {
        console.log("Dinner Menu Main Items:");
        dinnerMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });
    
        console.log("Dinner Menu Side Items:");
        dinnerSidesMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });

        console.log("Dinner Menu Desserts:");
        dinnerDessertMenu.forEach(function(item) {
            console.log(item.product + " => " + item.price);
        });
    } else {
        console.log("Sorry, we are closed right now. Please check for the next opening time.")
        console.log(timeSelection)
    }
}

// 3 - Validation if selected time is valid:
if(checkedTime === true) {
    alert(showingMenu());
} else {
    alert("Sorry, select a valid time.");
}

// Create a loop in case the format of selected time its no correct so it ask for the time again:
do {
    console.log(timeSelection)
} while (checkedTime === false);


// 4 - Ask customers to select the main dish from the menu:
let mainDish = prompt("Choose your main dish:", "Please, introduce your main dish selection");
const choosenMainDish = mainDish.toLowerCase().trim()

// 5 - Check if the selected dish is in the menu:
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

// 6 - Create a loop in case the selected dish isn't correct so it ask for it again:
while (mainMenuDishes.includes(choosenMainDish) === false) {
    prompt(mainDish); 
}

// 7 - Ask customers to select a side from the menu:
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

// 8 - Create a loop in case the selected side isn't correct so it ask for it again:
while (sidesMenuDishes.includes(choosenSide) === false) {
    prompt(selectedSide); 
}

// 9 - Ask customers to select a dessert/drink from the menu:
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

// 10 - Create a loop in case the selected dessert isn't correct so it ask for it again:
while (dessertMenuDishes.includes(choosenDessert) === false) {
    prompt(selectedDessert); 
}

// 11 - Caltulate the final cost:

export var totalPrice = _.reduce(customerSelection, function(total, currentPurchase) {
    return total + currentPurchase.price;
}, 0);

// 12 - Show clients total price:
console.log(`Total Price: ${totalPrice}`);