const R = require('ramda')

const { AIRTABLE_FIELD_TYPES } = require('../../constants')
const convertFieldName = require('../schema/convertFieldName')

const convertTableData = (tableData, tableSchema) => {
  const fieldNames = R.pipe(
    R.propOr([], 'columns'),
    R.map(R.prop('name'))
  )(tableSchema)

  return R.map(recordData => {
    return R.reduce(
      (result, fieldName) => {
        const fieldSchema = R.pipe(
          R.prop('columns'),
          R.find(R.propEq('name', fieldName))
        )(tableSchema)

        const type = R.prop('type', fieldSchema)

        let nextRecordData = recordData[fieldName] || null

        switch (type) {
          case AIRTABLE_FIELD_TYPES.MULTIPLE_ATTACHMENT: {
            if (Array.isArray(nextRecordData)) {
              nextRecordData = R.map(
                value => ({
                  url: value.url,
                  filename: value.filename,
                  public: true,
                }),
                nextRecordData
              )
            }

            break
          }

          case AIRTABLE_FIELD_TYPES.FOREIGN_KEY: {
            if (Array.isArray(nextRecordData)) {
              nextRecordData = R.map(value => ({ $id: value }), nextRecordData)
            }

            break
          }

          case AIRTABLE_FIELD_TYPES.MULTI_SELECT: {
            if (Array.isArray(nextRecordData)) {
              nextRecordData = R.map(value => value, nextRecordData)
            }

            break
          }
        }

        return {
          ...result,
          [convertFieldName(fieldSchema)]: nextRecordData,
        }
      },
      {
        $id: recordData.id,
      },
      fieldNames
    )
  }, tableData)
}

module.exports = convertTableData
