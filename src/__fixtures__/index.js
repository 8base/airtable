const AIRTABLE_SCHEMA = {
  tblwo8xeP7k63eosx: {
    id: 'tblwo8xeP7k63eosx',
    name: 'Initiatives & Organizations',
    columns: [
      {
        id: 'fld8CqSXrBC2TwqVp',
        name: 'Initiative Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldFcGOl9XjlojA1C',
        name: 'Description',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'flda30G0tIyE6TF02',
        name: 'Image',
        type: 'multipleAttachment',
        typeOptions: null,
      },
      {
        id: 'fldprKpRcNdQzOuYf',
        name: 'URL',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldSN17LxImuQcyhe',
        name: 'Key People',
        type: 'foreignKey',
        typeOptions: {
          relationship: 'many',
          foreignTableId: 'tblYvJ9X94Gq3OKju',
          symmetricColumnId: 'fld0t7ftaD4uG4jTK',
        },
        foreignTable: 'tblYvJ9X94Gq3OKju',
      },
      {
        id: 'fldoYYNG7cBLoNMRe',
        name: 'Service Categories',
        type: 'multiSelect',
        typeOptions: {
          disableColors: false,
          choices: {
            sel2glowhJdxkyLwH: {
              id: 'sel2glowhJdxkyLwH',
              name: 'Peer-to-Peer',
              color: 'blue',
            },
            selrY7LlKGJJWll5q: {
              id: 'selrY7LlKGJJWll5q',
              name: 'Data Collection',
              color: 'cyan',
            },
            selCFezYesigNWmSa: {
              id: 'selCFezYesigNWmSa',
              name: 'Debt Management',
              color: 'teal',
            },
            selGElhuhLBczWYPB: {
              id: 'selGElhuhLBczWYPB',
              name: 'Lending & Credit',
              color: 'green',
            },
            selvU2KNjADTfW98C: {
              id: 'selvU2KNjADTfW98C',
              name: 'Payments',
              color: 'yellow',
            },
            selp8sS4hY8qlDfEe: {
              id: 'selp8sS4hY8qlDfEe',
              name: 'Investment',
              color: 'orange',
            },
            selCRbjrDQkqEjOLB: {
              id: 'selCRbjrDQkqEjOLB',
              name: 'Determining Credit Worthiness',
              color: 'red',
            },
            selkdjo9mpDh2Mzpt: {
              id: 'selkdjo9mpDh2Mzpt',
              name: 'Deposits & Savings',
              color: 'pink',
            },
            selYrklAzFsdU6Nrh: {
              id: 'selYrklAzFsdU6Nrh',
              name: 'Financial Counseling & Education',
              color: 'purple',
            },
            selbLw0LmoHbOqpuP: {
              id: 'selbLw0LmoHbOqpuP',
              name: 'Wealth Management',
              color: 'gray',
            },
            selvRS6EMZuCLq9fx: {
              id: 'selvRS6EMZuCLq9fx',
              name: 'Microfinance',
              color: 'blue',
            },
            selYd9RH8pNP6oUhm: {
              id: 'selYd9RH8pNP6oUhm',
              name: 'Financial Reporting',
              color: 'cyan',
            },
            selZuw97T9UhYxlSL: {
              id: 'selZuw97T9UhYxlSL',
              name: 'Needs Assessment',
              color: 'teal',
            },
            selPZzKMYR8IaySWN: {
              id: 'selPZzKMYR8IaySWN',
              name: 'Lending and Credit',
              color: 'green',
            },
            selVbc1A35vL3bLMt: {
              id: 'selVbc1A35vL3bLMt',
              name: 'Money Transfers',
              color: 'yellow',
            },
            sel1NUaKbqYVSdnao: {
              id: 'sel1NUaKbqYVSdnao',
              name: 'Identity System',
              color: 'orange',
            },
            selWN7sOdxOaW33vQ: {
              id: 'selWN7sOdxOaW33vQ',
              name: 'Insurance',
              color: 'red',
            },
            selGCsJKYx4ToQQnk: {
              id: 'selGCsJKYx4ToQQnk',
              name: 'Budgeting',
              color: 'pink',
            },
          },
          choiceOrder: [
            'sel2glowhJdxkyLwH',
            'selrY7LlKGJJWll5q',
            'selCFezYesigNWmSa',
            'selGElhuhLBczWYPB',
            'selvU2KNjADTfW98C',
            'selp8sS4hY8qlDfEe',
            'selCRbjrDQkqEjOLB',
            'selkdjo9mpDh2Mzpt',
            'selYrklAzFsdU6Nrh',
            'selbLw0LmoHbOqpuP',
            'selvRS6EMZuCLq9fx',
            'selYd9RH8pNP6oUhm',
            'selZuw97T9UhYxlSL',
            'selPZzKMYR8IaySWN',
            'selVbc1A35vL3bLMt',
            'sel1NUaKbqYVSdnao',
            'selWN7sOdxOaW33vQ',
            'selGCsJKYx4ToQQnk',
          ],
        },
      },
      {
        id: 'fldzfxKazrHJgMJuo',
        name: 'Affiliated Initiatives & Organizations',
        type: 'foreignKey',
        typeOptions: {
          relationship: 'many',
          foreignTableId: 'tblwo8xeP7k63eosx',
        },
        foreignTable: 'tblwo8xeP7k63eosx',
      },
      {
        id: 'fldyZvzKp1B6k6LFj',
        name: 'Locations / Regions',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldU1sxKxpgsxK1ez',
        name: 'Documentation',
        type: 'foreignKey',
        typeOptions: {
          foreignTableId: 'tblLQvp37cl8wOUnj',
          symmetricColumnId: 'fld3aFyPbKeis3iNE',
          relationship: 'many',
        },
        foreignTable: 'tblLQvp37cl8wOUnj',
      },
      {
        id: 'fldgYEM8xP0hrwf2T',
        name: 'Objectives',
        type: 'foreignKey',
        typeOptions: {
          relationship: 'many',
          foreignTableId: 'tbllsjYlfEMlFvAoZ',
          symmetricColumnId: 'fldglL4BYRojobX93',
        },
        foreignTable: 'tbllsjYlfEMlFvAoZ',
      },
      {
        id: 'fldzyHIpl9w64LncQ',
        name: 'Tech Types',
        type: 'foreignKey',
        typeOptions: {
          relationship: 'many',
          foreignTableId: 'tblKhLxd8Q7hTEzpJ',
          symmetricColumnId: 'fld67BTyjLbaZy0zO',
        },
        foreignTable: 'tblKhLxd8Q7hTEzpJ',
      },
      {
        id: 'fldRa3j4na4H2mXVp',
        name: 'Twitter',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldeVuhkyNxZhNgHM',
        name: 'Blog / Updates / RSS',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldAiuKOnzWlMBCKA',
        name: 'Key Partners & Sponsors',
        type: 'foreignKey',
        typeOptions: {
          relationship: 'many',
          foreignTableId: 'tbl7iuSfoHTVTf4Oo',
          symmetricColumnId: 'fldjvycf7zu25RQxv',
        },
        foreignTable: 'tbl7iuSfoHTVTf4Oo',
      },
      {
        id: 'fld1DFB8pVcITjnbB',
        name: 'Beneficiaries',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fld5a32LaQzMhIRyi',
        name: 'Global Goals',
        type: 'foreignKey',
        typeOptions: {
          relationship: 'many',
          foreignTableId: 'tblAeFxeUN3ZU6DVQ',
          symmetricColumnId: 'fldqkDPe3rwxLmwne',
        },
        foreignTable: 'tblAeFxeUN3ZU6DVQ',
      },
      {
        id: 'fldsXJtoRaxeUATYV',
        name: 'Type',
        type: 'foreignKey',
        typeOptions: {
          relationship: 'many',
          foreignTableId: 'tblNMtn84ZahQOqtM',
          symmetricColumnId: 'fldrO9fTOTKnIVwlU',
        },
        foreignTable: 'tblNMtn84ZahQOqtM',
      },
      {
        id: 'flds8dNz6f5W29yxJ',
        name: 'Last Updated',
        type: 'date',
        typeOptions: { isDateTime: false, dateFormat: 'Local' },
      },
      {
        id: 'fldXRoMnxcXhHfTiI',
        name: 'Latitude',
        type: 'number',
        typeOptions: {
          format: 'decimal',
          precision: 7,
          negative: false,
          validatorName: 'positive',
        },
      },
      {
        id: 'fldkRApX7O2Xf5RiN',
        name: 'Longitude',
        type: 'number',
        typeOptions: {
          format: 'decimal',
          precision: 7,
          negative: false,
          validatorName: 'positive',
        },
      },
    ],
    primaryColumnName: 'Initiative Name',
    defaultView: { id: 'viwSQkVuZMsvcCRA0', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'initiatives%20%26%20organizations',
    numRecordsToList: 3,
  },
  tbllsjYlfEMlFvAoZ: {
    id: 'tbllsjYlfEMlFvAoZ',
    name: 'Objectives',
    columns: [
      {
        id: 'fldOWWkYCVYuO07DA',
        name: 'Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldfNp8G8dM9CQJQj',
        name: 'Notes',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fldra9dtX6pu6rfRx',
        name: 'Attachments',
        type: 'multipleAttachment',
        typeOptions: null,
      },
      {
        id: 'fldglL4BYRojobX93',
        name: 'Orgs / Projects / Products',
        type: 'foreignKey',
        typeOptions: {
          foreignTableId: 'tblwo8xeP7k63eosx',
          symmetricColumnId: 'fldgYEM8xP0hrwf2T',
          relationship: 'many',
        },
        foreignTable: 'tblwo8xeP7k63eosx',
      },
    ],
    primaryColumnName: 'Name',
    defaultView: { id: 'viwwhvxTcDztj240c', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'objectives',
    numRecordsToList: 3,
  },
  tblAeFxeUN3ZU6DVQ: {
    id: 'tblAeFxeUN3ZU6DVQ',
    name: 'Global Goals',
    columns: [
      {
        id: 'fldqtNagEnwElReYX',
        name: 'Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldbccdTliA25pHlt',
        name: 'Notes',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fldPCI1knjjGGKsKF',
        name: 'Attachments',
        type: 'multipleAttachment',
        typeOptions: null,
      },
      {
        id: 'fldqkDPe3rwxLmwne',
        name: 'Initiatives & Organizations',
        type: 'foreignKey',
        typeOptions: {
          foreignTableId: 'tblwo8xeP7k63eosx',
          symmetricColumnId: 'fld5a32LaQzMhIRyi',
          relationship: 'many',
        },
        foreignTable: 'tblwo8xeP7k63eosx',
      },
      {
        id: 'fldy76Y7FDhEEduao',
        name: 'URL',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldVAkqC0FFguYKtn',
        name: 'Image',
        type: 'multipleAttachment',
        typeOptions: null,
      },
    ],
    primaryColumnName: 'Name',
    defaultView: { id: 'viw0r0ma6wonRWtRO', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'global%20goals',
    numRecordsToList: 3,
  },
  tblNMtn84ZahQOqtM: {
    id: 'tblNMtn84ZahQOqtM',
    name: 'Initiative Type',
    columns: [
      {
        id: 'fldgV1im3yp5lCfSW',
        name: 'Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldRzWMntOP6EVSEK',
        name: 'Notes',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fldrO9fTOTKnIVwlU',
        name: 'Initiatives & Organizations',
        type: 'foreignKey',
        typeOptions: {
          foreignTableId: 'tblwo8xeP7k63eosx',
          symmetricColumnId: 'fldsXJtoRaxeUATYV',
          relationship: 'many',
        },
        foreignTable: 'tblwo8xeP7k63eosx',
      },
      {
        id: 'fldpTrISR4pi8szuz',
        name: 'URL',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
    ],
    primaryColumnName: 'Name',
    defaultView: { id: 'viwlyTHxNfGHvZVXq', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'initiative%20type',
    numRecordsToList: 3,
  },
  tblYvJ9X94Gq3OKju: {
    id: 'tblYvJ9X94Gq3OKju',
    name: 'People',
    columns: [
      {
        id: 'fldbOosefqyHmqWeo',
        name: 'Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldBv5eTWhOEsLOek',
        name: 'Notes',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fldgAP6maXaZXSuuz',
        name: 'Images',
        type: 'multipleAttachment',
        typeOptions: null,
      },
      {
        id: 'fld0t7ftaD4uG4jTK',
        name: 'Organizations',
        type: 'foreignKey',
        typeOptions: {
          foreignTableId: 'tblwo8xeP7k63eosx',
          symmetricColumnId: 'fldSN17LxImuQcyhe',
          relationship: 'many',
        },
        foreignTable: 'tblwo8xeP7k63eosx',
      },
      {
        id: 'fldrXWnMjIUplyg7D',
        name: 'Linkedin',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldWon8jpx6PQk4tQ',
        name: 'Blogs / Updates',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldN2L7hY614Yq2zk',
        name: 'Twitter',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
    ],
    primaryColumnName: 'Name',
    defaultView: { id: 'viwoe9eWaAZYdNwFh', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'people',
    numRecordsToList: 3,
  },
  tblKhLxd8Q7hTEzpJ: {
    id: 'tblKhLxd8Q7hTEzpJ',
    name: 'Technology Types',
    columns: [
      {
        id: 'fldrBwOE0IAyErABz',
        name: 'Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fld5VKutcIB2vMgVi',
        name: 'Notes',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fldnfWM6Okiqob73u',
        name: 'Attachments',
        type: 'multipleAttachment',
        typeOptions: null,
      },
      {
        id: 'fldARWbboOxhIhfPX',
        name: 'Learn more',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldQoTKVSwdF6QEZ1',
        name: 'Initiatives & Orgs',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldwnGsP8mV7vdFjy',
        name: 'Service Categories',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fld67BTyjLbaZy0zO',
        name: 'Initiatives & Organizations',
        type: 'foreignKey',
        typeOptions: {
          foreignTableId: 'tblwo8xeP7k63eosx',
          symmetricColumnId: 'fldzyHIpl9w64LncQ',
          relationship: 'many',
        },
        foreignTable: 'tblwo8xeP7k63eosx',
      },
    ],
    primaryColumnName: 'Name',
    defaultView: { id: 'viwpdlXawaEVLcuD7', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'technology%20types',
    numRecordsToList: 3,
  },
  tblLQvp37cl8wOUnj: {
    id: 'tblLQvp37cl8wOUnj',
    name: 'Documentation',
    columns: [
      {
        id: 'fldewqnqW8ss3VRQP',
        name: 'Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldyOjNUDg0Gi9tV2',
        name: 'URL',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldadA5oh2LESjrOD',
        name: 'Attachments',
        type: 'multipleAttachment',
        typeOptions: null,
      },
      {
        id: 'fld3aFyPbKeis3iNE',
        name: 'Initiative or Org',
        type: 'foreignKey',
        typeOptions: {
          relationship: 'many',
          foreignTableId: 'tblwo8xeP7k63eosx',
          symmetricColumnId: 'fldU1sxKxpgsxK1ez',
        },
        foreignTable: 'tblwo8xeP7k63eosx',
      },
      {
        id: 'fldAIM7bAzlOPyHch',
        name: 'Image',
        type: 'multipleAttachment',
        typeOptions: null,
      },
      {
        id: 'fld35HHl6rHy6T2KD',
        name: 'Description',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fldUmrcIHfaLIlgxE',
        name: 'Type',
        type: 'multiSelect',
        typeOptions: {
          choiceOrder: [
            'selotIy1SokQQmlQf',
            'selpQFoiTepjMP1ss',
            'selTTMD1e86cM689L',
            'sel69lwfmXRGtaVqQ',
          ],
          choices: {
            selotIy1SokQQmlQf: {
              id: 'selotIy1SokQQmlQf',
              color: 'blue',
              name: 'Toolkits & Guides',
            },
            selpQFoiTepjMP1ss: {
              id: 'selpQFoiTepjMP1ss',
              color: 'cyan',
              name: 'Code Repositories',
            },
            selTTMD1e86cM689L: {
              id: 'selTTMD1e86cM689L',
              color: 'red',
              name: 'APIs',
            },
            sel69lwfmXRGtaVqQ: {
              id: 'sel69lwfmXRGtaVqQ',
              color: 'yellow',
              name: 'Publications',
            },
          },
          disableColors: false,
        },
      },
    ],
    primaryColumnName: 'Name',
    defaultView: { id: 'viwPLD0fLa8znoBoY', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'documentation',
    numRecordsToList: 3,
  },
  tbl7iuSfoHTVTf4Oo: {
    id: 'tbl7iuSfoHTVTf4Oo',
    name: 'Partner & Sponsor Orgs',
    columns: [
      {
        id: 'fldkaxCkaz8oB2na1',
        name: 'Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fld4Tct3oRMV3J2Xl',
        name: 'Description',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fldcMvfIWVmoZn3HQ',
        name: 'URL',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldPAAGjs4OUToKcN',
        name: 'Twitter',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
      {
        id: 'fldjvycf7zu25RQxv',
        name: 'Initiatives & Organizations',
        type: 'foreignKey',
        typeOptions: {
          foreignTableId: 'tblwo8xeP7k63eosx',
          symmetricColumnId: 'fldAiuKOnzWlMBCKA',
          relationship: 'many',
        },
        foreignTable: 'tblwo8xeP7k63eosx',
      },
    ],
    primaryColumnName: 'Name',
    defaultView: { id: 'viwdkEJYOu4vMwGL0', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'partner%20%26%20sponsor%20orgs',
    numRecordsToList: 3,
  },
  tbld5g4XrFhqAKxVT: {
    id: 'tbld5g4XrFhqAKxVT',
    name: 'Data',
    columns: [
      {
        id: 'fldbjkCnWsUbPB2rl',
        name: 'Name',
        type: 'text',
        typeOptions: null,
      },
      {
        id: 'fldIJKlPEnfBfYImJ',
        name: 'Notes',
        type: 'multilineText',
        typeOptions: null,
      },
      {
        id: 'fldkpsDVIw3UaBQ6H',
        name: 'Attachments',
        type: 'multipleAttachment',
        typeOptions: null,
      },
      {
        id: 'fldwrjrrd3w4lhDzA',
        name: 'Field 3',
        type: 'text',
        typeOptions: { validatorName: 'url' },
      },
    ],
    primaryColumnName: 'Name',
    defaultView: { id: 'viwxU0pEbxLtHDBrQ', name: 'Grid view' },
    isEmptyDueToFilter: false,
    isEmpty: false,
    nameForUrl: 'data',
    numRecordsToList: 3,
  },
}

const AIRTABLE_DATA = {
  'Initiatives & Organizations': [
    {
      id: 'recJqTXT1I3ReZqkH',
      'Initiative Name': '1ST Bergen Federal Credit Union',
      Description:
        'Great Bergen Community Action (formerly Bergen Community Action Program) empowers low-income singles, couples and families with programs and services that help them on their road to self-sustainability and a stronger future.',
      Image: [
        {
          id: 'attoZAo2AXR3Uc3yf',
          url:
            'http://spongoblast.com/convertibility/pseudoaquatic?a=pitter&b=valeramide#thomsenolite',
          filename: '1ST Bergen Federal Credit Union.png',
          size: 40466,
          type: 'image/png',
          thumbnails: {
            small: {
              url:
                'http://promising.com/overelate/unlikableness?a=postmammary&b=salvy#factualness',
              width: 36,
              height: 36,
            },
            large: {
              url:
                'http://unstethoscoped.com/taurotragus/grossularite?a=sampaloc&b=hydraulicity#greenly',
              width: 340,
              height: 340,
            },
            full: {
              url:
                'https://unconstructive.com/cham/monoamino?a=creamfruit&b=floatmaker#fitting',
              width: 340,
              height: 340,
            },
          },
        },
      ],
      URL: 'http://www.1stbergen.com',
      'Service Categories': [
        'Deposits & Savings',
        'Financial Counseling & Education',
        'Wealth Management',
      ],
      'Affiliated Initiatives & Organizations': [
        'recOFoBXVal0LvcnP',
        'recv2VSlGhCJRYxCo',
        'recPpoEavzOUPudvK',
        'receCtd8W2TRX1QQx',
        'rectiv5jfi4sCUCcp',
        'recXKxZWxLneNP6Qs',
      ],
      'Locations / Regions': 'Hackensak, New Jersey, USA',
      Twitter:
        'http://haygrower.com/foliicolous/bokard?a=perfectivize&b=mesoscutellum#pandle',
      Beneficiaries:
        'low-income singles, couples and families with programs and services',
      Type: ['recA147S2P4ky4yPD'],
      'Last Updated': '2017-06-22',
    },
  ],
  Objectives: [
    {
      id: 'rechfRV8UQHQtHJ6o',
      Name: 'Financial inclusion',
      'Orgs / Projects / Products': [
        'recY5d1baWHgleN0X',
        'recob0RotXSrmDEaT',
        'reckHxRSaQDlu3OFU',
        'recsokeOUzBWhJnWs',
        'recjpQijJGIz2FNeV',
        'recJ4O7J6xVk1mNlZ',
        'recj7RZcNfnRIYnCM',
        'recNTKBlemYsB5NZT',
        'rec0DXPsMkCJqjh4F',
        'recqRZpC90IAaYSyK',
        'reczXmAn8HV7juCZL',
        'recRuAwbSVklDc6s7',
        'recaGe4YM6surTc9a',
        'recLydfVnYmfeXSEj',
        'recy2RmoymS2zyuBG',
      ],
    },
  ],
  'Global Goals': [
    {
      id: 'rechT6UR9vhn8piTf',
      Name: 'No Poverty',
      Notes:
        'Goal 1 calls for an end to poverty in all its manifestations by 2030. It also aims to ensure social protection for the poor and vulnerable, increase access to basic services and support people harmed by climate-related extreme events and other economic, social and environmental shocks and disasters.',
      'Initiatives & Organizations': [
        'recob0RotXSrmDEaT',
        'rec8kSMZLIy3WxVqi',
        'recjpQijJGIz2FNeV',
        'recnFTWO2NdgAvHzB',
        'reczXmAn8HV7juCZL',
        'recRuAwbSVklDc6s7',
        'recLu5lkXd9LR2gdB',
        'recaGe4YM6surTc9a',
        'recy2RmoymS2zyuBG',
      ],
      URL:
        'http://plinian.com/pampharmacon/perionychia?a=bedur&b=prolocutress#holothurian',
      Image: [
        {
          id: 'attWrmLSu3YJNek6z',
          url:
            'http://neurochord.com/stethophonometer/dukkeripen?a=balanophoraceae&b=chichi#graffage',
          filename: 'E_SDG_Icons-01.jpg',
          size: 80247,
          type: 'image/jpeg',
          thumbnails: {
            small: {
              url:
                'https://isochrone.com/tangentially/archispermae?a=myotrophy&b=wyne#pneumatogenous',
              width: 36,
              height: 36,
            },
            large: {
              url:
                'https://addenda.com/gilia/adminicula?a=assentatory&b=stableboy#quercitannic',
              width: 466,
              height: 466,
            },
            full: {
              url:
                'https://dilutent.com/periureteritis/nincompoop?a=torpedolike&b=apostaxis#semifloret',
              width: 466,
              height: 466,
            },
          },
        },
      ],
    },
  ],
  'Initiative Type': [
    {
      id: 'recusBlXdpbDmISxB',
      Name: 'Academic Institution',
      'Initiatives & Organizations': ['rec6adm6HhdjRyX5V'],
    },
  ],
  People: [
    {
      id: 'recOPQF5tZGeSIAHa',
      Name: 'Taynah Reis',
      Images: [
        {
          id: 'attAmMOCuJitCcyGc',
          url:
            'http://floodwood.com/pap/crystallographical?a=electrification&b=alcaldeship#malasapsap',
          filename:
            'AAEAAQAAAAAAAAmFAAAAJGM2ZTI1MDYzLWQ5YWEtNDZiOC05NWNkLWUzYzVmYjU4NzViMA.jpg',
          size: 15993,
          type: 'image/jpeg',
          thumbnails: {
            small: {
              url:
                'http://wagwag.com/homoeoteleuton/propitiatory?a=dispone&b=screechingly#polarimetric',
              width: 36,
              height: 36,
            },
            large: {
              url:
                'http://rallentando.com/tenoroon/fucoxanthin?a=prehesitation&b=sheikly#unwearisomeness',
              width: 400,
              height: 400,
            },
            full: {
              url:
                'http://plectopter.com/orchesis/ratsbane?a=vouch&b=bred#deacidification',
              width: 400,
              height: 400,
            },
          },
        },
      ],
      Organizations: ['rec9tcYkJcFk65KRz'],
      Linkedin:
        'https://ichorrhemia.com/joachim/lipwork?a=hatbox&b=pedro#intersale',
      'Blogs / Updates':
        'https://heliotactic.com/supercommentator/postliminous?a=unbeaconed&b=cyanobenzene#ham',
    },
  ],
  'Technology Types': [
    {
      id: 'recT2RORVIXCSAgJT',
      Name: 'Blockchain',
      Notes:
        'A distributed database that is used to maintain a continuously growing list of records, called blocks. Each block contains a timestamp and a link to a previous block.',
      'Learn more':
        'https://downswing.com/unselfness/prehensor?a=broommaker&b=eggler#unrelatedness',
      'Initiatives & Organizations': [
        'rec9tcYkJcFk65KRz',
        'recJicKuc903TfZpx',
        'recl6haRAFO42kIAl',
        'recY5d1baWHgleN0X',
        'recsokeOUzBWhJnWs',
        'recJ4O7J6xVk1mNlZ',
      ],
    },
  ],
  Documentation: [
    {
      id: 'recgw9jpI79Qq4QgN',
      Name: 'Moeda Whitepaper',
      Attachments: [
        {
          id: 'attGj6TOIrFHpuXt6',
          url:
            'http://predicamental.com/petiolate/unsparse?a=titterer&b=prehostile#impersuasible',
          filename: 'Moeda-White-Paper-S.pdf',
          size: 1126293,
          type: 'application/pdf',
          thumbnails: {
            small: {
              url:
                'http://curly.com/rarefication/abroma?a=gamesome&b=zincification#myrmecoid',
              width: 28,
              height: 36,
            },
            large: {
              url:
                'http://lahontan.com/dark/fluctuous?a=goura&b=flabbergast#unworker',
              width: 512,
              height: 663,
            },
          },
        },
      ],
      'Initiative or Org': ['rec9tcYkJcFk65KRz'],
      Image: [
        {
          id: 'attnatGXucAEztjab',
          url:
            'http://quintocubital.com/propulsity/crassula?a=starshake&b=hydrocollidine#shoplifting',
          filename:
            'k1paa8BwTX6SaWPfYnRw_small_Moeda-White-Paper-S_pdf__page_1_of_24_.png',
          size: 2554,
          type: 'image/png',
          thumbnails: {
            small: {
              url:
                'http://zyryan.com/circumaxile/scheat?a=gynecocratic&b=fatalness#chalcites',
              width: 47,
              height: 36,
            },
            large: {
              url:
                'http://appleberry.com/maladdress/byssus?a=egalitarian&b=isomeride#punter',
              width: 47,
              height: 36,
            },
            full: {
              url:
                'https://colloquialism.com/protuberance/hability?a=rotundate&b=moderately#agudist',
              width: 47,
              height: 36,
            },
          },
        },
      ],
      Type: ['Publications'],
    },
  ],
  'Partner & Sponsor Orgs': [
    {
      id: 'recu6vDPujry1GADn',
      Name: 'Wall Street Blockchain Alliance',
    },
  ],
  Data: [
    {
      id: 'recJMeGssgrmG1h4V',
    },
  ],
}

module.exports = {
  AIRTABLE_SCHEMA,
  AIRTABLE_DATA,
}
