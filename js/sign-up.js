function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Invalid Name!");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Invalid name!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>30){
        seterror("email", "*Invalid Email!");
        returnval = false;
    }

   
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

        
        seterror("pass", "*Invalid Password !");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password not match!");
        returnval = false;
    }

    
    return returnval;
}