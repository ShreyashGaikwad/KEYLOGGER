
// let vari=setInterval(anim,100);
// let a=0;
// function anim(){
//     if(a==190){
//         clearInterval(vari);
//     }
//     var target=document.getElementById('small');
//     a+=10;
//     target.style.marginLeft=a+'px';
//     target.style.marginTop=a+'px';
// }
const startbtn=document.getElementById("startbtn");
const stopbtn=document.getElementById("stopbtn");
const left=document.getElementById("text1");
const right=document.getElementById("text2");

startbtn.addEventListener("click",()=>{
    
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);
    startbtn.disabled=true;
    stopbtn.disabled=false;
    
})
function handledown(event){
    left.textContent=`Key '${event.key}' is pressed down`;
    right.textContent=`Key is down`;
}

function handleup(event){
    left.textContent=`Key '${event.key}' is pressed up`;
    right.textContent=`Key is up`;
}


// startbtn.addEventListener("click",()=>{
//     alert("clicked");
//     document.addEventListener("keydown",handledown);
//     document.addEventListener("keyup",handleup);
//     function handledown(event){
//         left.textContent=`key ${event.key} is pressed down`;
//         right.textContent=`key is down`;
//     }
//     function handleup(event){
//         left.textContent=`key ${event.key} is pressed up`;
//         right.textContent=`key is up`;
//     }
// })

stopbtn.addEventListener("click",()=>{
    left.textContent="";
    right.textContent="";
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    startbtn.disabled=false;
    stopbtn.disabled=true;
})
// alert("clicked finally" )

