const word = require("./Word.js");


const animals = [];
animals.push(new word (["c","o","b","r","a"]));
animals.push(new word (["j","a","g","u","a","r"]));
animals.push(new word (["p","l","a","t","y","p","u","s"]));
animals.push(new word (["o","s","t","r","i","c","h"]));
animals.push(new word (["k","o","m","o","d","o"," ","d","r","a","g","o","n"]));

const countries = [];
countries.push(new word (["t","r","i","n","i","d","a","d"," ", "a","n","d"," ","t","o","b","a","g","o"]));
countries.push(new word (["s","i","n","g","a","p","o","r","e"]));
countries.push(new word (["b","r","a","z","i","l"]));
countries.push(new word (["s","w","i","t","z","e","r","l","a","n","d"]));
countries.push(new word (["t","h","a","i","l","a","n","d"]));

const games = [];
games.push(new word (["s","e","k","i","r","o"]));
games.push(new word (["f","i","n","a","l"," ","F","a","n","t","a","s","y"]));
games.push(new word (["l","e","a","g","u","e"," ","o","f"," ","l","e","g","e","n","d","s"]));
games.push(new word (["c","h","r","o","n","o"," ","c","r","o","s","s"]));
games.push(new word (["m","e","t","a","l"," ","g","e","a","r"," ","s","o","l","i","d"]));


category = [];
category.push(animals);
category.push(countries);
category.push(games);

module.exports = category;



/* TESTING logs - 
console.log(animals);


animals[4].createDashes();
animals[4].displayDashes();

animals[4].searchWord("o");
animals[4].displayDashes(); */