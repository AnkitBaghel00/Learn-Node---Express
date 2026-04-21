const fs = require('fs');

const operation = process.argv[2];

if(operation === "write"){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt";
    // console.log(operation, name, content);
    
    fs.writeFileSync(fullName, content);
} else if (operation === "read"){
     const name = process.argv[3];
    
    const fullName = "files/"+name+".txt";

    let data = fs.readFileSync(fullName, "utf-8");
    console.log(data);
    
} else if (operation === "update"){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt";

    fs.appendFileSync(fullName, content);
    console.log("Content updated");
} else if (operation === "delete"){
    const name = process.argv[3];
    const fullName = "files/"+name+".txt";
    fs.unlinkSync(fullName);
    console.log("File deleted");
} else {
    console.log("Invalid operation. Please use 'write', 'read', 'update', or 'delete'.");
}


// const data = fs.readFileSync("files/apple.txt", "utf-8");
// console.log(data);


// fs.appendFileSync("files/apple.txt", " and this is good for health");

// fs.unlinkSync("files/green.txt");


