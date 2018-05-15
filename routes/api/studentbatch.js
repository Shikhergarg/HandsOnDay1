const Course = require('../../db').Course
const Student = require('../../db').Student
const StudentBatch =require('../../db').StudentBatch
const db = require('../../db')

const route = require('express').Router();



route.post('/', (req, res) => {
    //console.log("fun");
    StudentBatch.create({
        studentId:req.body.studentId,
        batchId:req.body.batchId
    })
    .then((batch) => {
        
            res.json(batch)
        })
    .catch((err)  => {
        res.status(err)
    })
})

module.exports = route