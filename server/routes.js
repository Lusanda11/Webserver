// ****************** routes.js *********************

// This file contains route handling logic. It checks the request URL and sends the appropriate response.
// ----------------------------------------------------------------------------------------------------------------------------
    module.exports = (req, res) =>
    {
        // Set the response header with a status code and content type
        res.setHeader("Content-Type", "text/plain");

        // Handle routes based on the URL
        if (req.url === "/" && req.method === "GET")
        {
            res.statusCode = 200;
            res.end("Welcome to the Home Page");
        }
        else if (req.url === "/about" && req.method === "GET")
        {
            res.statusCode = 200;
            res.end("Welcome to the About Page");
        }
        else
        {
            res.statusCode = 404;
            res.end("404 Not Found");
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------
