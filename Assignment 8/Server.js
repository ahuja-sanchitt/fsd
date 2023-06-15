const express=require('express')
const app=express()
const PORT=3000
const usersModule = require('./users');
app.get('/api/users',(req,res)=>{
    const users = usersModule.getUsers();
    res.json(users);
})
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
});