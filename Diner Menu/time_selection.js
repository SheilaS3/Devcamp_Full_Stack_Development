import moment from 'moment'; 

// 1- Ask customerS to select the time:

export let timeSelection = prompt("Please, select the time:", "Valid time range: from 9 to 23");
export const choosenTime = timeSelection.trim();

export const checkedTime = moment(choosenTime, 'H', true).isValid()

