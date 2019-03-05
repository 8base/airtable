const R = require('ramda')
const {
  DATE_FORMATS,
  SWITCH_FORMATS,
  TEXT_FORMATS,
  NUMBER_FORMATS,
  FILE_FORMATS,
} = require('@8base/utils')

const { AIRTABLE_FIELD_TYPES } = require('../../constants')

const convertFieldTypeAttributes = column => {
  const type = R.prop('type', column)

  let fieldTypeAttributes = null

  switch (type) {
    case AIRTABLE_FIELD_TYPES.TEXT: {
      fieldTypeAttributes = {
        format: TEXT_FORMATS.UNFORMATTED,
        fieldSize: 256,
      }

      break
    }

    case AIRTABLE_FIELD_TYPES.MULTILINE_TEXT: {
      fieldTypeAttributes = {
        format: TEXT_FORMATS.UNFORMATTED,
        fieldSize: 65536,
      }

      break
    }

    case AIRTABLE_FIELD_TYPES.MULTIPLE_ATTACHMENT: {
      fieldTypeAttributes = {
        format: FILE_FORMATS.FILE,
      }

      break
    }

    case AIRTABLE_FIELD_TYPES.FOREIGN_KEY: {
      fieldTypeAttributes = null

      break
    }

    case AIRTABLE_FIELD_TYPES.MULTI_SELECT: {
      fieldTypeAttributes = {
        format: SWITCH_FORMATS.CUSTOM,
        listOptions: R.map(
          choiceId =>
            R.path(['typeOptions', 'choices', choiceId, 'name'], column),
          R.path(['typeOptions', 'choiceOrder'], column)
        ),
      }

      break
    }

    case AIRTABLE_FIELD_TYPES.DATE: {
      const isDateTime = R.path(['typeOptions', 'isDateTime'], column)

      fieldTypeAttributes = {
        format: isDateTime ? DATE_FORMATS.DATETIME : DATE_FORMATS.DATE,
      }

      break
    }

    case AIRTABLE_FIELD_TYPES.NUMBER: {
      fieldTypeAttributes = {
        format: NUMBER_FORMATS.NUMBER,
        precision: R.pathOr(0, ['typeOptions', 'precision'], column),
        currency: null,
        minValue: null,
        maxValue: null,
      }

      break
    }
  }

  return fieldTypeAttributes
}

module.exports = convertFieldTypeAttributes
