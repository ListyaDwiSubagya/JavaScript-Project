function openModal(imgSrc){
    let modal = document.getElementById('myModal');
    let modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = imgSrc
}

function closeModal(){
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
}