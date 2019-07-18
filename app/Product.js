class Product {
	constructor(dataProvider, stock) {
		this.data = dataProvider.extract();
		this.stockObj = stock.update('something', 'id');
	}

	getName() {
		return this.data.name;
	}
}

module.exports = Product;