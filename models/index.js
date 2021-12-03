const models = {}
const ext = ".js"
require('fs').readdirSync(__dirname).forEach(file => {
    if(file.endsWith(ext) || file.startsWith('index'))
        models[file.replace(ext, '')] = require('./' + file)
})
module.exports = models