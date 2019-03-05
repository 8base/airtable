const R = require('ramda')

const { AIRTABLE_FIELD_TYPES } = require('../../constants')

const convertFieldIsList = column =>
  R.path(['typeOptions', 'relationship'], column) === 'many' ||
  R.prop('type', column) === AIRTABLE_FIELD_TYPES.MULTIPLE_ATTACHMENT ||
  R.prop('type', column) === AIRTABLE_FIELD_TYPES.MULTI_SELECT

module.exports = convertFieldIsList
