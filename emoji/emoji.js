let getJsonFile = (pathToFile) => {
  let request = new XMLHttpRequest();
  
  request.open("GET", pathToFile, false);
  request.send(null);
  
  let my_JSON_object = JSON.parse(request.responseText);
  
  return my_JSON_object;
};
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");
let item = document.getElementById('item');

function draw (massiv){
  item.innerHTML = "";
  let icons = '';
  for(let i = 0; i < massiv.length; i++){
    
    icons +=
      `<div class="emoji-block">
        <p>${massiv[i].symbol}</p>
        <h2 class="emoji-name">${massiv[i].title}</h2>
        <p>${massiv[i].keywords}</p>
      </div>`;
    
  }
  item.innerHTML = icons;
}
draw (allEmoji);

document.querySelector('#text-to-find').oninput = function(){

  let value = this.value.trim();
  newEmoji = allEmoji.filter(emoji => emoji.keywords.includes(value));
 
  draw(newEmoji);
}