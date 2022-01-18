function getFormvalue(){
    let names = document.forms["form1"]["fname"].value;
    let lnames = document.forms["form1"]["lname"].value;
    console.log(names + " " + lnames);
}