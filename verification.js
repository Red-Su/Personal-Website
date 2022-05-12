function check() {
    // var fname = document.getElementById("fname").value
    // var lname = document.getElementById("lname").value
    // var email = document.getElementById("email").value
    // // var message = document.getElementById("msg").value
    // var regx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    

    // if (regx.test(email)) {
    //     document.getElementById("errors").innerHTML = ""
    // } else {
    //     document.getElementById("errors").innerHTML = "Invalid email"
    // }
    // if (fname == "" && lname == "" && email == "") {
    //     document.getElementById("errors").innerHTML = "The fields are empty"
    //     return false
    // } else {
    //     document.getElementById("errors").innerHTML = ""

    //     if (fname == "") {
    //         document.getElementById("errors").innerHTML = "The first name field is empty"
    //         return false
    //     } else {
    //         document.getElementById("errors").innerHTML = ""
    //         if (fname.length <= 1) {
    //             document.getElementById("errors").innerHTML = "First name must contain 2 or more letters"
    //             return false
    //         }
    //     }

    //     if (lname == "") {
    //         document.getElementById("errors").innerHTML = "The last name field is empty"
    //         return false
    //     } else {
    //         document.getElementById("errors").innerHTML = ""
    //         if (lname.length <= 1) {
    //             document.getElementById("errors").innerHTML = "Last name must contain 2 or more letters"
    //             return false
    //         }
    //     }

    //     if (regx.test(email)) {
    //         document.getElementById("errors").innerHTML = ""
    //     } else {
    //         document.getElementById("errors").innerHTML = "Invalid email"
    //     }



    
   
    // }
    

    



}
function sendMail()
{
    var body = "lol"
    var SubjectLine = "lol" 
    window.location.href = "mailto:mail@example.com?subject="+SubjectLine+"&body="+body;
}   