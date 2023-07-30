 
const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const product=sequelize.define('product',{
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
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    imageurl:{
        type:DataTypes.STRING(1000),
        allowNull:false
    },
},{
    tableName:'product'
}
)
module.exports=product;