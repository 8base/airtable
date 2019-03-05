const R = require('ramda')

const { AIRTABLE_FIELD_TYPES } = require('../../constants')
const convertFieldDisplayName = require('./convertFieldDisplayName')
const convertFieldIsList = require('./convertFieldIsList')
const convertFieldName = require('./convertFieldName')
const convertTableId = require('./convertTableId')
const convertTableName = require('./convertTableName')

const convertFieldRelation = (column, schema) => {
  const type = R.prop('type', column)

  let relation = null

  if (type === AIRTABLE_FIELD_TYPES.FOREIGN_KEY) {
    const foreignTableId = R.path(['typeOptions', 'foreignTableId'], column)
    const foreignTable = R.prop(foreignTableId, schema)

    if (!foreignTable) {
      return null
    }

    const symmetricColumnId = R.path(
      ['typeOptions', 'symmetricColumnId'],
      column
    )

    if (symmetricColumnId) {
      const symmetricColumn = R.find(
        R.propEq('id', symmetricColumnId),
        R.prop('columns', foreignTable)
      )

      relation = {
        refFieldDisplayName: convertFieldDisplayName(symmetricColumn),
        refFieldIsList: convertFieldIsList(symmetricColumn),
        refFieldIsRequired: false,
        refFieldName: convertFieldName(symmetricColumn),
        refTableId: foreignTableId,
        refTable: {
          id: convertTableId(foreignTable),
          name: convertTableName(foreignTable),
        },
      }
    } else {
      relation = {
        refFieldDisplayName: `${convertFieldDisplayName(column)} (Self)`,
        refFieldIsList: true,
        refFieldIsRequired: false,
        refFieldName: `${convertFieldName(column)}Self`,
        refTableId: foreignTableId,
        refTable: {
          id: convertTableId(foreignTable),
          name: convertTableName(foreignTable),
        },
      }
    }
  }

  return relation
}

module.exports = convertFieldRelation
