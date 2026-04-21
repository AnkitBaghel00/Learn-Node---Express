const queryString = require('querystring');

function userDataSubmit(req, resp){

    let dataBody = [];
    req.on('data', (chunk) => {
        dataBody.push(chunk);
    });

    req.on('end', () => {
        let rawData = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(rawData);
        let dataString = "My name is "+ readableData.name + " and my email is " + readableData.email;
        console.log(dataString);
    })
resp.write(`
      <h1>You can get the data here</h1>`
      
    )
}
module.exports = userDataSubmit;