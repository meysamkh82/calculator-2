let input = document.getElementById('inputCal');
let bodyCal = document.querySelector('.body-cal');

bodyCal.addEventListener('click',function(event){
    if(event.target.textContent === '='){
        input.value = eval(input.value);
    }
    switch (event.target.textContent){
        case '1' : input.value += "1";break;
        case '2' : input.value += "2";break;
        case '3' : input.value += "3";break;
        case '4' : input.value += "4";break;
        case '5' : input.value += "5";break;
        case '6' : input.value += "6";break;
        case '7' : input.value += "7";break;
        case '8' : input.value += "8";break;
        case '9' : input.value += "9";break;
        case '0' : input.value += "0";break;
        case '00' : input.value += "00";break;
        case '000' : input.value += "000";break;
        case '+' : input.value += "+";break;
        case '-' : input.value += "-";break;
        case '÷' : input.value += "/";break;
        case '×' : input.value += "*";break;
        case '%' : input.value += "%";break;
        case '.' : input.value += ".";break;
    }
    if(event.target.textContent === "AC"){
        input.value = '';
    }if(event.target.textContent === "→"){
        input.value = input.value.replace( input.value[parseInt(input.value.length)-1],'');
    }if(event.target.textContent === "√"){
        input.value = Math.sqrt(input.value)
    }if(event.target.textContent === "+/-"){
        input.value = parseFloat(input.value) * -1;
    }
})