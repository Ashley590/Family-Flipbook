var names=["The Basisthas","pita","ma","me","bro"];
var photos=["us.JPG","pita.jpg","ma.jpg","me.jpg","bro.JPG"];
var i=0;
function next(){
    document.getElementById("us").src=photos[i];
    document.getElementById("n1").innerHTML=names[i];
    i++;
    if(i==5){
        i=0;
    }
}
