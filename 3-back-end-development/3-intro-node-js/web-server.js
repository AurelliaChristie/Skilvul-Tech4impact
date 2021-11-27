const http = require('http')
const url = require('url')

// Create server
const requestListener = (request, response) => {
    console.log("request listener emitted")
    
    // Get query
    const queryParams = url.parse(request.url, true).query

    // Write in the browser (open http://localhost:3000/?name=Aurel)
    const message = `Hello ${queryParams.name}`
    response.write(message)
    
    // Stop loading
    response.end()
}

const server = http.createServer(requestListener)

// Add event handler
server.on('listening', function(...argv){
    console.log("server is listening on port 3000")
    console.log("listening event emitted with argv", argv)
})

server.on('close', () => {
    console.log("server is closed")
})

server.on('error', (error) => {
    console.log("server is error")
    console.error(error)
})

// Run server
server.listen(3000)

// Close server
// setTimeout(() => {
//     server.close()
// }, 1000)