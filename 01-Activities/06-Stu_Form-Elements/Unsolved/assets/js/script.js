// console.log('1');
const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures 
// the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`


// function
        
// const shopItem = $('#shopping-input');

function handleFormSubmit(event) {
    // console.log('entering handle form submit');
    // prevent page from refreshing
    event.preventDefault();


    // grab value of input call shopping-input
    const shopInput = $('input[name="shopping-input"]');
    const itemToBuy = shopInput.val();
    if(itemToBuy) {
        // create list item
        const listItemEl = $('<li>');

        // add the text from shopping-input to li element
        listItemEl.text(shopInput.val());
        
        // append it to the ul called #shopping-list
        shoppingListEl.append(listItemEl);
    }

}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
// use 'on' method
shoppingFormEl.on('click', handleFormSubmit);

// gryxa266qw