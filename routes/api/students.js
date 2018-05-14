const Course = require('../../db').Course
const Student = require('../../db').Student
const Batch = require('../../db').Batch
const StudentBatch =require('../../db').StudentBatch
const db = require('../../db')

const route = require('express').Router();



route.post('/', (req, res) => {
    Student.create({
        studentName:req.body.studentName
    })
    .then((batch) => {
        
            res.json(batch)
        })
    .catch((err)  => {
        res.status(err)
    })
})
route.get('/', (req, res) => {
    
    Student.findAll()
    .then((students) => {
        
            res.json(students)
        })
    .catch((err)  => {
        res.status(err)
    } )
})
route.get('/:id', (req, res) => {
    Student.findAll({
        where: {
            studentId : req.params.id
        }}
    )
    .then((students) => {
        
            res.send(students)
        })
    .catch((err)  => {
        res.status(err)
    })
})
route.get('/:id/batches', (req, res) => {
    StudentBatch.findAll({
        where: {
            studentId : req.params.id
        },
        include:[{model:Batch}]
    }
    )
    .then((students) => {
        
            res.send(students)
        })
    .catch((err)  => {
        res.status(err)
    })
})
module.exports = route