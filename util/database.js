const { Sequelize } = require("sequelize");


const sequelize=new Sequelize('relationship','root','root',{
    dialect:"mysql",
    host:'localhost'
})

module.exports=sequelize;