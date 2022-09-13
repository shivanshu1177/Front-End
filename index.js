const inputE = document.querySelector('input');

const buttonE = document.querySelector('button');

const UL = document.querySelector('ul');

add_button.addEventListener('click', function() {
    const li = document.createElement('li');
    li.innerText = inputE.value;
    UL.appendChild(li);
    inputE.value = '';
    

    li.addEventListener('click', function() {
        li.remove();
    });

})

