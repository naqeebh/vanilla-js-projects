// DOM Manipulation 

// Add Event Listeners 

// element.eventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('OMG babes, I just love JS!')
}

buttonTwo.addEventListener("click", alertBtn);

// MouseOver Event Listener

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'pink';
};

newBackgroundColor.addEventListener("mouseover", changeBgColor);


