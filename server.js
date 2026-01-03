// create HTTP server

import exp from 'express'
const app=exp()

// assign port number

const port=8080
app.listen(port,()=>console.log(`server listening on port${port}`))

// Create user API
    // route to handle GET req
    app.get('/users',(req,res)=>{
        // send response to client
        res.json({message:"all user data"})
    })
    // route to handle POST req
    app.post('/user',(req,res)=>{
        res.json({message:'user created'})
    })
    // route to handle PUT req
    app.put('/user',(req,res)=>{
        res.json({message:'user MODIFIED'})
    })
    // route to handle DELETE req
    app.delete('/user',(req,res)=>{
        res.json({message:'user deleted'})
    })
