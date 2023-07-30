const Cart = require("../models/cart");
const path=require('path');



exports.displayFormProducts=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','Add-Cart.html'));
}
exports.postProducts=(req,res,next)=>{
    const title=req.body.title;
    const price=req.body.price;
    req.user.createCart({
        title:title,
    
        price:price,
       
    }).then(data=>{
        res.redirect('/cart/add-cart');
    }).catch(err=>console.log(err))
}

exports.getAllProduct=(req,res,next)=>{
    Cart.findAll()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>console.log(err));
}

exports.getOneProduct=(req,res,next)=>{
    const carId=req.params.id;
    console.log(carId);
    Cart.findByPk(carId)
    .then(user=>{
        if(!user){
            console.log('no user found');
        }
        res.json(user);
    })
    .catch(err=>console.log(err))
}

exports.delete=(req,res,next)=>{
    const cartId=req.params.id;
    Cart.destroy({where:{id:cartId}})
    .then(user=>{
        if(!user){
            console.log('no user found');
        }
        res.json({message:'User deleted sucessfully'})
    })
    .catch(err=>console.log(err));
}

exports.updateProduct=(req,res,next)=>{
    const cartId=req.params.id;
    Cart.findByPk(cartId)
    .then((product)=>{
        product.title=req.body.title;
      
        product.price=req.body.price;
       
        return product.save();
    })
    .then((product)=>{
        res.json(product);
    })
    .catch(err=>console.log(err));
}

exports.getEditForm=(req,res,next)=>{
    const carId=req.params.id;
    Cart.findByPk(carId)
    .then(product=>{
        if(!product){
            res.send('<h1>No id found</h1>');
        }
        res.sendFile(path.join(__dirname,'..','views','Edit-Product.html'));
    })
    .catch(err=>console.log(err));
}
