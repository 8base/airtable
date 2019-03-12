const Airtable = require('airtable')
const R = require('ramda')

const exportData = async ({ schema, apiKey, baseId }) => {
  const client = new Airtable({ apiKey }).base(baseId)

  let data = await Promise.all(
    Object.values(schema).map(table => exportTableData(table, client))
  )

  return Object.values(schema).reduce(
    (result, { name }, index) => ({
      ...result,
      [name]: data[index],
    }),
    {}
  )
}

const exportTableData = (table, client) =>
  new Promise(resolve => {
    let data = []

    client(table.name)
      .select({
        maxRecords: 1500,
        view: table.defaultView.name,
      })
      .eachPage(
        (records, fetchNextPage) => {
          data = [
            ...data,
            ...records.map(record => ({
              id: record.id,
              ...R.prop('fields', record),
            })),
          ]

          fetchNextPage()
        },
        err => {
          if (err) {
            console.error(err)
            return
          }

          resolve(data)
        }
      )
  })

module.exports = exportData;
