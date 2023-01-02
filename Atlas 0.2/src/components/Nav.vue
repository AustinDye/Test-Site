
<script>

export default {
  mounted() {


    let landingDot = document.getElementById('dot-one');
    let aboutDot = document.getElementById('dot-two');
    let contactDot = document.getElementById('dot-three');
  
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
    <div class="guide-dots d-flex flex-column">
        <div id="dot-one" class="large-dot"></div>
        <div id="dot-two" class="medium-dot"></div>
        <div id="dot-three" class="small-dot"></div>
    </div>
</template>

<style scoped>
.guide-dots{
    position: fixed;
  
    z-index: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
    top: 20%;
    left: 5vw;
  }
  
  .small-dot, .medium-dot, .large-dot{
    background-color: white;
    border-radius: 100%;
    margin: 1em;
    
  }
  
  .large-dot{
    
    height: 30px;
    width: 30px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: glow 5s infinite;
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
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
    
  }
  
  .medium-dot{
    height: 20px;
    width: 20px;
    opacity: .5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    animation: glow 5s infinite;
  }
  
  .medium-dot::after{
    content: "Services";
    color: white;
    letter-spacing:.5em;
    font-size: 1em;
    font-weight: 900;
    padding-left: 15em;
    font-family: exo-2;
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
    
  }
  
  
  .small-dot{
    height: 20px;
    width: 20px;
    opacity: .5;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: glow 5s infinite;
  
  }
  
  .small-dot::after{
    content: "Contact";
    color: white;
    letter-spacing:.5em;
    font-size: 1em;
    font-weight: 900;
    padding-left: 14em;
    font-family: exo-2;
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
    
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



</style>