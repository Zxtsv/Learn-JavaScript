function selectContainer(){

    // 1
    document.getElementById("container").style.background = "red";
    
    // 2
    document.querySelector("#container").style.background = "blue";

    // 3
    let x = document.getElementsByClassName("second");
    console.log(x);

    // 4
    let a = document.querySelector("ol .third");
    console.log(a);
    
    // 5
    //document.querySelector("#container").innerHTML = "Hello Mau, no te escuchamos";

    // 6
    document.querySelector(".footer").classList.add("main");
    
    // 7
    document.querySelector(".footer").classList.remove("main");

    // 8,9 y 10
    let li = document.createElement("li");
    li.innerText = "four";
    document.querySelector("ul").appendChild(li);

    //Challengue
    document.querySelector(".footer").remove();
}

selectContainer();

// ! Challengue
$(document).ready(
    function(){
        $("ol li").each(
            function(){
                console.log($(this).text());
            }
        );
    }
);