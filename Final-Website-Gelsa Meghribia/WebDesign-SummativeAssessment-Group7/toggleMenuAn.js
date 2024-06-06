let isHidd = true;

function toggleMenu(){
    const hidMenu = document.getElementById("NBMenu");

    if (isHidd==true){
        isHidd = false;
        hidMenu.style.display = "flex";
        hidMenu.style.flexDirection = "column";
    }
    else{
        isHidd = true;
        hidMenu.style.display = "none";
    }
}