const R = require('ramda')
const changeCase = require('change-case')

const convertFieldName = R.pipe(
  R.prop('name'),
  changeCase.camel
)

module.exports = convertFieldName
