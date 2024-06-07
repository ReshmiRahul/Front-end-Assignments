//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var shoppingCart = [];
var total = 0;
while(total <= 35)
	{
		//GET ITEM COST FROM USER AND CONVERT USER INPUT TO A NUMBER
		var  itemPrice = parseInt(window.prompt (" Enter the dollar value of the item!"));
		//ADD ITEM COST TO RUNNING TOTAL VARIABLE
		var total = total + itemPrice;
		
		//PUSH ITEM COST TO CART ARRAY
		shoppingCart.push(itemPrice);
		var totalAmount = total;
	}

//SEND POPUP MESSAGE TO USER
window.alert("Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + shoppingCart.join(" | "));


window.alert("Total amount is :" + totalAmount );








