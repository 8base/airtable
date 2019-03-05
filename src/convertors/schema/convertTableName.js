const R = require('ramda')
const changeCase = require('change-case')

const convertTableName = R.pipe(
  R.prop('name'),
  changeCase.camel
)

module.exports = convertTableName
