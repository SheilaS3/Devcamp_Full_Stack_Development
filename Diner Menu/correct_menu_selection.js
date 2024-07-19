// Imports from menu_options:
import { breakfastMenu, breakfastSidesMenu, breakfastDrinksMenu, lunchMenu, lunchSidesMenu, lunchDessertMenu, dinnerMenu, dinnerSidesMenu, dinnerDessertMenu } from './menu_options';
import { choosenTime } from './time_selection';

// Storing the available menu to use it later:
export const correctMainMenu = () => {
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

export const correctSidesMenu = () => {
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

export const correctDessertMenu = () => {
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

export const main = correctMainMenu();
export const sides = correctSidesMenu();
export const dessert = correctDessertMenu();

export const mainMenuDishes = main.map(element => element.product.toLowerCase());
export const sidesMenuDishes = sides.map(element => element.product.toLowerCase());
export const dessertMenuDishes = dessert.map(element => element.product.toLowerCase());
