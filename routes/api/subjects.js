const Course = require('../../db').Course
const Batch = require('../../db').Batch
const Subject =require('../../db').Subject
const Teacher =require('../../db').Teacher
const db = require('../../db')

const route = require('express').Router();



route.post('/', (req, res) => {
    Subject.create({
        subjectName:req.body.subjectName,
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
    
    Subject.findAll()
    .then((subjects) => {
        
            res.json(subjects)
        })
    .catch((err)  => {
        res.status(err)
    } )
})
route.get('/:id', (req, res) => {
    Subject.findAll({
        where: {
            subjectId : req.params.id
        }}
    )
    .then((subjects) => {
        
            res.send(subjects)
        })
    .catch((err)  => {
        res.status(err)
    })
})
route.get('/:id/teachers', (req, res) => {
    Teacher.findAll({
        where: {
            subjectId : req.params.id
        }}
    )
    .then((teachers) => {
        
            res.send(teachers)
        })
    .catch((err)  => {
        res.status(err)
    })
})



module.exports = route