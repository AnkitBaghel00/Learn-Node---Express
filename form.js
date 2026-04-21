const http = require('http');
const fs = require('fs');
const queryString = require('querystring');


http.createServer((req, resp) => {

    fs.readFile('html/form.html', 'utf-8', (error, data) => {
        if (error) {
            resp.writeHead(500, { 'content-type': 'text/plain' })
            resp.end('internal server error')
            return;
        }

           resp.writeHead(200, {'content-type': 'text/html'})
        if (req.url == '/') {
            resp.write(data);
        } else if (req.url == '/submit') { 
            let dataBody = [];
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                let dataString ="My name is " + readableData.name + " and my email is " + readableData.email;
                console.log(dataString);      
                resp.write(`${readableData.name}`);
                // fs.writeFileSync("text/"+readableData.name+".txt", dataString);
                // console.log("file created successfully");

                fs.writeFile("text/"+readableData.name+".txt", dataString, 'utf-8', (error)=> {

                   if(error){
                    console.log("Internal server error");
                    return false;
                   }else {
                     console.log("file created successfully");
                   }
                })
                resp.end();  
                
               
            });

            // resp.write(${readableData.name});
            //   resp.write(`<h1>Name: ${readableData.name}</h1>`);
            // resp.write("<h1>Data Submitted</h1>")
            //  resp.end();

        }
       


    })

    // if(req.url=='/'){
    //     resp.writeHead(200, {'content-type': 'text/html'})
    //     resp.write(`
    //     <form action="/submit" method="post">
    //     <input type="text" name="name" id="">
    //     <input type="text" name="email" id="">
    //     <button>Submit</button>
    //     </form>
    //     `);

    //     resp.end();
    // }else if(req.url=='/submit'){
    //     resp.write("<h1>Data Submitted</h1>")

    // }


}).listen(3000);