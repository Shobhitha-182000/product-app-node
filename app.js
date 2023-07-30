const express=require('express');
const sequelize = require('./util/database');
const app=express();
const productRouter=require('./routes/productRoutes');
const cartRouter=require('./routes/cartRoutes');
const userRoutes=require('./routes/userRoutes');
const bodyParser=require('body-parser');
const cart = require('./models/cart');
const product = require('./models/product');
const user = require('./models/user');
const cartItem = require('./models/cartItem');
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    const userId=req.body.userId;
    user.findByPk(userId)
    .then(user=>{
        req.user=user;
        next();
    })
})

//one to many relationship
cart.hasMany(product);
product.belongsTo(cart);

user.hasMany(cart);
cart.belongsTo(user);

user.hasMany(product);
product.belongsTo(user);

//many to many 
product.belongsToMany(cart,{through:cartItem});
cart.belongsToMany(product,{through:cartItem});




app.use('/product',productRouter);
app.use('/cart',cartRouter);
app.use('/user',userRoutes);

app.use((req,res,next)=>{
    res.send('<h1>Page Not Found<h1>');
})


sequelize.sync()
.then(result=>{
    app.listen(9000,()=>{
        console.log('9000 port startedd');
    })
})
.catch(err=>console.log(err))
 
 
 
