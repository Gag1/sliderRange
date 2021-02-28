// dom requests 
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

// the function about change background color when we click on bckColorBtn
$("#bckColorButton").click(function(){ 
         $('#red').on('input',onChangeRangeBackground);
         $('#green').on('input',onChangeRangeBackground);
         $('#blue').on('input',onChangeRangeBackground);  
 })


// the function about change text color when we click on bckColorBtn

$("#txtColorButton").click(function(){
    $('#red').on('input',onChangeRangeColorText);
    $('#green').on('input',onChangeRangeColorText);
    $('#blue').on('input',onChangeRangeColorText);
  
})


// controller (range) backgroundColor
function onChangeRangeBackground(){
     const myColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
     document.body.style.backgroundColor = myColor;
    $('#colorOutput').html(myColor)
}

// controller (range) colorText
function onChangeRangeColorText(){
    const myColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
    const p = document.querySelector('.text p')
    p.style.color = myColor
}

