const Sequelize = require('sequelize')

const db = new Sequelize('nodejs', 'shikher', 'password', {
    dialect: 'sqlite',
    host: 'localhost',
    //port: 98998
    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    // },
    storage: './assignment.db'
})

const Batch = db.define('batch', {
    batchId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    batchName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
	
})


const Course = db.define('course', {
    courId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    courname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0
    },

    

})

const Teacher = db.define('teacher', {
    teacherId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    teacherName: {
        type: Sequelize.STRING,
        allowNull: false

    },

    
})
const Subject = db.define('subject', {
    subjectId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    subjectName: {
        type: Sequelize.STRING,
        allowNull: false

    },

    
})

const Lecture = db.define('Lecture', {
    lectureId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    
})

const Student = db.define('student', {
    studentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    studentName: {
        type: Sequelize.STRING,
        allowNull: false

    },

    
})
const StudentBatch = db.define('studentbatch', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
})
Teacher.belongsTo(Subject, {foreignKey: 'subjectId',targetKey: 'subjectId'})
Batch.belongsTo(Course, {foreignKey: 'courId', targetKey: 'courId'})
Lecture.belongsTo(Subject, {foreignKey: 'subjectId',targetKey: 'subjectId'})
Lecture.belongsTo(Teacher, {foreignKey: 'teacherId',targetKey: 'teacherId'})
Lecture.belongsTo(Batch,{foreignKey: 'batchId',targetKey: 'batchId'})
StudentBatch.belongsTo(Student, {foreignKey: 'studentId', targetKey: 'studentId'});
StudentBatch.belongsTo(Batch, {foreignKey: 'batchId', targetKey: 'batchId'}); 
Subject.belongsTo(Course, {foreignKey: 'courId', targetKey: 'courId'})

db.sync().then(()=>console.log("data created")).catch((err)=>console.log("Database error"))



// //finding all products in product table
// function getProducts() {
//     return Product.findAll({
//        include:[Vendor]
//     })

// }



module.exports={
    db,Batch,Student,Lecture,Course,Teacher,Subject,StudentBatch
}