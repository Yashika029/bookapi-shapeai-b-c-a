const express = require("express");      // importing express

const ourAPP = express();                 // initializing it

ourAPP.get("/", (request, response) => {
    response.json({ message: "Request Served!!!!"});
});

ourAPP.listen(4000, () => console.log("Server is running"));   // listen to the port