// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)
const names = require('./4-modules-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(data);
// sayHi(`Laura`)
// sayHi(names.alejo)
// sayHi(names.alejo+" "+names.arce)


