const R = require('ramda')

const convertTable = require('./schema/convertTable')

const convertSchema = schema =>
  R.pipe(
    R.mapObjIndexed(table => convertTable(table, schema)),
    R.values
  )(schema)

module.exports = convertSchema
