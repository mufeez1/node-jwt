//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
const sequelize = new Sequelize(`postgres://apprenticeship-marium:VJlZO7Xfaspefc4xPkr7MD@emblemtechnologies.cluster-custom-cafzdqgmbkp1.ap-southeast-1.rds.amazonaws.com:5432/apprenticeship_db`, {dialect: "postgres"})


//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db