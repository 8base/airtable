const R = require('ramda')

const { FIELD_TYPE_MAP } = require('../../constants')

const convertFieldType = column => FIELD_TYPE_MAP[R.prop('type', column)]

module.exports = convertFieldType
