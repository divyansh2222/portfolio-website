var flip=  document.querySelector(".flip")
var menu=document.querySelector(".navi img")

 var flag=0;
menu.addEventListener("click",()=>{
   flip.style.display="block";
   if (flag==0){
    flip.style.display="block";
    flag=1;
   }
   else{
    flip.style.display="none";
    flag=0;
   }
})