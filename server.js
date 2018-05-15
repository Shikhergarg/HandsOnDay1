//shikher Garg
//shikher.garg@nagarro.com
const express = require('express')
const path = require('path') 
const cors=require('cors')



const app = express()
app.use(cors()) 
app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(2222, () => console.log('Running server at http://localhost:2222')) 