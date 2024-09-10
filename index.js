function AddUser(){
    let n=document.createElement("button")
    n.innerText=prompt("Enter the name","");
    n.onclick=function(){loadData(h.innerText);};
    document.getElementById("Users-side").appendChild(n);
}
function loadData(Uname){
    document.getElementById("Chat-Screen").innerHTML=Uname;
}
//Enter to send function

// Get the input field
const inputField = document.getElementById('UserData');

// Add an event listener for the 'keydown' event
inputField.addEventListener('keydown', function(event) {
    // Check if the Enter key (key code 13) is pressed
    if (event.key === 'Enter') {
        // Prevent the default action (such as form submission)
        event.preventDefault();
        // Get the value of the input field
        const inputValue = inputField.value;
        // Display the value
        
        US();
        // Clear the input field
        inputField.value = '';
    }
});

//End of Enter to send function
