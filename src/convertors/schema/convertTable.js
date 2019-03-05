const convertTableId = require('./convertTableId')
const convertTableName = require('./convertTableName')
const convertTableDisplayName = require('./convertTableDisplayName')
const convertTableFields = require('./convertTableFields')

const convertTable = (table, schema) => ({
  id: convertTableId(table),
  name: convertTableName(table),
  displayName: convertTableDisplayName(table),
  fields: convertTableFields(table, schema),
})

module.exports = convertTable
