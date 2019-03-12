const R = require('ramda')

const convertTableData = require('./data/convertTableData')
const convertTableName = require('./schema/convertTableName')

const convertData = (data, schema) => {
  const tableNames = R.keys(data)

  return R.reduce(
    (result, tableName) => {
      const tableSchema = R.pipe(
        R.values,
        R.find(R.propEq('name', tableName))
      )(schema)

      return {
        ...result,
        [convertTableName(tableSchema)]: convertTableData(
          data[tableName],
          tableSchema
        ),
      }
    },
    {},
    tableNames
  )
}

module.exports = convertData
