const Course = require('../../db').Course
const Batch = require('../../db').Batch
const Subject =require('../../db').Subject
const Teacher =require('../../db').Teacher
const db = require('../../db')

const route = require('express').Router();


route.post('/', (req, res) => {
    Teacher.create({
        teacherName:req.body.teacherName,
        subjectId:req.body.subjectId
    })
    .then((batch) => {
        
            res.json(batch)
        })
    .catch((err)  => {
        res.status(err)
    })
})
route.get('/', (req, res) => {
    
    Teacher.findAll()
    .then((teachers) => {
        
            res.json(teachers)
        })
    .catch((err)  => {
        res.status(err)
    } )
})

route.get('/:id', (req, res) => {
    Teacher.findAll({
        where: {
            teacherId : req.params.id
        }}
    )
    .then((teachers) => {
        
            res.send(teachers)
        })
    .catch((err)  => {
        res.status(err)
    })
})
 route.get('/:id1/batches', (req, res) => {
    var teachersList=[];
    Subject.findAll({
        where:{
            courId:req.params.id1
        }
    })
    .then((subjects)=>{
        Teacher.findAll()
        .then((teachers)=>{
            for(teacher in teachers)
            {
                for(subject in subjects)
                {
                    if(teacher.subjectId===subject.subjectId)
                    {
                        teachersList.push(teacher)
                    }
                }
            }

            res.json(teachersList)
        })
    })

     
})
module.exports = route