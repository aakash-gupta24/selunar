
function AddUser(){
    let n=document.createElement("button")
    n.innerText=prompt("Enter the name","");
    n.onclick=function(){loadData(h.innerText);};
    document.getElementById("Users-side").appendChild(n);
}
function loadData(Uname){
    document.getElementById("Chat-Screen").innerHTML=Uname;
}