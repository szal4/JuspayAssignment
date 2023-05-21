export var moveSteps = () =>{
    var doc = document.getElementById("svg");
    if(doc.style.marginLeft == null || doc.style.marginLeft.length == 0){
        doc.style.marginLeft = '10px';
    }
    else{
    doc.style.marginLeft = 10 + parseInt(doc.style.marginLeft);
    } 
}

export var turn15Degclock = () =>{
    // transform: rotateZ(45deg);
    var doc = document.getElementById("svg");
    if(doc.style.transform == null || doc.style.transform.length == 0){
        doc.style.transform = 'rotateZ(15deg)';
    }
    else{
        let rotateX = parseInt(doc.style.transform.substring(8,doc.style.transform.search("deg"))) + 15;
        doc.style.transform = "rotateZ(" + rotateX + "deg)";
    } 
}

export var turn15DegAnticlock = () =>{
    // transform: rotateZ(45deg);
    var doc = document.getElementById("svg");
    if(doc.style.transform == null || doc.style.transform.length == 0){
        doc.style.transform = 'rotateZ(-15deg)';
    }
    else{
        var rotateX = parseInt(doc.style.transform.substring(8,doc.style.transform.search("deg"))) - 15; 
        doc.style.transform = "rotateZ(" + rotateX + "deg)";
    } 
}
export var pointIn90 = () =>{
    var doc = document.getElementById("svg");
    doc.style.transform = 'rotateZ(0deg)';
}
export var randomPosition = () => {
    var doc = document.getElementById("svg");
    var randomX = Math.random() * 400;
    var randomY = Math.random() * 550;
    doc.style.marginLeft = randomX;
    doc.style.marginTop = randomY;
}
export var changeSize = () =>{
    var doc = document.getElementById("svg");
    var width = 95.17898101806641;
    var height = 100.0415603637695;
    if(doc.style.width == null || doc.style.width  == 0 || doc.style.width.length == 0){
        doc.style.width = width - 5;
        doc.style.height = height - 5;
    }
    else{
        doc.style.width = parseFloat(doc.style.width) -5;
        doc.style.height = parseFloat(doc.style.height) - 5;
    }
}
export var setOriginalSize = () =>{
    var doc = document.getElementById("svg");
    var width = 95.17898101806641;
    var height = 100.0415603637695;
    if(doc.style.width != null && doc.style.width  != 0 && doc.style.width.length != 0){
        doc.style.width = width;
        doc.style.height = height;
    }
}

export var show = () =>{
    var doc = document.getElementById("svg");
    doc.style.display = "block";
}
export var hide = () =>{
    var doc = document.getElementById("svg");
    doc.style.display ="none";
}
