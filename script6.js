
var json = [{
    "id" : "mohanraj s", 
    "task" : "task5",
    "mail": "mohanrajss@gmail.com"
},
{
    "id" : "mohanraj s", 
    "task" : "task5",
    "mail": "mohanrajss@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.mail); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);




