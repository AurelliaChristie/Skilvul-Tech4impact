// Import package
const e = require('express');
const express = require('express');

// Create express app
const app = express();
const port = 3000;

const usersDB = [
    {
        id:1,
        name:"Bob"
    },
    {
        id:2,
        name:"Frank"
    }
]

// Middleware
// Application Level
const varMiddleware = function(request, response, next){
    console.log("running middleware")
    // Modify request
    if(request.query.name === 'agus'){
        request.name = request.query.name
        next()
    }else{
        next({
            message: "Ini bukan Agus"
        })
    }
}


// Error Handling
const errorHandling = function (err, request, response, next){
    response.status(500).json(err)
}

// Routes -> request: from client, response: send data to client
app.get('/', (request, response) => {
    const data = {
        // Eventhough message != "message", in the response it will automatically become JSON 
        message: "Hello, world"
    }

    // Like response.write & end in Node JS
    // This response is the response you can get using fetch
    response.send(data);
})

app.get('/users', (request, response) => {
    console.log(request.query.name)
    response.status(201).send(usersDB)
})

// Add data
app.post('/users', (request, response) => {
    const newUser = {
        id: usersDB.length + 1,
        name: "New User"
    }
    usersDB.push(newUser)
    
    response.status(201)
    response.send(newUser)
})

// Nested routes
const creators = express.Router()
app.use("/creators", varMiddleware, creators)
creators.get("/", (request, response) => {
    let users = [
        {
            name : "Agus",
            date : "10/11/12"
        },
        {
            name : "Hari",
            date : "10/12/12"
        },
        // From middleware
        {
            name: request.name
        }
    ]
    response.send(users)
})

// Practice
let vehicles = [
    {
        id: 1,
        name: "Toyota",
        yer: 2001
    },
    {
        id: 2,
        name: "BMW",
        year: 2002
    }
]

const vehicleMiddleware = function(request, response, next){
    if(Number(request.query.id) !== 2){
        next({
            message : "The data is restricted"
        })
    }else{
        next()
    }
}

const vehicle = express.Router()
app.use('/vehicles', vehicleMiddleware, vehicle)

vehicle.get('/', (request, response) => {
    if(request.query.id){
        response.send(vehicles.filter((vehicle) => vehicle.id === Number(request.query.id)))
    } else {
        response.send(vehicles);
    }
})

// Use error handling
app.use(errorHandling)

// Execute app
app.listen(port, () => {
    console.log("server is listening on port ", port)
})