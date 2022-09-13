const input1 = document.getElementById('ip1');
const input2 = document.getElementById('ip2');
const add_button = document.getElementById('add_button');
const subtract_button = document.getElementById('subtract_button');
const multiply_button = document.getElementById('multiply_button');
const divide_button = document.getElementById('divide_button');
const result = document.getElementById('result');

add_button.addEventListener('click', function() {
    result.innerText = Number(ip1.value) + Number(ip2.value);
});

subtract_button.addEventListener('click', function() {
    result.innerText = Number(ip1.value) - Number(ip2.value);
});

multiply_button.addEventListener('click', function() {        
    result.innerText = Number(ip1.value) * Number(ip2.value);
});

divide_button.addEventListener('click', function() {    
    result.innerText = Number(ip1.value) / Number(ip2.value);
}); 