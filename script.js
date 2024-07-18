console.log("Community Bookstore");

// Develop a JavaScript function applyDiscount
// that calculates the final price
// after applying a 10% discount on single purchases over £20.
//  This function should help increase
//  the average purchase value
//  by offering an immediate incentive.

window.onload = function () {
	// make the amount a two digit number
	//  apply the 20% discount only on purchases above £20
	//  and get the amount to be paid after discount
	function applyDiscount(purchaseAmount) {
		purchaseAmount = parseFloat(purchaseAmount).toFixed(2);

		if (purchaseAmount >= 20) {
			let discount = ((10 / 100) * purchaseAmount).toFixed(2);
			console.log(discount);
			let finalPrice = (purchaseAmount - discount).toFixed(2);
			console.log(finalPrice);

			return `Your bill amount is :  £ ${purchaseAmount} \nless Discount (10%) : £ ${discount}\nFinal Amount To pay : £ ${finalPrice}`;
		} else {
			return `Your bill amount is : £ ${purchaseAmount}`;
		}
	}

	let purchase1 = applyDiscount(15);
	console.log(purchase1);
	console.log("************");

	let purchase2 = applyDiscount(25);
	console.log(purchase2);

	console.log("************");

	// // MVP 2
	// Create a function calculateLoyaltyPoints
	// that awards points based on the purchase amount,
	// where every dollar spent earns 1 point if no discount is applied.
	// This function aims to build a foundation for a future loyalty program.

	console.log("♥ Loyalty Points");

	// function to calculate loyaly points
	// only if there is no discount applied.
	// so check for discount first.
	function calculateLoyaltyPoints(purchaseAmount) {
		let loyaltyPoints = 0;

		let isDiscountApplied = prompt(
			"Is discount applied? 'yes' or 'no' : "
		).toLowerCase();

		console.log(isDiscountApplied);
		if (isDiscountApplied === "no") {
			loyaltyPoints += purchaseAmount;
			return `You have earned ${loyaltyPoints} points ✨.`;
		} else if (isDiscountApplied === "yes") {
			loyaltyPoints = 0;
			return `No loyalty points applied`;
		} else {
			return ``;
		}
	}

	let purchase3 = calculateLoyaltyPoints(40);
	console.log(purchase3);
	console.log("************");

	let purchase4 = calculateLoyaltyPoints(50);
	console.log(purchase4);
	console.log("************");

	// Customer Change
	// BookNook need to make more money,
	// so the discounts function needs to change.
	// applyDiscount should now only apply the discount
	// to the overspend above £20.
	// Remember: Agile is all about embracing change

	// apply discount on only overspend on £20.
	// only apply the discount on amounts above the minimum £20.

	console.log("💸 discount to overspend");

	function applyDiscount20(amount) {
		amount = parseFloat(amount).toFixed(2);
		console.log(amount);
		let overspend = 20;

		if (amount > overspend) {
			let applyDiscountOnAmount = amount - overspend;

			let discount = ((10 / 100) * applyDiscountOnAmount).toFixed(2);
			console.log(discount);

			let finalBill = (amount - discount).toFixed(2);
			console.log(finalBill);

			return `Your bill amount is : £ ${amount}\nYour discount is £ ${discount}\nYou pay : £ ${finalBill}`;
		} else {
			return `Your bill amount is : £ parseFloat(${amount}`;
		}
	}

	let purchase5 = applyDiscount20(60);
	console.log(purchase5);

	console.log("**************");

	let purchase6 = applyDiscount20(18);
	console.log(purchase6);

	console.log("**************");

	let purchase7 = applyDiscount20(100);
	console.log(purchase7);
};
