const R = require('ramda')

const convertFieldId = require('./convertFieldId')
const convertFieldName = require('./convertFieldName')
const convertFieldDisplayName = require('./convertFieldDisplayName')
const convertFieldType = require('./convertFieldType')
const convertFieldTypeAttributes = require('./convertFieldTypeAttributes')
const convertFieldRelation = require('./convertFieldRelation')
const convertFieldIsList = require('./convertFieldIsList')

const convertTableFields = (table, schema) =>
  R.pipe(
    R.prop('columns'),
    R.map(column => ({
      id: convertFieldId(column),
      name: convertFieldName(column),
      displayName: convertFieldDisplayName(column),
      fieldType: convertFieldType(column),
      fieldTypeAttributes: convertFieldTypeAttributes(column),
      relation: convertFieldRelation(column, schema),
      isList: convertFieldIsList(column),
      isRequired: false,
      defaultValue: null,
      isUnique: null,
    }))
  )(table)

module.exports = convertTableFields
