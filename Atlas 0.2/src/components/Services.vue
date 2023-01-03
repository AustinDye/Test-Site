
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {    
        modules: [Pagination],
        onSwiper,
        onSlideChange,
        
      };
    },
  };

</script>

<template>
 <div class="containerr">
  
        <swiper
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          
            <div class="slide-wrapper">
              <img src="../assets/Slice2.png" alt="">
                <p class="first-slide">Custom Web Development</p>
                <p class="slide-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias dolore,
                quos, corporis veritatis illum quod sed voluptate amet dolor commodi similique 
                tempora vitae, sint laboriosam neque modi beatae. Temporibus, nam!
                </p>
               
            </div>
        </swiper-slide>
        <swiper-slide>

          <div class="slide-wrapper">
            <img id="seo" src="../assets/seo-slice.png" alt="">
              <p class="first-slide">Search Engine Optimization</p>
              <p class="slide-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias dolore,
              quos, corporis veritatis illum quod sed voluptate amet dolor commodi similique 
              tempora vitae, sint laboriosam neque modi beatae. Temporibus, nam!
              </p>
             
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-wrapper">
            <img id="fullstack" src="../assets/fullstack-slice.png" alt="">
              <p class="first-slide">FullStack Development</p>
              <p class="slide-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias dolore,
              quos, corporis veritatis illum quod sed voluptate amet dolor commodi similique 
              tempora vitae, sint laboriosam neque modi beatae. Temporibus, nam!
              </p>
          </div>
        </swiper-slide>
      
      </swiper>
 
   
 </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');



.containerr {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/space-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;

 
}


.swiper {
    width: 40vw;
    height: 80vh;
    border-radius: 40px;
    backdrop-filter: blur(5px);
   
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: #32295555;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    
    
  }
  
  .swiper-slide img {
   
    position: absolute;
    width: 40vw;
    z-index: -1;
    top: 1vh;
 

  }

.slide-wrapper{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

   
 
}
  

.first-slide {
    width: 100%;
    position: absolute;
    color: white;
    font-size: 2em;
    font-family: open-sans;
    font-weight: bolder;
    top: 55%;

    text-align: center;
    z-index: 1;
}

.slide-body {
    width: 100vh;
    position: absolute;
    top: 50%;
    color: white;
    font-size:1em;
    font-family: open-sans;
    font-weight: bolder;
    text-align: center;

   
    border-radius: 25px;
    padding: 6em;
    
   
    
}
.service-card {
    width: 25vw;
    height: 75vh;
    border-radius: 2em;
    background-color: rgb(19, 0, 19);
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.45));
    border: solid .1em rgba(255, 255, 255, 0.462);
}

/*.slogan{
    color: white;
    font-family: exo-2;
    font-size: 3em;
    padding-left: 8em;
    letter-spacing: .2em;
 
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
}*/

#seo{
  top: 12vh;
}

#fullstack{
  top: 20vh;
  width: 38vw;
}

@media only screen and (max-width: 1024px) {
  .swiper {
    width: 80vw;
    height: 80vh;
  
  }

  .swiper-slide img {
    width: 90vw;
    top: 10vh;
   

  }

  .first-slide {
    width: 80vw;
    position: absolute;
    color: white;
    font-size: 3em;
    font-family: open-sans;
    font-weight: bolder;
    top: 55%;

  }

  .slide-body {
    width: 80vw;
    top: 62%;
    font-size: 1.5em;
    padding: 1em;
  }
}

@media only screen and (max-width: 600px) {
  .swiper {
    width: 100vw;
    height: 80vh;
  
  }

  .swiper-slide img {
    width: 100vw;
    top: 10vh;

  }

  .first-slide {
    width: 100%;
    position: absolute;
    color: white;
    font-size: 1.8em;
    font-family: open-sans;
    font-weight: bolder;
    top: 48%;

  }

  .slide-body {
    width: 100vw;
    top: 55%;
    padding: 1em;
    font-size: 1em;
  }
}



</style>