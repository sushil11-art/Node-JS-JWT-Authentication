const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();


//connected to database
mongoose.connect(process.env.DB_CONNECT
	,{useNewUrlParser:true},()=>console.log('connected to db!'));

const authRoutes=require('./routes/auth');
const postRoutes=require('./routes/posts');

const app=express();

app.use(express.json());

app.use('/api/user',authRoutes);
app.use('/api/posts',postRoutes);



app.listen(4000,()=>console.log('Api is running'));

