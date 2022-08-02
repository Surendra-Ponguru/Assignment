function load()
{
    alert("Open login Page");
}
function login()
{
var n=document.getElementById("a1").value;
var name=n.length;
var p=document.getElementById("b1").value;
var pass=p.length;
if(name!="" && p!="")
{
     window.open("Home.html");
}else
{
    alert("Please Enter Valid Credentials");
}
}
