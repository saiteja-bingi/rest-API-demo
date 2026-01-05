// create HTTP server

import exp from 'express'
const app=exp()

// assign port number

const port=8080
app.listen(port,()=>console.log(`server listening on port${port}`))


// add body parser middleware
app.use(exp.json())


// custom middleware

function middleware1(req,res,next){
    // either send response
    console.log("middleware-1")
    res.json({message:"this is res from middleware1"})
    // forward req to next middleware
    next()
}

// using middleware
app.use(middleware1)  //use method is for every incoming req
// app.get(middleware1) //get for only get req 
// application level middleware




// test-data
    let users=[]

// Create user API
    // route to handle GET req
    app.get('/users',(req,res)=>{
        // send response to client
        // read get useres and send res
        res.json({message:"all users ",payload:users})
    })


    // route level middleware--->add as 2nd argument
    // app.get('/users',middleware1,(req,res)=>{
    //     // send response to client
    //     // read get useres and send res
    //     res.json({message:"all users ",payload:users})
    // })



    // route to send a user by id
    app.get("/users/:id",(req,res)=>{
        // read id from url
        let userId=Number(req.params.id)
        // find user by id
        let user =users.find(userObj=>userObj.id===userId)
        // if user not found

        if(user===undefined){
            res.json({message:"user not found"})
        }
        else{
            res.json({message:"user found",payload:user})
        }
    })


    // route to handle POST req
    app.post('/user',(req,res)=>{

        // get new user from req;
        let newUser=req.body
        console.log("newuser is: ",newUser)
        users.push(newUser)
        // send res
        res.json({message:'user created'})
    })


    // route to handle PUT req
    app.put('/user',(req,res)=>{
        // get modifieed user
        let modifiedUser=req.body
        console.log("newuser is: ",modifiedUser)
        let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
        if(index==-1){
            res.json({message:"user not found to update"})
        }
        else{
            users.splice(index,1,modifiedUser)
            res.json({message:"user modified"})
        }
    })

    // route to handle DELETE req
    app.delete('/user:id',(req,res)=>{
        // read id from url parameter
        let userId=Number(req.params.id)
        let index=users.findIndex(userObj=>userObj.id==userId)
        if(index==-1){
            res.json({message:"user not found to update"})
        }
        else{
            users.splice(index,1)
            res.json({message:"user deleted"})
        }
    })


