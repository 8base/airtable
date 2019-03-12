# Utils for export schema/data from Airtable to 8base

## Usage

```
  AIRTABLE_EMAIL=<EMAIL> AIRTABLE_PASSWORD=<PASSWORD> AIRTABLE_BASE_ID=<BASE_ID> AIRTABLE_API_KEY=<API_KEY> bin/export.js ./WORKSPACE.json
  8base import -f=./WORKSPACE.json
```