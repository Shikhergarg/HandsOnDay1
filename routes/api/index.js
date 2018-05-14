//shikher Garg
//shikher.garg@nagarro.com
const route = require('express').Router()

route.use('/courses', require('./courses')) 
route.use('/batches', require('./batches')) 
route.use('/subjects', require('./subjects')) 
route.use('/lectures', require('./lectures')) 
route.use('/teachers', require('./teachers'))
route.use('/students', require('./students'))
route.use('/studentbatch', require('./studentbatch'))    
module.exports = {
    route
}