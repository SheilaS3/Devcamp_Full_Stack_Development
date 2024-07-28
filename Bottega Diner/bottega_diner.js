// MENU OPTIONS:

const menu = {
    breakfast: {
        name: "Breakfast Menu",
        time: {start: 900, end: 1200},
        main: [
            {product: "CEREAL BOWL", price: 4.50},
            {product: "WAFFLES", price: 5.50},
            {product: "PANKAKES", price: 5.00},
            {product: "AVOCADO TOAST", price: 5.50}
        ],
        side: [
            {product: "CHOCOLATE SYRUP", price: 1.50},
            {product: "BACON", price: 3.50},
            {product: "EGGS", price: 3.00},
            {product: "COTTAGE CHEESE", price: 2.50}
        ],
        drinks: [
            {product: "MILK", price: 1.50},
            {product: "COFFEE", price: 2.50},
            {product: "HOT CHOCOLATE", price: 3.00},
            {product: "TEA", price: 2.00}
        ]
    },
    lunch:{
        name: "Lunch Menu",
        time: {start: 1300, end: 1500},
        main: [
            {product: "BURGER", price: 11.50},
            {product: "CARBONARA PASTA", price: 15.50},
            {product: "GRILLED STEAK", price: 17.50},
            {product: "NORWEGIAN SALMON", price: 21.50}
        ],
        side: [
            {product: "FRIES", price: 4.50},
            {product: "MUSHROOMS", price: 5.50},
            {product: "MAC AND CHEESE", price: 4.50},
            {product: "SALAD", price: 4.50}
        ],
        drinks: [
            {product: "WATER", price: 2.50},
            {product: "ORANGE JUICE", price: 3.50},
            {product: "BEER", price: 4.50},
            {product: "WINE", price: 4.50}
        ]
    },
    dinner:{
        name: "Dinner Menu",
        time: {start: 2000, end: 2300},
        main: [
            {product: "BURGER", price: 13.50},
            {product: "CARBONARA PASTA", price: 17.50},
            {product: "GRILLED STEAK", price: 19.50},
            {product: "NORWEGIAN SALMON", price: 23.50}
        ],
        side: [
            {product: "FRIES", price: 5.50},
            {product: "MUSHROOMS", price: 6.50},
            {product: "MAC AND CHEESE", price: 5.50},
            {product: "SALAD", price: 5.50}
        ],
        drinks: [
            {product: "WATER", price: 3.50},
            {product: "ORANGE JUICE", price: 4.50},
            {product: "BEER", price: 5.50},
            {product: "WINE", price: 5.50}
        ]
    }
}

// CURTOMERS' SELECTION:

let customerSelection = [];

// SHOWING MENU:
  
const showingMenu = (menu) => {
    let showingMenuAlert = `${menu.name}\n\n`;
    showingMenuAlert += "Main dishes:\n";

    menu.main.forEach((item) => {
        showingMenuAlert += item.product + " - " + item.price.toFixed(2) + "€\n";
    });

    showingMenuAlert += "\nSide options:\n";

    menu.side.forEach((item) => {
        showingMenuAlert += item.product + " - " + item.price.toFixed(2) + "€\n";
    });

    showingMenuAlert += "\nDrinks:\n";

    menu.drinks.forEach((item) => {
        showingMenuAlert += item.product + " - " + item.price.toFixed(2) + "€\n";
    });

    alert(showingMenuAlert);
}

// WAITRESS' RANDOM COMMENTS:

const commentList = [
    "Great option!",
    "You will love it!",
    "Incredible!",
    "My favorite one!",
    "Nice, I'm adding that to your order."
]

const waitressRandomComment = (comment) => {
    return comment[Math.floor(Math.random() * comment.length)];
}

// ASKING CUSTOMERS TO INTRODUCE THE TIME:

var timeSelection = prompt("Welcome to Bottega Diner!\n\nOPENING TIME:\nBreakfast: 9:00 - 12:00 \nLunch: 13:00 - 15:00\nDinner: 20:00 - 23:00\n\nPlease, follow next format: HH:MM", "Please, select the time.");
const choosenTime = timeCheck(timeSelection.trim());

// CHECKING TIME, SHOWING MENU AND APP FUNCTIONING:

function timeCheck(timeHourMin) {
    const [hour, min] = timeHourMin.split(':').map(Number);
    const time = hour * 100 + min;

    if (time >= menu.breakfast.time.start && time < menu.breakfast.time.end) {
        showingMenu(menu.breakfast);
        choosenMainDish(menu.breakfast);
        choosenSideItem(menu.breakfast);
        choosenDrinkOption(menu.breakfast);
        totalPrice();
      
    } else if (time >= menu.lunch.time.start && time < menu.lunch.time.end) {
        showingMenu(menu.lunch);
        choosenMainDish(menu.lunch);
        choosenSideItem(menu.lunch);
        choosenDrinkOption(menu.lunch);
        totalPrice();
      
    } else if (time >= menu.dinner.time.start && time < menu.dinner.time.end) {
        showingMenu(menu.dinner);
        choosenMainDish(menu.dinner);
        choosenSideItem(menu.dinner);
        choosenDrinkOption(menu.dinner);
        totalPrice();
      
    } else {
        alert('Sorry, we are closed right now. Please check for the next opening time.');
        var timeSelection = prompt("Welcome to Bottega Diner!\n\nOPENING TIME:\nBreakfast: 9:00 - 12:00 \nLunch: 13:00 - 15:00\nDinner: 20:00 - 23:00.\n\nPlease, follow next format: HH:MM", "Please, select the time.");
        const choosenTime = timeCheck(timeSelection.trim());
    }
}

// FUNCTIONS FOR ASKING CUSTOMERS TO SELECT THEIR MENU:
  
function choosenMainDish(menu) {
    let main = null;

    while (!main) {
      let customerMainDish = prompt(`Please, introduce your main dish selection\n${menu.main.map(dish => `${dish.product} - ${dish.price.toFixed(2)}€`).join('\n')}`);
      const customerCorrectMainDish = customerMainDish.trim().toUpperCase();
      main = menu.main.find(dish => dish.product === customerCorrectMainDish);
      if (!main) {
        alert('Please, choose one of the main dishes available in our menu.');
      }
    }
    alert(`This is your selection: ${main.product} - ${main.price.toFixed(2)}€`);
    alert(waitressRandomComment(commentList));
    customerSelection.push(main);
    return main;
}
  
function choosenSideItem(menu) {
    let side = null;
    
    while (!side) {
      let customerSideItem = prompt(`Please, introduce your main dish selection\n${menu.side.map(dish => `${dish.product} - ${dish.price.toFixed(2)}€`).join('\n')}`);
      const customerCorrectSideItem = customerSideItem.trim().toUpperCase();
      side = menu.side.find(dish => dish.product === customerCorrectSideItem);
      if (!side) {
        alert('Please, choose one of the side items available in our menu.');
      }
    }
    alert(`This is your selection: ${side.product} - ${side.price.toFixed(2)}€`);
    alert(waitressRandomComment(commentList));
    customerSelection.push(side);
    return side;
}
  
function choosenDrinkOption(menu) {
    let drink = null;
    
    while (!drink) {
      let customerDrinkOption = prompt(`Please, introduce your drink selection\n${menu.drinks.map(dish => `${dish.product} - ${dish.price.toFixed(2)}€`).join('\n')}`);
      const customerCorrectSDrinkOption = customerDrinkOption.trim().toUpperCase();
      drink = menu.drinks.find(dish => dish.product === customerCorrectSDrinkOption);
      if (!drink) {
        alert('Please, choose one of the drinks available in our menu.');
      }
    }
    alert(`This is your selection: ${drink.product} - ${drink.price.toFixed(2)}€`);
    alert(waitressRandomComment(commentList));
    customerSelection.push(drink);
    return drink;
}
  
// SHOWING CUSTOMERS A SUMMARY OF THEIR ORDER AND THE FINAL PRICE:
  
function totalPrice() {
    let showingOrder = "Your order is:\n\n";

    const customerMain = customerSelection[0];
    const customerSide = customerSelection[1];
    const customerDrink = customerSelection[2];


    showingOrder += `Main Dish: ${customerMain.product} - ${customerMain.price.toFixed(2)}€\n`;
    showingOrder += `Side: ${customerSide.product} - ${customerSide.price.toFixed(2)}€\n`;
    showingOrder += `Drink: ${customerDrink.product} - ${customerDrink.price.toFixed(2)}€\n\n`;
  
    let totalCost = customerMain.price + customerSide.price + customerDrink.price;
  
    showingOrder += `Total: ${totalCost.toFixed(2)}€\n\n`;

    showingOrder += "Thanks for choosing Bottega Diner!"
    alert(showingOrder);
}
