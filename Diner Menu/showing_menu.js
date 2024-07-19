import { breakfastMenu, breakfastSidesMenu, breakfastDrinksMenu, lunchMenu, lunchSidesMenu, lunchDessertMenu, dinnerMenu, dinnerSidesMenu, dinnerDessertMenu} from './menu_options';
import { correctMainMenu, correctSidesMenu, correctDessertMenu, mainMenuDishes, sidesMenuDishes, dessertMenuDishes, main, sides, dessert } from './correct_menu_selection';
import { timeSelection, choosenTime } from './time_selection';


export const showingMenu = () => {

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