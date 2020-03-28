const knex = require('knex');
const configuration = require('../../knexfile');

const env =
	process.env.NODE_ENV === 'test'
		? configuration.test
		: configuration.development;

const connection = knex(configuration.development);

module.exports = connection;
