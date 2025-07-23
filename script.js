let root = document.documentElement;


document.querySelector('.slider').addEventListener('click',()=>{
    root.classList.toggle((root.classList[0])? "dark":"light");
})