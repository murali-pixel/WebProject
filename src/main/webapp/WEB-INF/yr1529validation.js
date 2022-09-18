function validateBox() {
 let a = document.forms["invForm"]["ename"].value;
 let b = document.forms["invForm"]["date"].value;
 let c = document.forms["invForm"]["time"].value;
 let d = document.forms["invForm"]["loc"].value;
 let e = document.forms["invForm"]["desc"].value;
 if (a == "") {
 alert( "Please provide Event name!" );
 document.invForm.ename.focus() ;
 return false;

 }
 if (b == "") {
 alert( "Please provide Date!" );
 document.invForm.date.focus() ;
 return false;

 }
 if (c == "") {
 alert( "Please provide Time!" );
 document.invForm.time.focus() ;
 return false;

 }
 if (d == "") {
 alert( "Please provide Loc!" );
 document.invForm.loc.focus() ;
 return false;


 }
 if (e == "") {
 alert( "Please provide Description!" );
 document.invForm.desc.focus() ;
 return false;
}
return true;
}
function isOneChecked ( ) {
if(document.querySelector('input[name="select"]:checked') == null) {
alert("You need to select an option!");
return false;
 }
 return true;
}
function stringLengthCheck(){
if (a.length > 20){
alert ("Name should be less than 20 characters");
return false;
}
return true;
}