//document object model 
//on experimenting 1

const secondGrid = document.getElementById("content");

let changeTheme = document.getElementById("theme");
changeTheme.addEventListener("click",()=>{
   if(secondGrid.style.backgroundColor==="black")
   {
      //here one imp logic exist that is if u keep azure in black in above u will see it....
      secondGrid.style.backgroundColor="azure";
      secondGrid.style.color="black";
   }
   else{
      secondGrid.style.backgroundColor="black";
      secondGrid.style.color="azure";
   }
  });
let wildCard = document.querySelector("*");

let changeFont = document.getElementById("font");
changeFont.addEventListener("click",()=>{
   if(wildCard.style.fontSize!="23px")
   {
      wildCard.style.fontSize="23px";
   }
   else{
      wildCard.style.fontSize="";
  }});

