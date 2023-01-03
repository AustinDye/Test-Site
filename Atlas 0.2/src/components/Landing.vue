
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
        <div class="ps-5 col-12 text-center d-flex justify-content-center align-items-center " >
            <img src="../assets/teamlogo.png" alt="">
            <!--<p class="intro-text" id="introtext">         
                Pleiades
            </p>
            <p class="sub-header" id="sub-text">ProjectWorks</p>-->
        </div>
            <div id="moon" class="background-shape align-self-center"></div>
            <div id="moon2" class="background-shape-2 align-self-center"></div>
             
    </div>
  
</div>
<div class="dumbpy"></div>



</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');


.container{
    padding-left: 10vw;
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
    left: 37vw;
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
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255));
    animation: glow 5s infinite;
    transition: all 1000ms;
    transition: margin 200ms;
 

}

.background-shape-2 {


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

@media only screen and (max-width: 600px) {
    .intro-text{
      
        font-size: 3em;
      
    
       
    }

    .sub-header{
       
        font-size: 2em;
       
    }

    #starfield {
        opacity: 0;
        transition: all 1s;
        width: 100vw;
        height: 100vh;
    }
}


@media only screen and (min-width: 600px) {

}




</style>