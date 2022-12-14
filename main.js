const menu = {
	_meal: "",
	_price: 0,
	set meal(mealToCheck) {
		if (typeof mealToCheck === "string") {
			this._meal = mealToCheck;
		} else {
			return "Meal error!";
		}
	},
	set price(priceToCheck) {
		if (typeof priceToCheck === "number") {
			this._price = priceToCheck;
		} else {
			return "Price error!";
		}
	},
	get todaysSpecial() {
		if (this._meal && this._price) {
			return `Today's special is a ${this._meal} for ${this._price}`;
		} else {
			return "Price or Meal not set correctly.";
		}
	},
};

menu.meal = "KFP Bucket";
menu.price = 499;
console.log(menu.todaysSpecial);
