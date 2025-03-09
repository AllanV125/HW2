/*
Name: Allan Vega
Date Created:02/08/2024
Date last modified: 02/08/2024
Version: 1.0
Description: Homework 2
*/
// Dynamic date js code
const d = new Date();
document.getElementById("today").innerHTML = d;
// name slider js code
let slider = document.getElementById("Range");
let output = document.getElementById("slider-ranger");
output.innerHTML = slider.value;
slider.oninput = function() 
{
    output.innerHTML = this.value; 
};

slider.oninput = function()
{
 output.innerHTML = this.value;
};
function validateDob()
{
 DOB = document.getElementById("dob");
 let DOB = document.getElementById("dob");
 let maxdate = new Date().setFullYear(new Date().getFullYear()-110);
 if (date > new Date())
 {
  document.getElementById("dob-error").innerHTML = "Date of Birth cannot be in the future"; DOB.value = "";
  DOB.value = "";
 } else if (date< new Date(maxdate))
   document.getElementById("dob-error").innerHTML = "Date of Birth cannot be more than 100 years ago"; dob.value = "";
   return false;
 }

function validateSsn()
{
const ssn = document.getElementById("ssn").value;
const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
if (ssnPattern.test(ssn))
{
 document.getElementById("ssn-error").innerHTML = "";
 return true;
}
else
{
 document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
 return false;
}
}


function validateZcode()
{
 const zcode = document.getElementById("zcode").value;
let zip = zcode.replace(/[^0-9]/g, "");
 if (!zip)
 {
   document.getElementById("zcode-error").innerHTML = "Zip code cannot be blank";
   return false;
 }
   if (zcode.length > 5)
   {
     zcode = zcode.substring(0, 5) + "-" + zcode.slice(5, 9);
   }
   else
   {
     zcode = zcode.slice(0, 5);
   }
   zipInput.value = zcode;
   document.getElementById("zcode").value = zcode;
   return true;
}
function validateEmail()
{
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailInput = document.getElementById("email");
    let email = emailInput.value;
    if (!email) {
        document.getElementById("email-error").innerHTML = "Email cannot be blank";
        return false;
    }
    if (!emailR.test(email))
    {
        document.getElementById("email-error").innerHTML = "Please enter a valid email";
        return false;
    }
    else
    {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

function validatePhone()
{
    let phone = document.getElementById("phone").value;
    if (!phone)
    {
        document.getElementById("phone-error").innerHTML = "Phone cannot be blank";
        return false;
    }
    phone = phone.replace(/[^0-9]/g, "");
    if (phone.length == 10)
    {
        phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    else
    {
        document.getElementById("phone-error").innerHTML = "Please enter a valid phone number";
        return false;
    }
    return true;
}
function validateUid()
{
    const uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;
    if (uid.length == 0)
    {
        document.getElementById("uid-error").innerHTML = "User ID must be at least 6 characters";
        return false;
    }
    if (!isNaN(uid.charAt(0)))
    {
        document.getElementById("uid-error").innerHTML = "User ID must start with a letter";
        return false;
    }
    let regex = /^[a-z0-9]+$/;
    if (!regex.test(uid))
    {
        document.getElementById("uid-error").innerHTML = "User ID must contain only letters and numbers";
        return false;
    }
    else if (uid.length < 6)
    {
        document.getElementById("uid-error").innerHTML = "User ID must be at least 6 characters";
        return false;
    }
    else if (uid.length > 12)
    {
        document.getElementById("uid-error").innerHTML = "User ID cannot be more than 12 characters";
        return false;
    }
    else
    {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}
function validatePassword(uid, pword) {
    let errorMessage = [];
    if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
    if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
    if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
    if (pword.includes(uid)) errorMessage.push("Password can't contain user ID");
    return errorMessage;
}

function validatePword()
{
    pword1= document.getElementById("pword1").value;
    pword2= document.getElementById("pword2").value;
    if (pword1 !== pword2)
    {
        document.getElementById("pword-error").innerHTML = "Passwords do not match";
        return false;
    }
    else
    {
        document.getElementById("pword-error").innerHTML = "";
        return true;
    }
}
function reviewInput()
{
  var formcontent = document.getElementById("signup-form");
  var formoutput = document.getElementById("form-output");
  for ( let i = 0; i < formcontnet.length; i++)
  {
   if (formcontnet.elements[i].value !== "Review")
   {
   switch ( formcontnet.elements[i].type)
   {
    case "checkbox":
        if (formcontnet.elements[i].checked)
        {
            formutput += ' <tr><td align="right">' + formcontent.elements[i].name + '</td><td>Yes</td></tr>';
        }
        break;
    case "radio":
        if (formcontnet.elements[i].checked)
        {
            formoutput += ' <tr><td align="right">' + formcontnet.elements[i].name + '</td><td>' + formcontnet.elements[i].value + '</td></tr>';
        }
        break;
        default:
            formoutput += ' <tr><td> align="right">' + formcontnet.elements[i].name + '</td><td>' + formcontnet.elements[i].value + '</td></tr>';
   }
   }
}

function removeReview() 
{
    document.getElementById("showInput").innerHTML = "";
}
}
