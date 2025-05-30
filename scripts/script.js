var sonic = document.querySelector('img#sonic')
var spike = document.querySelector('img#spike')


document.addEventListener('keydown', jump);

var loop = setInterval(()=>{

    var spikePosition = spike.offsetLeft
    var sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','')

    
    if(spikePosition <= 90 && spikePosition > 0 && sonicPosition < 115){
        spike.style.animation = 'none'
        spike.style.left = `${spikePosition}px`

        sonic.style.animation = 'none'
        sonic.style.bottom = `${sonicPosition}px`

        sonic.src = 'images/dead.png'
        sonic.style.width = '115px'
        sonic.style.marginLeft = '30px'


        
    }

},10)

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