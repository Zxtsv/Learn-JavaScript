function getNumberLinks(){
    let longitud = document.links.length;
    let primero = document.links[0].href;
    let ultimo = document.links[longitud-1].href;

    alert("Hay " + longitud + " links" + "\n \n" +
    "El primer enlace --> " + primero + "\n \n" +
    "El ultimo enlace --> " + ultimo);
}
