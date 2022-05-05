function validateForm() {
    let x = document.forms["regfrm"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  
  function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  
    return true;
   }
   function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="tedd" && password=="1234"){
        alert("login successful");
        widnow.location.href="index.html";
        return true;
    }
    else{
        alert("login failed");
        window.location.href="login.html";
        return false;
    }
}
