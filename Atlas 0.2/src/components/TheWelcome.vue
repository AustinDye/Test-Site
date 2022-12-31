
<script>
import KUTE from 'kute.js'
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
    var canvas = document.getElementById("starfield"),
    context = canvas.getContext("2d"),
    stars = 1000,
    colorrange = [0,60,240];
    for (var i = 0; i < stars; i++) {
        var x = Math.random() * canvas.offsetWidth;
        let y = Math.random() * canvas.offsetHeight,
        radius = Math.random() * 1.2,
        hue = colorrange[getRandom(0,colorrange.length - 1)],
        sat = getRandom(50,100);
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
        context.fill();
    }

    var test = document.getElementById('moon');
window.addEventListener('scroll', function(e) {
  
  var scroll = window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop || 0;
  test.style.opacity = Math.max(0, Math.min(1, -scroll / 400 + 1));
});


const firstTween= KUTE.fromTo(
    '#primary-wave-1',
    { path: '#primary-wave-1' },
    { path: '#secondary-wave-2' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();

const secondTween= KUTE.fromTo(
    '#primary-wave-2',
    { path: '#primary-wave-2' },
    { path: '#secondary-wave-1' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();

const thirdTween= KUTE.fromTo(
    '#primary-wave-3',
    { path: '#primary-wave-3' },
    { path: '#secondary-wave-1' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();


}


  
}

</script>

<template>
<div class="container d-flex justify-content-center align-items-center p-5" >
    <canvas id="starfield" width="750" height="500"></canvas>
    <div class="row">
        <div class="col-8 d-flex justify-content-center ">
            <p class="intro-text"><i class=""></i> <br>Shine bright amidst a sea of stars</p>
        </div>
        <div id="moon" class="background-shape align-self-center"></div>
    </div>
    <div class="custom-shape-divider-bottom-1672475196">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path id="primary-wave-1" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path id="primary-wave-2" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path id="primary-wave-3" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            <path id="secondary-wave-1" style="visibility: hidden" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path id="secondary-wave-2" style="visibility: hidden" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path id="secondary-wave-3" style="visibility: hidden" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div>
   
    
</div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');

.custom-shape-divider-bottom-1672475600 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1672475600 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 57px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1672475600 .shape-fill {
    fill: #FFFFFF;
}


.custom-shape-divider-bottom-1672475196 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1672475196 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 131px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1672475196 .shape-fill {
    fill: #F3F3F3;
}

.before-enter {
    opacity: 1;
    transition: 1s;
}
.intro-text{
    color: white;
    opacity: 1;
    font-family: 'Ultra', sans-serif;
   
    text-shadow:
    /* White glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff;
    font-size: 5em;
    
}

.background-shape{
    width: 10vw; 
    height: 10vw; 
    border-radius: 50% 50% 50% 50%;
    z-index: -1;
    background-image: url('../assets/580b585b2edbce24c47b270b.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    overflow: hidden;
    position: fixed;
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) invert(20%);
    
    right: 5%;
    top: 25%;
  
}


/*.background-shape:before {
    border-radius: 50% 50% 50% 50%;
    content:"";
    display:block;
    width: 30vw;
    height: 30vw;
    background: rgba(0, 0, 0, 0);
    z-index: 2;
    animation: move-crescent 10s infinite;
    background-image: url('https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.jpg?s=612x612&w=0&k=20&c=dh7eWJ6ovqnQZ9QwQQlq2wxqmAR7mgRlQTgaIylgBwc=');
   
}
*/

.background-image {
    height: 30vh;
    width: 100vw;
    margin-top: 40vh;
 /*background-image: url('https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.jpg?s=612x612&w=0&k=20&c=dh7eWJ6ovqnQZ9QwQQlq2wxqmAR7mgRlQTgaIylgBwc=');
   */
   background: #EFCB68;

}

img {
    position: fixed;
    top: 18vh;
  
}

canvas {
    top: 10vh;
    background: black;
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
}

@keyframes move-crescent {
    
       
        
    
}
</style>
