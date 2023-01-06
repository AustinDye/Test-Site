
<script>
import router from '../router'
export default {
    
  data() {
    return {
      stars: 0,
      canvas: {},
      context: {}
     
    }
  },
  mounted() {

    let test2 = document.getElementById('moon');
    let transitionEl = document.getElementById('moon2');
    let starfield = document.getElementById('starfield');
    window.addEventListener('scroll', function(e) {
    
        let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        test2.style.opacity = Math.max(0, Math.min(1, -scroll / 500 + 1));
        transitionEl.style.opacity = Math.max(0, Math.min(1, -scroll / 1200 + 1));
        transitionEl.style.marginTop = scroll.toString() +  'px';
   
    });


   

}

}

</script>

<template>


<div class="container d-flex justify-content-center align-items-center" >
    <div class="row justify-content-center ">
        <div class="ps-5 col-12 text-center d-flex justify-content-center align-items-center" >
            <img src="../assets/teamlogo.png" alt="">
            <!--<p class="intro-text" id="introtext">         
                Pleiades
            </p>
            <p class="sub-header" id="sub-text">ProjectWorks</p>-->
        </div>
            <div id="moon" class="space-circle align-self-center"></div>
            <div id="moon2" class="space-circle-2 align-self-center"></div>
             
    </div>
  
</div>
<div class="dumbpy"></div>



</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');


.container{
    padding-left: 25vw;
    padding-right: 10vw;
}
.dumbpy {
    height: 100vh;
}

canvas {
  
    background-color: #32295579;
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
}

img{
    top: 30vh;
    left: 45vw;
    color: white;
    width: 25vw;
    position: absolute;
    opacity: 1;
    z-index: 2;
    font-family: 'Ultra', sans-serif;
    transition: all .5s;
}

.sub-header{
    font-family: 'Ultra', sans-serif;
    color: white;
    font-size: 3em;
     text-shadow:
    /* White glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff;
}

.space-circle, .space-circle-2{
    top: 20vh;
    width: 35vw; 
    height: 35vw; 
    border-radius: 50% 50% 50% 50%;
    z-index: -1;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    overflow: hidden;
    position: fixed;
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255));
    animation: glow 5s infinite;
    transition: all 1000ms;
    transition: margin 200ms;

 

}

.space-circle-2 {


    background-color: #241e3e;
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

@media only screen and (max-width: 1024px) {
    img {
        width: 60vw;
        left: 20vw;
        top: 30vh;
    }
    .space-circle, .space-circle-2{
        top: 20vh;
        width: 80vw; 
        height: 80vw; 
    }
}

@media only screen and (max-width: 600px) {
    img {
        width: 80vw;
        left: 10vw;
        top: 10vh;
    }
    .space-circle, .space-circle-2{
        top: 40vh;
        width: 60vw; 
        height: 60vw;
    }
}





</style>