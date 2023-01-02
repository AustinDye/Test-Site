<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
  

    <div class="wrapper">
   
    </div>
    <div class="guide-dots d-flex flex-column">
      <div class="large-dot"></div>
      <div class="medium-dot"></div>
      <div class="small-dot"></div>
  </div>
    <RouterView />
  </header>

 
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
  
  height: 50px;
  width: 50px;
  opacity: 1;
  filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: glow 5s infinite;

}

.large-dot::after{
  content: "Landing";
  color: white;
  letter-spacing:.5em;
  font-size: 1.2em;
  font-weight: 800;
  padding-left: 15em;
  font-family: exo-2;
  filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
  animation: glow 5s infinite;
  
}

.medium-dot{
  height: 25px;
  width: 25px;
  opacity: .5;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 25px;
  width: 25px;
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
