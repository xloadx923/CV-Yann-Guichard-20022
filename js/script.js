const button = document.querySelectorAll('.button');
const allResume = document.querySelectorAll('.resume');

function removeActive(){
    allResume.forEach(function(element){    element.classList.remove('active');});
}

/* Pour chaque bouton flèché */
button.forEach(function(element){
    element.addEventListener('click', function(event){
        removeActive();
        this.nextElementSibling.classList.toggle('active');
    });
});