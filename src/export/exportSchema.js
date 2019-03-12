const puppeteer = require('puppeteer')

const exportSchema = async ({ email, password, baseId }) => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.goto('https://airtable.com/login')

  const emailInput = await page.waitForSelector('[name="email"]')
  const passwordInput = await page.waitForSelector('[name="password"]')

  await emailInput.type(email)
  await passwordInput.type(password)

  const submitButton = await page.waitForSelector('input[type="submit"]')

  await submitButton.click()

  await page.waitFor(2000)

  await page.goto(`https://airtable.com/${baseId}/api/docs`)

  await page.waitFor(2000)

  const schema = await page.evaluate(() => {
    return _.mapValues(window.application.tablesById, table =>
      _.set(
        _.omit(table, ['sampleRows']),
        'columns',
        _.map(table.columns, item =>
          _.set(item, 'foreignTable', _.get(item, 'foreignTable.id'))
        )
      )
    )
  })

  await browser.close()

  return schema
}

module.exports = exportSchema
