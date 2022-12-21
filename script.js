const submit = document.querySelector('.submit');
const firstScreen = document.querySelector('.first');
const secondScreen = document.querySelector('.second');
const span = document.querySelector('span');
const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');
const button3 = document.querySelector('.three');
const button4 = document.querySelector('.four');
const button5 = document.querySelector('.five');

button1.addEventListener('click', () => {
    span.innerText = button1.innerText
})

button2.addEventListener('click', () => {
    span.innerText = button2.innerText
})

button3.addEventListener('click', () => {
    span.innerText = button3.innerText
})

button4.addEventListener('click', () => {
    span.innerText = button4.innerText
})

button5.addEventListener('click', () => {
    span.innerText = button5.innerText
})


//Change screen when submit clicked
submit.addEventListener('click', () => {
    firstScreen.classList.add('display-none');
    secondScreen.classList.remove('display-none');
});

//Change text of span to match button
// chosenButton.forEach(button => {
//     button.addEventListener('click', function buttonClick {
//         console.log('clicked chosen')
//     })
// })