var menuButton = document.getElementById('menuButton');
var menuColapseDown = document.getElementById('menuColapseDown');

 menuButton.addEventListener('click',() =>{
    console.log('cliquei')
    if(menuColapseDown.classList.contains('hidden')){
        menuColapseDown.classList.remove('hidden')
    } else {
        menuColapseDown.classList.add('hidden')
    }

})





