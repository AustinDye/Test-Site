
<script>

export default {
  data() {
    return {
      stars: 0,
      canvas: {},
      context: {}
     
    }
  },
  mounted() {

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }     

    let canvas = document.getElementById("starfield"),
    context = canvas.getContext("2d"),
    stars = 1000,
    colorrange = [0,60,240];

    for (let i = 0; i < stars; i++) {
        let x = Math.random() * canvas.offsetWidth;
        let y = Math.random() * canvas.offsetHeight,
        radius = Math.random() * 1.2,
        hue = colorrange[getRandom(0,colorrange.length - 1)],
        sat = getRandom(50,100);
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
        context.fill();
    }

    let test2 = document.getElementById('moon2');
    let transitionEl = document.getElementById('moon2');
    let introText = document.getElementById('introtext');
    let introSub = document.getElementById('sub-text')

    window.addEventListener('scroll', function(e) {
    
        let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        test2.style.opacity = Math.max(0, Math.min(1, -scroll / 500 + 1));
        introText.style.opacity = Math.max(0, Math.min(1, -scroll / 100 + 1));
        introSub.style.opacity = Math.max(0, Math.min(1, -scroll / 180 + 1));

        if(scroll > 10)
        {
            transitionEl.style.margin = scroll.toString() +  'px';
           
        }
        if(scroll > 20)
        {
            introText.style.color = 'black';
        }
        else {
            transitionEl.style.margin = '0';
            introText.style.color = 'white';
        }
    });


   

}

}

</script>

<template>
<canvas id="starfield" height="800px" width="800px"></canvas>

<div class="container d-flex justify-content-center align-items-center" >
    <div class="row justify-content-center ">
        <div class="ps-5 col-12 text-center " >
            <p class="intro-text" id="introtext">         
                Pleiades
            </p>
            <p class="sub-header" id="sub-text">ProjectWorks</p>
        </div>
            <div id="moon" class="background-shape align-self-center"></div>
            <div id="moon2" class="background-shape-2 align-self-center"></div>
             
    </div>
  
</div>
<div class="dumbpy"></div>



</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');

.dumbpy {
    height: 100vh;
}

canvas {
  
    background: black;
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
}

.intro-text{
    padding-top:25vh ;
    color: white;
    opacity: 1;
    z-index: 2;
    font-family: 'Ultra', sans-serif;
    text-shadow:
    /* White glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff;
    font-size: 6em;
    transition: color .5s;
}

.sub-header{
    font-family: 'Ultra', sans-serif;
    color: white;
    font-size: 3em;
}

.background-shape, .background-shape-2{
    top: 10vh;
    width: 40vw; 
    height: 40vw; 
    border-radius: 50% 50% 50% 50%;
    z-index: -1;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    overflow: hidden;
    position: fixed;
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
    animation: glow 5s infinite;
    transition: all 200ms;
    
}
.background-shape-2 {

    background-color: black;
}

.guide-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
 
}

@keyframes glow {
    0% {
        filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
    }

    50% {
        filter: drop-shadow(0px 0px 10px rgb(255, 255, 255)) ;
    }

    100%{
        filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
    }
}




</style>