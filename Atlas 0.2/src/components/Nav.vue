
<script>

export default {
  mounted() {


    let landingDot = document.getElementById('dot-one');
    let aboutDot = document.getElementById('dot-two');
    let contactDot = document.getElementById('dot-three');
    let body = document.getElementById('body');
  
    window.addEventListener('scroll', function(e) {
    
        let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if(scroll > 400)
        {
            landingDot.style.width = '20px';
            landingDot.style.height = '20px';
            landingDot.style.opacity = '.5';

           
      
            aboutDot.style.opacity = '1';
            aboutDot.style.width = '35px';
            aboutDot.style.height = '35px';
            
        }
        else {
            landingDot.style.width = '35px';
            landingDot.style.height = '35px';
            landingDot.style.opacity = '1';

           

            aboutDot.style.opacity = '.5';
            aboutDot.style.width = '20px';
            aboutDot.style.height = '20px';
     
        }
    });


   

}

}

</script>

<template>
  <div class="container">
    <div class="guide-dots d-flex flex-column">
        <div id="dot-one" class="large-dot"></div>
        <div id="dot-two" class="medium-dot"></div>
        <div id="dot-three" class="small-dot"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 18vw;
  height: 30vh;
  background: #32295555;
  
  position: fixed;
  border-radius: 25px;
  backdrop-filter: blur(5px);
  left: 5vh;
  top: 10vh;
}

.guide-dots{
    position: fixed;
    z-index: 5;
    text-align: center;
    justify-content: center;
    align-items: center;
    top: 10%;
    left: 1vw;

  }
  
  .small-dot, .medium-dot, .large-dot{
    background-color: white;
    border-radius: 100%;
    margin: 1em;
    backdrop-filter: blur(5px);
    
    
  }
  
  .large-dot{
    
    height: 30px;
    width: 30px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all .5s;
  
  }
  
  .large-dot::after{
    
    content: "Landing";
    color: white;
    letter-spacing:.5em;
    font-size: 1em;
    font-weight: 900;
    padding-left: 14em;
    font-family: exo-2;
    

  }
  
  .medium-dot{
    height: 20px;
    width: 20px;
    opacity: .5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;

    backdrop-filter: blur(5px);
  }
  
  .medium-dot::after{
    content: "Services";
    color: white;
    letter-spacing:.5em;
    font-size: 1em;
    font-weight: 900;
    padding-left: 15em;
    font-family: exo-2;

    
  }
  
  
  .small-dot{
    height: 20px;
    width: 20px;
    opacity: .5;
    display: flex;
    justify-content: center;
    align-items: center;

  
  }
  
  .small-dot::after{
    content: "Contact";
    color: white;
    letter-spacing:.5em;
    font-size: 1em;
    font-weight: 900;
    padding-left: 14em;
    font-family: exo-2;

    
  }
  
  
  @keyframes glow {
    0% {
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255)) ;
    }
  
    50% {
        filter: drop-shadow(0px 0px 2.5px rgb(255, 255, 255)) ;
    }
  
    100%{
        filter: drop-shadow(0px 0px 5px rgb(255, 255, 255)) ;
    }
  }

  @media only screen and (max-width: 600px) {
    .container {
      display: none;
    }
}

  


</style>