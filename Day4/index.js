function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

    document.getElementById("btn").addEventListener("click", () => {  alert("Hey there you go!");});

    function touch() {
        document.getElementById("mine").innerHTML = "Chitresh Kumar";
    }

function changeIt(value) {
    console.log("The entering value is : " + value);    
    const val = value.toUpperCase();
    console.log("The entering value is : " + val);    
    // alert(val);
}