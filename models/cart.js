const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const cart=sequelize.define('cart', {
    id:{
    
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
},
title:{
    type:DataTypes.STRING,
    allowNull:false
},
price:{
    type:DataTypes.DOUBLE,
    allowNull:false
},
})

module.exports=cart;