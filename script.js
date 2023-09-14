const form = document.getElementById("form1");

function getFormvalue() {
    //Write your code here
	let x = form["fname"].value+" "+form["lname"].value;
	alert(x);
}
