const express=require('express')

const verify=require('./verifyToken');

const router=express.Router();

router.get('/',verify,(req,res)=>{
	res.json({posts:{
		title:"my first posts"
	}});
});


module.exports=router;
