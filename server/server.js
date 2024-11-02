// ****************** server.js *********************


// Import necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    const http = require("http");
    const { hostname, port } = require("../config/config");
    const routes = require("./routes");
// ----------------------------------------------------------------------------------------------------------------------------


// Create the server.
// ----------------------------------------------------------------------------------------------------------------------------
    const server = http.createServer((req, res) =>
    {
        // Call the routes function to handle requests
        routes(req, res);
    });
// ----------------------------------------------------------------------------------------------------------------------------


// Start the server.
// ----------------------------------------------------------------------------------------------------------------------------
    server.listen(port, hostname, () =>
    {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
// ----------------------------------------------------------------------------------------------------------------------------
