const fs = require('fs/promises')

const sortObjectByKey = (json) => {
  return Object.keys(json).sort().reduce((obj, key) => {
    if (typeof json[key] === 'object') {
      obj[key] = sortObjectByKey(json[key])
    } else {
      obj[key] = json[key]
    }
    return obj
  }, {})
}

fs.readdir('./public/locales').then((dirs) => {
  dirs.forEach((dir) => {
    const json = require('./public/locales/' + dir + '/common.json')
    const sorted = sortObjectByKey(json)
    fs.writeFile('./public/locales/' + dir + '/common.json', JSON.stringify(sorted, null, 2) + '\n', 'utf-8')
  })
})
