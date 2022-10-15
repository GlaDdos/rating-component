const selection_list = document.getElementById('selection-list');
const submit_button = document.getElementById('submit-button');

selection_list.onclick = function(event) {
    if(event.target.value){
        let selection = selection_list.getElementsByClassName('selected');
        selection[0].classList.remove('selected');
        event.target.classList.add('selected');
    }
}

submit_button.onclick = function(event) {
    let vote = document.getElementById('vote');
    let voted = document.getElementById('voted');

    vote.style.display = 'none';
    voted.style.display = 'flex';

    setRating();
}

function getSelectedValue() {
    const selection = selection_list.getElementsByClassName('selected');
    return selection[0].value;
}

function setRating() {
    let rating = document.getElementById('rating');
    rating.innerText = getSelectedValue();
}