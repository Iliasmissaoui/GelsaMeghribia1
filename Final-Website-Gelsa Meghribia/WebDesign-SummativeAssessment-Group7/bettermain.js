function trigger(option){
    let HBox = document.getElementById("help-support").style;
    let DBox = document.getElementById("delivery-services").style;

    if(option=='Help'){
        HBox.display = "block";
        DBox.display = "none";
    }
    if(option=='Delivery'){
        DBox.display = "block";
        HBox.display = "none";
    }
}