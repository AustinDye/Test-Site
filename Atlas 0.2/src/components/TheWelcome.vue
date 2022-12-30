
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

}

  
}






</script>

<template>
<div class="container d-flex justify-content-center align-items-center p-5">
    <canvas id="starfield" width="750" height="500"></canvas>
    <div class="row">
    <div class="col-8">
        <p class="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="col-4">
        <div class="background-shape"></div>
    </div>
</div>
   
</div>
</template>

<style scoped>
.intro-text{
    color: white;
    letter-spacing: .2em;
    font-size: 3.5em;
}

.background-shape{
    width: 40vw; 
    height: 40vw; 
    border-radius: 50% 50% 50% 50%;
    position: absolute;
    background: rgb(26, 0, 78);
    padding: .2em;
    right: 10em;
    z-index: -1;
    background-image: url('../assets/580b585b2edbce24c47b270b.png');
    background-repeat: no-repeat;
    background-position: center;
}

.background-shape:before {
    border-radius: 50% 50% 50% 50%;
    content:"";
    display:block;
    width: 37vw;
    height: 37vw; 
    background: rgba(178, 178, 178, 0);
    /*background-image: url('https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.jpg?s=612x612&w=0&k=20&c=dh7eWJ6ovqnQZ9QwQQlq2wxqmAR7mgRlQTgaIylgBwc=');
   */
}

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

@keyframes rotate-crescent {
    
}
</style>
