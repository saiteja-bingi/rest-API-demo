MONGODB COMMANDS
 Db client(mongodb shell or compass ) <---------- DB server(mongodb community server)

1. create database
2. create collections in database
3. insert documents in database

in windows c://data/db

# clear the content 
    > cls

# create database 
    > use database-name

# check all databases 
    > show databases (or) show dbs

# create collection in database 
    > db.createCollection("name-of-collection)

# see existing collections 
    > show collections


MONGODB CRUD OPERATIONS
_______________________

# insert documents in collections 
    > db.collectionName.insertOne(document)
    > db.collectionName.insertMany([doc,doc,...])

# Read document 
    > db.collectionName.findOne()
    > db.collectionName.find()

# update document
    > db.collectionName.updateOne(condition,update)
    > db.collectionName.updateMany(condition,update)
    ex:
    > db.users.updateOne({name:"ravi"},{$set:{age:30,city:"chennai"}})

# Delete Document
    > db.collectionName.deleteOne(condition)
    > db.collectionName.deleteMany(condition)

query operators 
_______________

# comparision query operators
    > db.users.findOne({name:{$eq:"ravi"}})
    > db.users.find({age:{$gt:25}})
    eq->equal,gt->greater

    > db.users.find({age:{$in:[16,25]}})

# logical operators
    $ans
    $or
    > db.users.find({$and:[{city:"hyderabad"},{age:25}]})

