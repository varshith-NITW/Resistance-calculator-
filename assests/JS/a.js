

function change_color1(select){
    document.getElementById("op1").style.backgroundColor=select.options[select.selectedIndex].textContent;

}
function change_color2(select){
    document.getElementById("op2").style.backgroundColor=select.options[select.selectedIndex].textContent;
    
}
function change_color3(select){
    document.getElementById("op3").style.backgroundColor=select.options[select.selectedIndex].textContent;
    
}
function change_color4(select){
    document.getElementById("op4").style.backgroundColor=select.options[select.selectedIndex].textContent;
    
}


function calculate() {
    var band1 = document.getElementById("op1").value;
    var band2 = document.getElementById("op2").value;
    var band3 = document.getElementById("op3").value;
    var band4 = document.getElementById("op4").value; 
    

  
    var sigFigs = parseInt(band1.toString() + band2.toString());

  
    var resistance = sigFigs * Math.pow(10, parseInt(band3));


   
    var toleranceText = "";
    if (band4 == "10") {
        toleranceText = "5%";
    } else if (band4== "11") {
        toleranceText = "10%";
    }else if(band4=="0"){
        toleranceText="1%";
    }else if(band4=="1"){
        toleranceText="2%";
    }else if(band4=="5"){
        toleranceText="0.5%";
    }else if(band4=="6"){
        toleranceText="0.25%";
    }else if(band4=="7"){
        toleranceText="0.1%";
    }else if(band4=="8"){
        toleranceText="0.05%";
    }else {
        toleranceText = "Unknown";
    }

    
    var displayValue = resistance;
    if (resistance >= 1000000) {
        displayValue = (resistance / 1000000) + " MΩ";
    } else if (resistance >= 1000) {
        displayValue = (resistance / 1000) + " kΩ";
    } else {
        displayValue = resistance + " Ω";
    }

  var res=document.getElementById("result");
  res.textContent="RESISTANCE: " + displayValue + " ± " + toleranceText;
   
}

function reset(){
    document.getElementById("op1").value=0;
    document.getElementById("op1").style.backgroundColor = "black";
    document.getElementById("op2").value=0;
    document.getElementById("op2").style.backgroundColor = "black";
    document.getElementById("op3").value=0;
    document.getElementById("op3").style.backgroundColor = "black";
    document.getElementById("op4").value=0;
    document.getElementById("op4").style.backgroundColor = "black";
    var res=document.getElementById("result");
  res.textContent="RESISTANCE: " + 0 + " ± " + "0%";
}