const Knex = require('knex')
const { Model } = require('objection')
const knexConfig = require('../knexfile')
const knex = Knex(knexConfig)
Model.knex(knex)

const models = require('./models')

module.exports = {
    Knex, knex, knexConfig,
    Model, models, 
}
