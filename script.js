let button = document.querySelectorAll('.btn-check') //Get the object containing the button class '.btn-check'
let card = document.querySelectorAll('.card-container') //Get the object containing the project cards

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () { //Loop through all the buttons and add a listening event for a user click
        let dataFilter = this.getAttribute('button-target')

        for (let k = 0; k < card.length; k++) { //Loop through every card and hide it 
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if (card[k].getAttribute('card-group') == dataFilter) { //If the card category corresponds to the button pressed show it
                card[k].classList.add('active'); //Add the active css class
                card[k].classList.remove('hide'); //Remove the hide clss class
            }
        }
    })
}