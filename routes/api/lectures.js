const Course = require('../../db').Course
const Batch = require('../../db').Batch
const Lecture =require('../../db').Lecture
const db = require('../../db')

const route = require('express').Router();



route.post('/', (req, res) => {
    Lecture.create({
        lectureName:req.body.lectureName,
        subjectId:req.body.subjectId,
        teacherId:req.body.teacherId,
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