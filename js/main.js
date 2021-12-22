function openModal() {
    var modal = document.getElementById('modal-nwh');
    if(modal.classList.contains('hide')){
        modal.classList.remove('hide');
    }
}

function closeModal(){
    var modal = document.getElementById('modal-nwh');
    if(!modal.classList.contains('hide')){
        modal.classList.add('hide');
    }
}
