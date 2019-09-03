/*

JSON Practice
-------------

JSON can be parsed and turned into a plain old JS object.
This makes it much easier to read from and write to.

Check out the shop JS object and run the tests.

Complete methods below, one by one.

TEST: npm test

*/

const drinkShop = {
	title: "My Fancy Drink Shop",
	products: [
		{
			id: 1,
			title: "Coca Cola",
			price: 4.32
		},
		{
			id: 2,
			title: "Fanta",
			price: 4.22
		},
		{
			id: 3,
			title: "Lift",
			price: 4.11
		}
	],
	customers: {
		"jane@doe.com": {
			firstName: "John",
			lastName: "Doe",
			address: {
				streetNumber: 12,
				street: "Main St",
				city: "Brisbane",
				postcode: 4000
			},
			orders: [
				{
					id: 61721,
					status: "delivered",
					items: [
						{
							productId: 1,
							qty: 2
						},
						{
							productId: 3,
							qty: 1
						},
						{
							productId: 2,
							qty: 3
						}
					],
					notes: "Please leave on doorstep"
				},
				{
					id: 82721,
					status: "delivered",
					items: [
						{
							productId: 4,
							qty: 100
						}
					],
					notes: "Really enjoying coke ATM"
				}
			]
		}
	}
}
const shop = {
	shopTitle: () => {
		return drinkShop.title;
	},

	upperCase: string => {
		return string.toUpperCase();
	},

	upperCaseShopTitle: () => {
		return shop.upperCase(shop.shopTitle());
	},

	productById: productId => {
		for (product of drinkShop.products) {
			if (product.id === productId) {
				return product;
			}
		}
		return null;
	},

	productCost: productId => {
		return shop.productById(productId).price;
	},

	formatAddress: email => {
		// let add = drinkShop.customers[email].address;
		 // return `${add.streetNumber} ${add.street}, ${add.city}, ${add.postcode}`
		let customer = drinkShop.customers[email];
		if (customer) {
			let {
				streetNumber,
				street,
				city,
				postcode
			} = drinkShop.customers[email].address;
			return `${streetNumber} ${street}, ${city}, ${postcode}`
		} else {
			return null;
		}
	},

	customerOrderById: (email, orderId) => {
		let customer = drinkShop.customers[email];
		let orders = customer ? customer.orders : [];
		for (let order of orders) {
			if (order.id === orderId) {
				return order;
			}
		}
		return null;
	},

	totalCost: (email, orderId) => {
		let order = shop.customerOrderById(email, orderId);
		if (order == null) {
			return 0;
		}
		let items = order.items;
		let total = 0;
		for (let item of items) {
			total += shop.productCost(item.productId) * item.qty;
		}
		return total;
	},

	addProduct: (id, title, price) => {
		drinkShop.products.push({id: id, title: title, price: price})
		return true;
	},

	updateProductPrice: (id, newPrice) => {
		for (product of drinkShop.products) {
			if (product.id == id) {
				product.price = newPrice;
			}
		}
		return true;
	}
}

module.exports = shop
