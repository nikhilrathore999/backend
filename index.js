const http = require("http");
http.createServer(function(request, response){
    // response.write("Hello World");4
    // response.write("<h1>Hello World</h1>");
    let user= { name: "John", age: 30, city: "New York" };
    response.write(JSON.stringify(user));
    response.end();
}).listen(3000)
