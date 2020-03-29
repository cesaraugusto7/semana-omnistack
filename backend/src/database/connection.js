const knex= require('knex');
const configuration = require('../../knexfile');

// pegamos os dados de conecção de desenvolvimento
const connection= knex(configuration.development);

module.exports=connection;