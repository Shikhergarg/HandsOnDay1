const Course = require('../../db').Course
const Batch = require('../../db').Batch
const Lecture =require('../../db').Lecture
const Student = require('../../db').Student
const StudentBatch =require('../../db').StudentBatch
const Subject =require('../../db').Subject
const Teacher =require('../../db').Teacher
const db = require('../../db')

const route = require('express').Router();

//add new Product
route.post('/', (req, res) => {
    //validate the values

    //add new product
    console.log(req.body.courname);
    Course.create({
        courname:req.body.courname
    })
    .then((course) => {
        res.json(course)
    }).catch((err) => {
        res.send(err)
    })
})


//get all products
route.get('/', (req, res) => {
    
    Course.findAll()
    .then((courses) => {
        
            res.json(courses)
        })
    .catch((err)  => {
        res.status(err)
    } )
})

route.get('/:id', (req, res) => {
    Course.findAll({
        where: {
            courId : req.params.id
        }}
    )
    .then((courses) => {
        
            res.send(courses)
        })
    .catch((err)  => {
        res.status(err)
    })
})

route.get('/:id/batches', (req, res) => {
    Batch.findAll({
        where: {
            courId : req.params.id
        }}
    )
    .then((batches) => {
        
            res.json(batches)
        })
    .catch((err)  => {
        res.status(err)
    })
})


route.post('/batches', (req, res) => {
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


route.get('/:id/batches/:id1', (req, res) => {
    Batch.findAll({
        where: {
            batchId : req.params.id1,
            courId : req.params.id
            
        }}
    )
    .then((batches) => {
        
            res.json(batches)
        })
    .catch((err)  => {
        res.status(err)
    })
})

route.get('/:id/batches/:id1/lectures', (req, res) => {
    Lecture.findAll({
        where: {
            batchId : req.params.id1
            
        }}
    )
    .then((lectures) => {
            res.json(lectures)
        })
    .catch((err)  => {
        res.status(err)
    })
})

route.get('/:id/batches/:id1/lectures/:id2', (req, res) => {
    Lecture.findAll({
        where: {
            batchId : req.params.id1,
            lectureId:req.params.id2
            
        }}
    )
    .then((lectures) => {
            res.json(lectures)
        })
    .catch((err)  => {
        res.status(err)
    })
})

route.get('/:id/batches/:id1/students', (req, res) => {
    StudentBatch.findAll({
        where: {
            batchId : req.params.id1
        },
        include:[Student]
    }
    )
    .then((students) => {
            res.json(students)
        })
    .catch((err)  => {
        res.status(err)
    })
})
route.get('/:id/batches/:id1/teachers', (req, res) => {
    Teacher.findAll({
        include:[
            {
                model:Subject,
                include:[
                    {
                        model:Course,
                        
                        // where:{
                        //     courId:req.params.id
                        // },
                        include:[{
                            model:Batch,
                            
                            // where:{
                            //     batchId:req.params.id1
                            // }

                        }]
                    }
                ]
            }
        ]
    }
    )
    .then((students) => {
            res.json(students)
        })
    .catch((err)  => {
        res.status(err)
    })
})
module.exports = route