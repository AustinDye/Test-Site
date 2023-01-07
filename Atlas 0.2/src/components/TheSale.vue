<script>

</script>

<template>
    <div class="containerr">
        <div class="sash"></div>
      <div class="row wrapper">
        <div class="col-12 content-holder">
            <h1>Experts on the Web</h1>
            <div class="row sales-holder">
            
             
                  <div class="col-12">
                    <div class="card-holder d-flex">
                     
                        <div class="text-wrapper">
                            <b>Digital Experiences </b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                        <img class="image-icon" id="seo" src="../assets/seo-slice.png" alt="">
                      
                    </div>
                  </div>
                <div class="col-12">
                    <div class="card-holder d-flex">
                        <img class="image-icon" id="seo" src="../assets/fullstack-slice.png" alt="">
                        <div class="text-wrapper">
                            <b>Ecommerce</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                      
                    </div>
                </div>
                <div class="col-12">
                    <div class="card-holder d-flex ">
                        <div class="text-wrapper">
                            <b>Digital Support</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                        <img class="image-icon" id="fullstack" src="../assets/slice2.png" alt="">
                      
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

.sash{
    position: absolute;
    width: 100vw;
    height: 20vh;
    bottom: 0;
}

.image-icon{
    max-width: 35vw;
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
    bottom: -170vh;
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
 
    color: white;
    font-size: 9em;
    font-family: geo-medium;
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
    height: 160vh;
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
    padding: 3em;
    border-radius: 25px;
    backdrop-filter: blur(5px);
}

.text-wrapper{
  font-family: geo-light;
  height: 100%;
}

.text-wrapper b{
    font-size: 3em;
    font-family: geo-medium;
}

.text-wrapper p {
    font-size: 1.2em;
}

.img-brand{
    padding: 1em;
    padding-left:3em ;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 25vw;
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