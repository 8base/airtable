const { convertSchema, convertData } = require('../')
const { AIRTABLE_SCHEMA, AIRTABLE_DATA } = require('../__fixtures__')

it('As a developer, I can convert Airtable schema to the 8base schema.', () => {
  expect(convertSchema(AIRTABLE_SCHEMA)).toMatchSnapshot()
})

it('As a developer, I can convert Airtable data to the 8base data.', () => {
  expect(convertData(AIRTABLE_DATA, AIRTABLE_SCHEMA)).toMatchSnapshot()
})
