/**
 * @title: Reduce Array into Single Object
 */

let products = [
	{ name: 'Javascript Cookbook', price: 350 },
	{ name: 'Head First Python', price: 200 },
	{ name: 'Head First Java', price: 400 },
	{ name: 'Javascript Cookbook', price: 350 },
	{ name: 'Head First Java', price: 400 },
	{ name: 'Javascript Cookbook', price: 350 },
	{ name: 'Javascript Cookbook', price: 350 },
	{ name: 'Head First C', price: 300 },
];

const invoice = products.reduce((acc, cur) => {
	if (acc[cur.name]) {
		acc[cur.name].quantity++;
		acc[cur.name].price += cur.price;
	} else {
		acc[cur.name] = {
			price: cur.price,
			quantity: 1,
		};
	}
	return acc;
}, {});
console.log(invoice);

// {
//   'Javascript Cookbook': { price: 1400, quantity: 4 },
//   'Head First Python': { price: 200, quantity: 1 },
//   'Head First Java': { price: 800, quantity: 2 }
// }
