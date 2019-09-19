const { Model } = require('objection');

class Products extends Model {

	static get tableName() {
		return 'products';
	}

	getData() {
		return [this.name, this.decription, this.price, this.category].join(' ');
	}
}

module.exports = Products;