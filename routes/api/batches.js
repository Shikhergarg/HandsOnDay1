const Course = require('../../db').Course
const Batch = require('../../db').Batch
const db = require('../../db')

const route = require('express').Router();



route.post('/', (req, res) => {
    Batch.create({
        batchName:req.body.batchName,
        courId:req.body.courId
    })
    .then((batch) => {
        
            res.json(batch)
        })
    .catch((err)  => {
        res.status(err)
    })
})
route.get('/', (req, res) => {
    
    Batch.findAll()
    .then((batches) => {
        
            res.json(batches)
        })
    .catch((err)  => {
        res.status(err)
    } )
})
module.exports = route