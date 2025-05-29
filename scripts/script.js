var sonic = document.querySelector('img#sonic')

document.addEventListener('keydown', jump);

function loop = setInterval()

function jump() {
    sonic.style.width = '90px'
    sonic.style.marginLeft = '30px'
    sonic.classList.add('jump')
    sonic.src = 'images/spin.gif'


    setTimeout(()=>{
        sonic.style.width = '150px'
        sonic.style.marginLeft = '0'
        sonic.classList.remove('jump')
        sonic.src = 'images/sonic.gif'

    }, 750)



}