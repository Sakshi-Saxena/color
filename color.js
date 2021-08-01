var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
var main = document.querySelector('#main');



var button = document.querySelector('button');

button.addEventListener('click', function(){
    var redValue = red.value;
    var greenValue = green.value;
    var blueValue = blue.value;
    
    var colorFormatter = 'rgb('+redValue+', '+greenValue+' , '+blueValue+' )';
    main.style.backgroundColor = colorFormatter;
})