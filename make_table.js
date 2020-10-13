function generateTableHead(table, data)
{
  try {
  let thead = table.createThead();
}
catch(err) {
  alert(err.message);
}
  let row = thead.insertRow();
  for (let key of data)
  {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
//
//
//
let table_js = [];

let book_names = [
  "Doctor At The Graveyard",
  "Creature In The Lake",
  "Raven Without Eyes",
  "Zombie Without A Mouth",
  "Girls In The Lake",
  "Neighbors In The Mirror",
  "Monks In The Antique Shop",
  "Monks During Halloween",
  "Trees And Friends",
  "Spiders And Wives",
  "Wolves And Witches",
  "Dogs And Wolves",
  "Don't Look Behind The Door",
  "Emblems In My School",
  "Drawings At The Lake",
  "Trapped In The Attic",
  "Careful Of The Town",
  "Aware Of The Sea",
  "Sweating In My Demise"
];


let author_names =
[
  "May",  
  "Desmond",  
  "Frances", 
  "Viviana",  
  "Caridad",  
  "Ellis",  
  "Lon",  
  "German",  
  "Charmain",  
  "Aldo",  
  "Su",  
  "Katelin",  
  "Lesley",  
  "Randi",  
  "Valrie",  
  "Byron",  
  "Cecelia",  
  "Kristen", 
  "Rosalyn",  
  "Grover"
];


for(let i = 0; i < author_names.length; i++)
{
  let rand = Math.floor((Math.random() * 10) + 1);
  var string = "";
  var val_1 = string.concat(rand);
  var val = val_1.concat("/10");
  table_js.push({Title: book_names[i], Author: author_names[i], Rating: val});
}

let table = document.getElementById("table");
let data = Object.keys(table_js[0]);
generateTableHead(table, data);
