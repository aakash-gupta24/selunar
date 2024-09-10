function AddUser(){
    let n=document.createElement("button")
    n.innerText=prompt("Enter the name","");
    //n.onclick=function(){loadData(h.innerText);};
    document.getElementById("AllUsers").appendChild(n);
}
function loadData(Uname){
    document.getElementById("Chat-Screen").innerHTML=Uname;
}
//Enter to send function

// Get the input field
