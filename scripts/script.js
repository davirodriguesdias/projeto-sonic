var sonic = document.querySelector('img#sonic')
var spike = document.querySelector('img#spike')
var palm = document.querySelector('img#palm')
var score = document.querySelector('div#score')
var scorePoint = 0





document.addEventListener('keydown', jump);

var loop = setInterval(()=>{

    var spikePosition = spike.offsetLeft
    var palmPosition = palm.offsetLeft
    var sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','')

    
    if(spikePosition <= 90 && spikePosition > 0 && sonicPosition < 195){
        spike.style.animation = 'none'
        spike.style.left = `${spikePosition}px`

        sonic.style.animation = 'none'
        sonic.style.bottom = `${sonicPosition}px`

        palm.style.animation = 'none'
        palm.style.left = `${palmPosition}px`



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
    scorePoint = scorePoint + 1
    score.innerHTML = `SCORE: ${scorePoint}`
    
    // if(scorePoint >= 20){
    //     spike.style.animationDuration = '1.4s'
    // }



    setTimeout(()=>{
        sonic.style.width = '150px'
        sonic.style.marginLeft = '0'
        sonic.classList.remove('jump')
        sonic.src = 'images/sonic.gif'

    }, 750)



}

