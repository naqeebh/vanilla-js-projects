// // Event delegation 

document.querySelector('#sports').addEventListener('click', function(e){

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target; 
    
    if (target.matches('li')) {
        target.style.backgroundColor = 'violet';
    }

})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innertext = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);





// const basketball = document.querySelector('#basketball');

// basketball.style.color = 'green';

// console.log(basketball)



// const boxing = document.querySelector('.boxing');

// boxing.style.color = 'pink';

// console.log(boxing);



