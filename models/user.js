const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const user=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{type:DataTypes.STRING}
})
module.exports=user;