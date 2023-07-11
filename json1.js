const fs = require("fs");
//read users.json file
fs.readFile("users1.json", function(err, data) {
//check for errors
if (err) throw err;
//converting to json
const users = JSON.parse(data);
console.log(users); //print users
});