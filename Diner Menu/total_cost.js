import { reduce } from 'lodash'; 
import { customerSelection } from './customer_selection';

// Final Cost:

export var totalPrice = _.reduce(customerSelection, function(total, currentPurchase) {
    return total + currentPurchase.price;
}, 0);

