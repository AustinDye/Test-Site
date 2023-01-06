
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
  <div class="wrapper">
  
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
                <p class="slide-header">Custom Web Development</p>
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
              <p class="slide-header">Search Engine Optimization</p>
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
              <p class="slide-header">FullStack Development</p>
              <p class="slide-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias dolore,
              quos, corporis veritatis illum quod sed voluptate amet dolor commodi similique 
              tempora vitae, sint laboriosam neque modi beatae. Temporibus, nam!
              </p>
          </div>
        </swiper-slide>
      
      </swiper>
 
      
 </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');



.containerr {
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: end;
  align-items: center;
  background-image: url('../assets/Page 1.png');
  padding-top:100vh;
  padding-right:8vw ;
 

 
}

.swiper {
    width:40vw;
    height: 80vh;
    border-radius: 60px;
    backdrop-filter: blur(5px);
    color: black;
   
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;

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

.slide-header {
    width: 80%;
    position: absolute;
    font-size: 2.5em;
    font-family: open-sans;
    font-weight: bolder;
    top: 55%;
    text-align: center;
    z-index: 1;
}

.slide-body {
    width: 30%;
    position: absolute;
    top: 65%;
    
    font-size:1em;
    font-family: open-sans;
    font-weight: bolder;
    text-align: left;
    border-radius: 25px;
  
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
    color: black;
    font-family: exo-2;
    font-size: 3em;
    padding-left: 8em;
    letter-spacing: .2em;
 
    filter: drop-shadow(0px 0px 15px rgb(255, 255, 255)) ;
}*/


@media only screen and (max-width: 1024px) {
  .swiper {
    width: 80vw;
    height: 80vh;
  
  }

  .swiper-slide img {
    width: 90vw;
    top: 10vh;
   
  }

  .slide-header {
    width: 80vw;
    position: absolute;
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
  .wrapper{
    position: relative;
  }

  .containerr{
    padding-left: 0;
    padding: 1em;
    padding-top:0vh;
   

  }
  .swiper {
    width: 95vw;
    height: 70vh;
    background: rgba(0, 0, 0, 0.393);
    color: white;
    border-radius: 0;
    top: 65vh;

  }

  .swiper-slide img {
    width: 100vw;
    top: 10vh;
  }

  .slide-header {
    width: 100%;
    position: absolute;
    font-size: 1.5em;
    font-family: open-sans;
    font-weight: bolder;
    top: 48%;

  }

  .slide-body {
    width: 100%;
    top: 55%;
    padding: 2em;
    font-size: .9em;
  }

  #seo{
    top: 20vh;
    width: 90vw;
  }
  
  #fullstack{
    top: 24vh;
    width: 90vw;
  }
}



</style>