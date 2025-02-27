/*
Name: Allan Vega
Date Created:02/08/2024
Date last modified: 02/08/2024
Version: 1.0
Description: Homework 1
*/
// Dynamic date js code
const d = new Date();
let text = new Date();
document.getElementById("today").innerHTML = text;
// name slider js code
let slider = document.getElementById("Range");
let output = document.getElementById("slider-ranger");
output.innerHTML = slider.value;


slider.oninput = function()
{
 output.innerHTML = this.value;
};
function validateDob()
{
 DOB = document.getElementById("dob");
 let date= new Date(DOB.value);
 let maxdate = new Date().setFullYear(new Date().getFullYear()-100);
 if (date > new Date())
 {
  document.getElementById("dob-error").innerHTML = "Date of Birth cannot be in the future"; dob.value = "";
  return false;
 } else if (date< new Date(maxdate))
 {
   document.getElementById("dob-error").innerHTML = "Date of Birth cannot be more than 100 years ago"; dob.value = "";
   return false;
 }
 else
 {
   document.getElementById("dob-error").innerHTML = ""; return true;
 }
}
function validateSsn()
{
const ssn = document.getElementById("ssn").value;
const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
if (ssnPattern.test(ssn))
{
 document.getElementById("ssn-error").innerHTML = "";
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
let zip = zipInput.value.replace(/[^0-9]/g, "");
 if (!zipcode)
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







