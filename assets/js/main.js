let abreFecha = document.querySelector('.menu-item');


function menuToggle(){
    if(abreFecha.style.display === "none"){
        abreFecha.style.display = "block";
    }else{
        abreFecha.style.display = "none";
    }
}