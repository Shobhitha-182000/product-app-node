const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const cartItem=sequelize.define('cartItem',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    }
})

module.exports=cartItem;