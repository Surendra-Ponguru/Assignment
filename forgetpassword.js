function forget()
{
    var name=document.getElementById("a1").value;
    var n=name.length;
    var pass=document.getElementById("a2").value;
    var p=pass.length;
    if(n!="" && p!="")
    {
        window.open("Openpage.html");
    }

}