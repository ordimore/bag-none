let buttonmore = document.getElementById("show-more");
let cssrow3 = document.getElementById("product-row3");
let containerproduct = document.getElementById("container-product");
//buttonmore.addEventListener("click",row3visible());
function row3visible(){
    containerproduct.style.height = "999px";
    cssrow3.style.visibility = "visible";
    buttonmore.style.visibility = "hidden";
}
