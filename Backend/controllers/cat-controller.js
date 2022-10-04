const mongoose = require('mongoose');
const Cat = require('../model/category')

const getCat = async (req,res,next) => {
    try{
   const catId=req.params.cid;
   console.log(catId)
   let cat = await Cat.findById(catId).populate({
    path: 'children', 
    select: ['name']
  });
   res.status(200).json(cat);
    }catch(err){
        console.log(err)
    }
}


const postCat = async (req,res,next) => {
    try{
    let {name,count,childCount,children} = req.body
    children=[]
    const createdCat = new Cat({
        name,count,childCount,children
    })
    console.log(createdCat)
    const resp=await createdCat.save();
    res.status(201).json(createdCat);
    }catch(err){
        console.log(err)
    }
    
}

















// const postChild = async (req,res,next) => {

//     try{
//         console.log("working")
//     const child=await Cat.findOne({name:'Mens Fashion'})
//     console.log(child._id)
//     const cat=await Cat.findOne({name:'Categories'})
//     console.log("main",cat)
//     cat.children.push(child._id);
//     await cat.save()
//     res.status(201).json("set");
//     }catch(err){
//         console.log(err)
//     }
    
// }

// const Test = async (req,res,next) => {
//     try{
//    const catId=req.params.cid;
//    let cat = await Cat.findById(catId).populate('children');
//    res.status(200).json(cat);
//     }catch(err){
//         console.log(err)
//     }
// }

exports.getCat = getCat;
exports.postCat = postCat;
exports.postChild = postChild;
exports.Test=Test;