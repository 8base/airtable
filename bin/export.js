#!/usr/bin/env node

const fs = require('fs')

const {
  exportData,
  exportSchema,
  convertSchema,
  convertData,
} = require('../src')

const {
  AIRTABLE_EMAIL,
  AIRTABLE_PASSWORD,
  AIRTABLE_BASE_ID,
  AIRTABLE_API_KEY,
} = process.env

let outputFilePath = null

;[, , outputFilePath] = process.argv
;(async () => {
  const airtableSchema = await exportSchema({
    email: AIRTABLE_EMAIL,
    password: AIRTABLE_PASSWORD,
    baseId: AIRTABLE_BASE_ID,
  })

  const airtableData = await exportData({
    schema: airtableSchema,
    baseId: AIRTABLE_BASE_ID,
    apiKey: AIRTABLE_API_KEY,
  })

  const schema = convertSchema(airtableSchema)
  const data = convertData(airtableData, airtableSchema)

  fs.writeFileSync(
    outputFilePath,
    JSON.stringify({ data, tables: schema }, null, 2)
  )
})()
