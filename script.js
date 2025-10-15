function valid(){
    let validInput=t1.value;
    if(isNaN(validInput) || validInput==""){
        document.getElementById("nm").innerHTML="Must be Number";
    return false;//invalid
    }
    else
    {
        document.getElementById("nm").innerHTML="";
        return true;//valid
    }
}
 function handleValid(){
        if(valid()){
            check();
        }
        else{
            document.getElementById("res").innerHTML="";
        }
    }

function check(){
    var inputValue, type, result
    inputValue=+(t1.value);//input value
    type=tempType.value;//type

    //Fahrenheit to celcious
    if(type=="fahToCel") {
        //fTc=(inputValue-32)*5/9
        result=((inputValue-32)*5/9).toFixed(2)+" C";
    }
    
    // Celsius to Fahrenheit
    else if (type === "celToFeh") {
        result=((inputValue * 9) / 5 + 32).toFixed(2)+" F";
    }

    // Celsius to Kelvin
    else if (type === "celToKel") {
        result=((inputValue+273.15)).toFixed(2)+" K";
        
    }
   
//fahrenheit to kelvin
else if(type == "fahToKel"){
        result=((inputValue - 32)*5/9 + 273.15).toFixed(2)+" K";
  
}

//Invalid option
else {
  result = "Invalid Input";
}

document.getElementById("res").innerText = result;
}