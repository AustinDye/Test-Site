<script>

</script>

<template>
    <div class="containerr">
      <div class="row wrapper">
        <div class="col-12 content-holder">
            <h1>Experts on the Web</h1>
            <div class="row sales-holder">
            
             
                  <div class="col-4">
                    <div class="card-holder">
                        <img class="image-icon" id="seo" src="../assets/seo-slice.png" alt="">
                        <div class="text-wrapper">
                            <b>Digital Experiences </b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                      
                    </div>
                  </div>
                <div class="col-4">
                    <div class="card-holder">
                        <img class="image-icon" id="seo" src="../assets/seo-slice.png" alt="">
                        <div class="text-wrapper">
                            <b>Ecommerce</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                      
                    </div>
                </div>
                <div class="col-4">
                    <div class="card-holder">
                        <img class="image-icon" id="fullstack" src="../assets/seo-slice.png" alt="">
                        <div class="text-wrapper">
                            <b>Digital Support</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                      
                    </div>
                </div>
             
               
            </div>
        </div>
      </div>
      <div class="bg-sash d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-12"></div>
                <div class="col-4 img-brand deb"><img src="../assets/Screenshot 2023-01-01 at 11.13.37 AM.png" alt=""></div>
                <div class="col-4 img-brand"><img src="../assets/portsches-logo.webp" alt=""></div>
                <div class="col-4 img-brand"><h3>Show up here! Be our next project.</h3></div>
        
            </div>
        </div>
      </div>
    </div>

    <div class="bg"></div>
    
</template>

<style scoped>

.image-icon{
    max-width: 25vw;
}

b{
    font-size: 2em;

}

.deb{
    background-color: #5E0149;
    display: flex;
    justify-content: center;
    max-width: 20vw;
    border-radius: 30px;
}

.bg-sash{
    width: 100vw;
    height: 25vh;
    background: #ffb62583;
    backdrop-filter: blur(10px);
    bottom: -100%;
    position: absolute;
    padding-left: 10vw;

}

.containerr {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: url('../assets/path5472.png');
    z-index: -1;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 20vh;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 80vh;
}

.content-holder{
    display: flex;
    flex-direction: column;
    justify-content: center;

}

h1{
 
    color: black;
    font-size: 7em;
    font-family: exo-2;
    font-weight: bolder;
    padding-bottom: 5vh;
    text-align: center;
    padding-left: 15vw;
    

    
}

ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
 
    border-bottom:  rgba(0, 0, 0, 0.417) 5px solid;
}

li{
    font-family: exo-2;
    font-size: 1.2em;
    font-weight: 300;
    padding: 1em;
}

.bg{
    height: 100vh;
    width: 100vw;
    z-index: -2;
    position: absolute;
    background: white; /*url('../assets/Page 1.png');*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.sales-holder{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20vw;
    padding-right: 5vw;
    margin-top: 10vh;

}

.card-holder{
    background: rgba(255, 243, 254, 0.593);
    padding: 1em;
    margin-bottom: 5em;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    backdrop-filter: blur(5px);
}

.text-wrapper{
    
  height: 100%;
}

.img-brand{
    padding: 1em;
    padding-left:3em ;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 40vw;
}
.img-brand img{
    width: 80%;
}

@media only screen and (max-width: 600px) {
   .wrapper{
        width: 100vw;
   }

   ul{
        width: 90%;
        margin: 2em;
   }

   li{
        font-size: 1em;
   }

   h1{
        width: 100%;
        font-size: 2em;
   }
   .body-one{
        width: 100%;
        font-size: 1em;
        padding: 2em;
   }
   
   .white-brick{
        margin-top:85%;
   }
 
}
</style>