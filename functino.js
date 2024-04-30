//1. greet function
function greet (name){
    console.log("Hello",name); 
}
greet ("Dev")


//2. Area of Reactangle
function Area(length,width){
    var A= length*width;
    console.log(A)
}
Area(5,6)


//3. Temperature converter celcius to fahrenheit
function celciusToFahrenheit(celciusTemperature){
    let fahrenheitTemperature = (celciusTemperature * 9/5) + 32 ;
    console.log(`${celciusTemperature}°C = ${fahrenheitTemperature}°F`)
}
celciusToFahrenheit(35)

//4. Temperature converter fahrenheit to celcius 
function fahrenheitToCelcius (fahrenTemp){
    let celciusTemperature = (fahrenTemp - 32) * 5/9 ;
    console.log(`${fahrenTemp}°F  = ${celciusTemperature}°C`)
}
fahrenheitToCelcius(95)



// Calculator
// 1.Addition
function addition(a,b){
    let add = a+b;
    console.log(add)
    }
    addition (3,2)

    // 2.substraction
    function substraction(a,b){
    let subs = a-b;
    console.log(subs)
    }
    addition (10,2)

    // 3.multiplication
    function multiplication(a,b){
        let multiply = a*b;
        console.log(multiply)
    }
    multiplication (9,2)

    // 4.Division
    function division(a,b){
        let divide = a/b;
        console.log(divide)
    }
    division(5,3)



