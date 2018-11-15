/* 
JAVASCript File -
Right now, this is just a placeholder for the JS code that will come later
I put it in here so that I would start standardize the place and file 
structure for html/css/js projects
*/

/* Wait until window is loaded to bind elements */
window.onload = function() {

    document.getElementById("submit").addEventListener("click", function () { emailUser(); });
  
};

// Grab the email from the form and invoke the mail app to send the mail
function emailUser() {
    var emailString = document.getElementById("emailAddr").value + "?Subject=Paul Linck's Email Form Submission";

    document.getElementById('infoSubmit').action = 'mailto:' + emailString;

}
