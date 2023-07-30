const User = require("../models/user");
const path=require('path');



exports.displayFormProducts=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','User.html'));
}
exports.postProducts=(req,res,next)=>{
    const name=req.body.name;
    User.create({
        name:name,
 
       
    }).then(data=>{
        res.redirect('/user/add-user');
    }).catch(err=>console.log(err))
}

exports.getAllProduct=(req,res,next)=>{
    User.findAll()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>console.log(err));
}

exports.getOneProduct=(req,res,next)=>{
    const userId=req.params.id;
    User.findByPk(userId)
    .then(user=>{
        if(!user){
            console.log('no user found');
        }
        res.json(user);
    })
    .catch(err=>console.log(err))
}

exports.delete=(req,res,next)=>{
    const userId=req.params.id;
    User.destroy({where:{id:userId}})
    .then(user=>{
        if(!user){
            console.log('no user found');
        }
        res.json({message:'User deleted sucessfully'})
    })
    .catch(err=>console.log(err));
}

exports.updateProduct=(req,res,next)=>{
    const userId=req.params.id;
    User.findByPk(userId)
    .then((user)=>{
         user.name=req.body.user;
       
        return product.save();
    })
    .then((user)=>{
        res.json(user);
    })
    .catch(err=>console.log(err));
}

exports.getEditForm=(req,res,next)=>{
    const userId=req.params.id;
    User.findByPk(userId)
    .then(product=>{
        if(!product){
            res.send('<h1>No id found</h1>');
        }
        res.sendFile(path.join(__dirname,'..','views','Edit-Product.html'));
    })
    .catch(err=>console.log(err));
}
