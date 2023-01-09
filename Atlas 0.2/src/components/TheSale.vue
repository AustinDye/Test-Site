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
                            <b>Digital Experiences <div class="letter-circle"></div> </b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                        <img class="image-icon d-none d-md-flex" id="seo" src="../assets/seo-slice.png" alt="">
                      
                    </div>
                  </div>
                <div class="col-12">
                    <div class="card-holder d-flex">
                        <img class="image-icon d-none d-md-flex p-3" id="seo" src="../assets/fullstack-slice.png" alt="">
                        <div class="text-wrapper">
                            <b>Ecommerce <div id="letter-circle-2" class="letter-circle"></div></b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                      
                    </div>
                </div>
                <div class="col-12">
                    <div class="card-holder  d-flex ">
                        <div class="text-wrapper">
                            <b>Digital Support <div id="letter-circle-3" class="letter-circle"></div></b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor iure saepe obcaecati accusamus, vel assumenda explicabo voluptas recusandae, quidem amet magni laudantium quam laboriosam. Eveniet maiores alias nemo soluta!</p>
                        </div>
                        <img class="image-icon p-5 d-none d-md-flex" id="fullstack" src="../assets/slice2.png" alt="">
                      
                    </div>
                </div>
               
             
               
            </div>
        </div>
      </div>
    
      <div class="bg-sash-dark d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-12"></div>
                <div class="col-sm-4 col-md-2 skills-img"><img class="img-brand" src="https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png" alt=""></div>
                <div class="col-sm-4 col-md-2 skills-img"><img class="img-brand" src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_84fd5bd582809f20ff5682d2746ffa82/shopify.png" alt=""></div>
                <div class="col-sm-4 col-md-2 skills-img"><img class="img-brand" src="https://s.w.org/style/images/about/WordPress-logotype-alternative.png" alt=""></div>
                <div class="col-sm-4 col-md-2 skills-img azure"><img class="img-brand" src="https://www.dbcloudbin.com/wp-content/uploads/2019/07/azure_logo_794_new.png" alt=""></div>
        
            </div>
        </div>
      </div>
      <div class="bg-sash d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-12"></div>
                <div class="col-4 img-brand deb"><img src="../assets/Screenshot 2023-01-01 at 11.13.37 AM.png" alt=""></div>
                <div class="col-4 img-brand"><img src="../assets/portsches-logo.webp" alt=""></div>
                <div class="col-4 img-brand"><h5>Show up here! Be our next project.</h5></div>
        
            </div>
        </div>
      </div>
      <div class="about-section">
        <div class="">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-8 d-flex flex-column p-5">
                    <h2>Customized Experience</h2>
                    <p>At Pleiades, we specialize in creating custom websites for businesses and organizations of all sizes. We take pride in our ability to understand our clients' needs and goals, and use that understanding to craft visually stunning and highly functional websites. Our team of experienced designers and developers work closely with each client to ensure that their website is not only visually appealing, but also effectively communicates their brand and meets the needs of their target audience. Whether you need a simple brochure website or a complex e-commerce platform, we have the skills and expertise to bring your vision to life. Contact us today to discuss your project and see how we can help you take your online presence to the next level.</p>
                </div>
            </div>
        </div>
    </div>
    </div>

   


    <div class="bg"></div>
    
</template>

<style scoped>

.letter-circle{
    background: #ffb625a3;
    z-index: -1;
    width: 8vh;
    height: 8vh;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: -1vw;
}

#letter-circle-2{
    background: #0d5bd88f;
    left: 0;
  
}

#letter-circle-3{
    background: #fd4715a0;
}

.about-section{
    width: 100vw;
    height: 100vh;
    top: 280vh;
    padding-left: 15vw;
    position: absolute;
    background: white;
    
}

.about-section .col-8{
    border-left: .5em solid rgba(0, 0, 0, 0.457);
    border-right: .5em solid rgba(0, 0, 0, 0.518);
}

.about-section p{
    font-size: 1em;
    font-family: geo-light;
}

.about-section h2{
    font-size: 4em;
    font-weight: 900;
    font-family: geo-medium;
    text-align: center;
    
}
.azure{
    max-width: 8vw;
}

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
    align-items: center;
    max-width: 20vw;
    border-radius: 30px;
}

.bg-sash{
    width: 100vw;
    height: 15vh;
 
    backdrop-filter: blur(10px);
    bottom: -250vh;
    z-index: 2;
    position: absolute;
    padding-left: 23vw;
    padding-right: 8vw;
   

}

.bg-sash img {
    max-width: 10vw;
}

.bg-sash-dark{
    width: 100vw;
    height: 10vh;
  

    bottom: -170vh;
    position: absolute;
    padding-left: 22vw;
    padding-right: 9vw;
  

}

.bg-sash-dark img {
    max-width: 90%;
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
    position: relative;
}

.text-wrapper p {
    font-size: 1.2em;
}

.img-brand{
    padding: 1em;

    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 17vw;
    font-family: geo-medium;
    margin: 1em;
}
.img-brand img{
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .sales-holder{
      
        padding-left: .5em;
        padding-right: 0;
  
    
    }

    h1{
        padding-left: 0;
        font-size: 6em;
        padding: 0em;
        padding-bottom:0;
    }

    .text-wrapper {
        width: 100%;
    }
    
    .wrapper{
        top: 55vh;
    }

    .bg-sash{
        width: 100vw;
        height: 30vh;
     
        backdrop-filter: blur(10px);
        bottom: -350vh;
        z-index: 5;
        position: absolute;
        padding-left: 23vw;
        padding-right: 8vw;
       
    
    }

    .bg-sash-dark{
        width: 100%;
        height:100%;
        z-index: 5;

        bottom: -240vh;
        position: absolute;
        padding-left: 0;
        padding-right: 0;
        padding: 10vh;
    
    }

    .about-section{
        width: 100vw;
        height: 100vh;
        top: 300vh;
        padding-left: 0;
        padding: 1em;
        padding-top: 10vh;
       
    }

    .about-section h2{
        font-size: 3em;
    }

 
}
</style>