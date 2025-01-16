const lodash = require('lodash');

const names = ['harsh','vishwakarma','shashank','goud']

const capitalize = lodash.map(names, lodash.capitalize)
console.log(capitalize)