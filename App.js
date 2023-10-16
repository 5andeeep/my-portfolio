const menu = document.getElementById('menu');
function showMenu(){
    menu.classList.toggle('active');
}


window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if(window.scrollY > 130){
        document.querySelector('.navbar').style.background = 'black';
        document.querySelectorAll('.navbar .links a')[0].style.color = 'white';
        document.querySelectorAll('.navbar .links a')[1].style.color = 'white';
        document.querySelectorAll('.navbar .links a')[2].style.color = 'white';
        document.querySelector('.navbar .menuBar-icon').style.color = "white";
        document.querySelector('.logo a').style.color = 'white';
    }
    else{
        document.querySelector('.navbar').style.background = 'white';
        document.querySelectorAll('.navbar .links a')[0].style.color = 'black';
        document.querySelectorAll('.navbar .links a')[1].style.color = 'black';
        document.querySelectorAll('.navbar .links a')[2].style.color = 'black';
        document.querySelector('.navbar .menuBar-icon').style.color = "black";
        document.querySelector('.logo a').style.color = 'black';
    }
})