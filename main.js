var image = [
    "Alu.jpeg",
    "neeta.jpg",
    "maxen.jpg"
  ];

var fname= [
  "Alannah",
    "Neeta",
    "Maxen"
    
];
var j = 0;
var i = 0;
function nextslide() {
      if(i == 3)
    {
        i=0;
    }
    if(j == 3)
    {
      j=0;
    }
    document.getElementById("fimage").src = image[i]; i++;
    document.getElementById("showname").innerHTML = fname[j]; j++;

};