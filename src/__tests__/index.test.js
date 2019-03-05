const { convertSchema } = require('../')
const { AIRTABLE_SCHEMA } = require('../__fixtures__')

it('As a developer, I can convert Airtable schema to the 8base schema.', () => {
  expect(convertSchema(AIRTABLE_SCHEMA)).toMatchSnapshot()
})
