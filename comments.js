// create web server
function CreateWebServer() {
    console.log("Web server created!");
}
module.exports = { CreateWebServer };  

// create database connection
function CreateDatabaseConnection() {
    console.log("Database connection created!");
}
module.exports = { CreateDatabaseConnection };  

// create API endpoint
function CreateAPIEndpoint() {
    console.log("API endpoint created!");
}
module.exports = { CreateAPIEndpoint };
module.exports = { CreateWebServer, CreateDatabaseConnection, CreateAPIEndpoint };
    