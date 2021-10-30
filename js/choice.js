let string3;
try{
    string3=sessionStorage.getItem('currentUser');
}catch(ex){
string3="Hassan , "
}
console.log(string3);
if(string3==null){
    string3="Hassan , ";
} 
let name1=document.getElementById("name");

string3=string3.slice(0,string3.indexOf(','));
console.log(string3)
name1.innerHTML=string3.slice(0,string3.indexOf(" "))
console.log(string3)

function goto(name){
sessionStorage.setItem('quizName',name);
}
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 

}
