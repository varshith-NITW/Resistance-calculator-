
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
function change_color5(select){
    document.getElementById("op5").style.backgroundColor=select.options[select.selectedIndex].textContent;
    
}
function change_color6(select){
    document.getElementById("op6").style.backgroundColor=select.options[select.selectedIndex].textContent;
}

function calculate() {
    var band1 = document.getElementById("op1").value;
    var band2 = document.getElementById("op2").value;
    var band3 = document.getElementById("op3").value;
    var band4 = document.getElementById("op4").value; 
    var band5 =document.getElementById("op5").value;
    var band6 =document.getElementById("op6").value;

  
    var sigFigs = parseInt(band1.toString() + band2.toString()+band3.toString());

  
    var resistance = sigFigs * Math.pow(10, parseInt(band4));

   
    
    var toleranceText = "";
    if (band5 == "10") {
        toleranceText = "5%";
    } else if (band5== "11") {
        toleranceText = "10%";
    }else if(band5=="0"){
        toleranceText="1%";
    }else if(band5=="1"){
        toleranceText="2%";
    }else if(band5=="5"){
        toleranceText="0.5%";
    }else if(band5=="6"){
        toleranceText="0.25%";
    }else if(band5=="7"){
        toleranceText="0.1%";
    }else if(band5=="8"){
        toleranceText="0.05%";
    }else{
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
   var ppm;
   if(band6=="0"){
    ppm=100;
   }else if(band6=="1"){
    ppm=50;
   }else if(band6=="2"){
    ppm=15;
   }else if(band6=="3"){
    ppm=25;
   }else if(band6=="6"){
    ppm=10;
   }else if(band6=="7"){
    ppm=5;
   }else{
    ppm=0;
   }

  var res=document.getElementById("result");
  res.textContent="RESISTANCE: " + displayValue + " ± " + toleranceText+","+ppm+"ppm/k";
   
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
    document.getElementById("op5").value=0;
    document.getElementById("op5").style.backgroundColor = "black";
    document.getElementById("op6").value=0;
    document.getElementById("op6").style.backgroundColor = "black";

    var res=document.getElementById("result");
  res.textContent="RESISTANCE: " + 0 + " ± " + "0%"+","+0+"ppm/k";
}