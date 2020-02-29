// function add(x, y){
//     this.name = "myName";
//     return x + y;
// }

// var substract = function(x, y){
//     return x - y;
// }

// function Album(name, songs){
//     this.name = name;
//     this.songs = songs;
//     this.size = function(){
//         return songs.size();
//     }
// }


// var album = new Album("Pop Songs", ["Home", "Stick"]);

// var test = new add(1,3);

var body = document.getElementsByTagName("body")[0];

var h2 = document.createElement("h2");
h2.innerHTML = "second heading";
body.insertBefore(h2, body.lastChild);