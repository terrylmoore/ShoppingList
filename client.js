$(function() {

// Step 1
// This code is executed when someone clicks the "Add Item" button 
// at the top right of the shopping-item
// -------------------
	$(".add-item").on('click', function(event) {
		  event.preventDefault();
      var listItem = $('.item-input').val();
		  console.log(listItem);
      var itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
      // Add the itemHtml section we created for you above to the shopping-list
      $(".shopping-list").prepend(itemHtml);
      // Remove the text the user entered from item-input
      $(".item-input").val("");
	});
// -------------------


// Step 2
// -------------------
// This code is executed when someone clicks the "X" button
// at the top right of the shopping-item
	$(".shopping-list").on('click', '.item-remove', function(event) {
    $(event.currentTarget).parent().remove();  
    // Use event.currentTarget to remove the shopping item from the shopping list
	});
// -------------------
  
// Step 3
// This code is executed when someone clicks the checkbox in the shopping-item section
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
    $(event.currentTarget).toggleClass('complete');
   // Use event.currentTarget to add and remove the "complete" class to the checkbox
	});
// -------------------

//Additional Challenges
//If you add an item with no text, it adds a blank box. This is a bug! Fix it.
//Add a counter that tells the user how many items are in your shopping list
  
});