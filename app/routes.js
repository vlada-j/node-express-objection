const router = require('express').Router();
const Products = require('../models/Products');
const { transaction } = require('objection');

module.exports = router;


/* *********************************************************************************************** *
 * Get all user
 * *********************************************************************************************** */
router.get('/', function (req, res) {
		// Product.query()
		// .skipUndefined()
		// .where('age', '>=', req.query.minAge)
		// .where('age', '<', req.query.maxAge)
		// .where('firstName', 'like', req.query.firstName)
		// .orderBy('firstName');

	return Products.query().then( result => res.status(200).send( result ) );
});



/* *********************************************************************************************** *
 * Create new item
 * *********************************************************************************************** */
router.get('/new', function (req, res) {
	let params = req.body;
console.log(JSON.stringify(req.query));
	return transaction(Products.knex(), trx => Products.query(trx).insert(req.query)
		.then( result => res.status(200).send( result ) ) );
	/*req.body.type ? params.type = parseInt(req.body.type) : undefined;
	req.body.quality ? params.quality = parseInt(req.body.quality) : undefined;
	req.body.duration ? params.duration = parseInt(req.body.duration) : undefined;
	return clientResponse(res, itemsController.createNewItem(params) );*/
});