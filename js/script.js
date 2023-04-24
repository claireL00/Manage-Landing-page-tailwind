const btn=document.getElementById('menu-btn')
const nav=document.getElementById('menu')

btn.addEventListener('click',()=>{
    btn.classList.toggle('open'); //toggle: if not there it will add, if it is it will remove
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})